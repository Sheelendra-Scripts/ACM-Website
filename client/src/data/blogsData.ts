export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  publishedAt: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Building Intelligent Systems",
    subtitle: "A Journey Through Neural Networks",
    excerpt:
      "Exploring the intersection of creativity and computation, where algorithms learn to dream and machines begin to understand.",
    content: "",
    author: {
      name: "Arsh Sharma",
      role: "ML Lead",
      avatar: "/team/arsh.jpg",
    },
    category: "Machine Learning",
    tags: ["AI", "Neural Networks", "Deep Learning"],
    image: "/blogs/ml-systems.jpg",
    readTime: "8 min read",
    publishedAt: "2025-11-15",
    featured: true,
  },
  {
    id: "2",
    title: "Crafting Digital Experiences",
    subtitle: "The Philosophy of Modern Web Design",
    excerpt:
      "In the realm of pixels and code, we architect experiences that transcend the screen—moments that linger in memory.",
    content: "",
    author: {
      name: "Priya Singh",
      role: "Design Lead",
      avatar: "/team/priya.jpg",
    },
    category: "Design",
    tags: ["UI/UX", "Web Design", "Creative"],
    image: "/blogs/digital-design.jpg",
    readTime: "6 min read",
    publishedAt: "2025-11-10",
    featured: true,
  },
  {
    id: "3",
    title: "The Silent Revolution of Open Source",
    subtitle: "How Community Shapes Technology",
    excerpt:
      "Behind every line of code lies a story of collaboration—strangers united by a shared vision of what technology could become.",
    content: "",
    author: {
      name: "Vikram Patel",
      role: "Tech Lead",
      avatar: "/team/vikram.jpg",
    },
    category: "Technology",
    tags: ["Open Source", "Community", "Development"],
    image: "/blogs/open-source.jpg",
    readTime: "10 min read",
    publishedAt: "2025-11-05",
    featured: true,
  },
  {
    id: "4",
    title: "Algorithms as Poetry",
    subtitle: "Finding Elegance in Complexity",
    excerpt:
      "The most beautiful solutions are not the longest, but those that reveal truth through simplicity.",
    content: "",
    author: {
      name: "Neha Gupta",
      role: "DSA Lead",
      avatar: "/team/neha.jpg",
    },
    category: "Programming",
    tags: ["Algorithms", "DSA", "Problem Solving"],
    image: "/blogs/algorithms.jpg",
    readTime: "7 min read",
    publishedAt: "2025-10-28",
    featured: false,
  },
  {
    id: "5",
    title: "The Future We're Building",
    subtitle: "Technology with Purpose",
    excerpt:
      "Every project we undertake is a question asked to the future—and the answer shapes the world we inhabit.",
    content: "",
    author: {
      name: "Rahul Verma",
      role: "President",
      avatar: "/team/rahul.jpg",
    },
    category: "Vision",
    tags: ["Future", "Innovation", "ACM"],
    image: "/blogs/future-tech.jpg",
    readTime: "5 min read",
    publishedAt: "2025-10-20",
    featured: false,
  },
  {
    id: "6",
    title: "From Hackathon to Production",
    subtitle: "The Journey of an Idea",
    excerpt:
      "What begins as a spark in a 48-hour coding sprint can ignite a flame that lights the way for thousands.",
    content: "",
    author: {
      name: "Ananya Mehta",
      role: "Events Lead",
      avatar: "/team/ananya.jpg",
    },
    category: "Stories",
    tags: ["Hackathon", "Projects", "Journey"],
    image: "/blogs/hackathon.jpg",
    readTime: "9 min read",
    publishedAt: "2025-10-15",
    featured: false,
  },
];

export const categories = [
  "All",
  "Machine Learning",
  "Design",
  "Technology",
  "Programming",
  "Vision",
  "Stories",
];
