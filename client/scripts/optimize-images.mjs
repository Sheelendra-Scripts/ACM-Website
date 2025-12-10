import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { existsSync } from 'fs';

const PUBLIC_DIR = './public';
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

async function getAllImages(dir) {
  const files = [];
  
  async function scan(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        // Skip fonts folder
        if (entry.name === 'fonts') continue;
        await scan(fullPath);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (SUPPORTED_EXTENSIONS.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  await scan(dir);
  return files;
}

async function optimizeImage(inputPath) {
  try {
    const stats = await stat(inputPath);
    const originalSize = stats.size;
    const ext = extname(inputPath).toLowerCase();
    const name = basename(inputPath, ext);
    const dir = dirname(inputPath);
    
    // Output as WebP for better compression
    const webpPath = join(dir, `${name}.webp`);
    
    // Skip if already optimized WebP
    if (ext === '.webp' && existsSync(webpPath)) {
      console.log(`⏭️  Skipping (already WebP): ${inputPath}`);
      return { skipped: true };
    }
    
    let sharpInstance = sharp(inputPath);
    
    // Get image metadata
    const metadata = await sharpInstance.metadata();
    
    // Resize if larger than 1920px width (for non-logo images)
    if (metadata.width > 1920 && !inputPath.toLowerCase().includes('logo')) {
      sharpInstance = sharpInstance.resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Convert to WebP with quality optimization
    await sharpInstance
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);
    
    const newStats = await stat(webpPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${basename(inputPath)} → ${basename(webpPath)}`);
    console.log(`   ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${savings}% saved)`);
    
    return {
      original: inputPath,
      optimized: webpPath,
      originalSize,
      newSize,
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return { error: true, path: inputPath };
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  console.log('Scanning for images in public folder...\n');
  
  const images = await getAllImages(PUBLIC_DIR);
  console.log(`Found ${images.length} images to optimize\n`);
  
  let totalOriginal = 0;
  let totalNew = 0;
  let optimizedCount = 0;
  
  for (const imagePath of images) {
    const result = await optimizeImage(imagePath);
    
    if (result && !result.skipped && !result.error) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      optimizedCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   Images optimized: ${optimizedCount}`);
  console.log(`   Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Total new size: ${(totalNew / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Total savings: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)}MB (${((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1)}%)`);
  
  console.log('\n⚠️  Note: Original files are preserved. Update your code to use .webp files.');
}

main().catch(console.error);
