export interface TeamMember {
  name: string;
  role: string;
  category: 'faculty-coordinator' | 'office-bearer' | 'creative-head' | 'team-lead' | 'creative-lead';
  imageUrl?: string;
}

export const facultyCoordinators: TeamMember[] = [
  { name: 'Prof. Arvinder Kaur', role: 'Faculty Coordinator', category: 'faculty-coordinator' },
  { name: 'Dr. Rahul Johari', role: 'Faculty Sponsor', category: 'faculty-coordinator' },
];

export const officeBearer: TeamMember[] = [
  { name: 'Shivam', role: 'Chair', category: 'office-bearer' },
  { name: 'Sheelendra', role: 'Vice Chair', category: 'office-bearer' },
  { name: 'Arsh Ahmad', role: 'Secretary', category: 'office-bearer' },
  { name: 'Abhijith KS', role: 'Web Master', category: 'office-bearer' },
  { name: 'Prabhakar', role: 'Treasurer', category: 'office-bearer' },
  { name: 'Aniket Kumar', role: 'Membership Chair', category: 'office-bearer' },
];

export const acmCreatives: TeamMember[] = [
  { name: 'To be filled', role: 'Head', category: 'creative-head' },
  { name: 'TBF', role: 'Co-Head', category: 'creative-head' },
];

export const teamLeads: TeamMember[] = [
  { name: 'Shantanu Ojha', role: 'ML Captain', category: 'team-lead' },
  { name: 'Ritwik Mittal', role: 'DSA Captain', category: 'team-lead' },
  { name: 'TBF', role: 'Web Captain', category: 'team-lead' },
  { name: 'TBF', role: 'Operations', category: 'team-lead' },
];

export const creativeLeads: TeamMember[] = [
  { name: 'Utkarsh Yadav', role: 'Design Captain', category: 'creative-lead' },
  { name: 'TBF', role: 'UI/UX Captain', category: 'creative-lead' },
  { name: 'TBF', role: 'Video and Photography Captain', category: 'creative-lead' },
  { name: 'TBF', role: 'Video Editing Captain', category: 'creative-lead' },
  { name: 'Shanvi Gulia', role: 'Content Captain', category: 'creative-lead' },
  { name: 'TBF', role: 'Marketing and PR Captain', category: 'creative-lead' },
];
