// src/constants/routes.ts (Append this data array at the bottom)

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  iconPath: string; // Paths pointing directly to your public/icons/ folder
}

// export const SKILLS_DATA: SkillItem[] = [
//   {
//     name: 'React / Next.js',
//     category: 'frontend',
//     iconPath: '/icons/nextjs.svg',
//   },
//   {
//     name: 'TypeScript',
//     category: 'frontend',
//     iconPath: '/icons/typescript.svg',
//   },
//   {
//     name: 'Tailwind CSS',
//     category: 'frontend',
//     iconPath: '/icons/tailwind.svg',
//   },
//   { name: 'HTML5 / CSS3', category: 'frontend', iconPath: '/icons/html.svg' },
//   {
//     name: 'Node.js / Express',
//     category: 'backend',
//     iconPath: '/icons/nodejs.svg',
//   },
//   { name: 'PostgreSQL', category: 'backend', iconPath: '/icons/postgres.svg' },
//   { name: 'Git & GitHub', category: 'tools', iconPath: '/icons/git.svg' },
//   { name: 'Figma', category: 'design', iconPath: '/icons/figma.svg' },
// ];

// Local mock grid array mapping parameters for testing tool vectors
export const MOCK_TOOLS = [
  { name: 'HTML', percentage: 100, iconPath: '/icons/html5.png' },
  { name: 'CSS', percentage: 90, iconPath: '/icons/css3.png' },
  { name: 'Javascript', percentage: 90, iconPath: '/icons/javascript.png' }, // Fixed typo 'Javascript'
  { name: 'Typescript', percentage: 80, iconPath: '/icons/typescript.png' }, // Fixed typo 'Typescript'
  { name: 'Sequelize', percentage: 80, iconPath: '/icons/sequalize.png' }, // Fixed typo 'Sequelize'
  { name: 'Mongo DB', percentage: 75, iconPath: '/icons/github1.png' },
  // Adding extra mock skills to safely verify scroll mechanics trigger perfectly:
  { name: 'Node.js', percentage: 85, iconPath: '/icons/database.png' },
  { name: 'React / Next.js', percentage: 95, iconPath: '/icons/mongodb.png' },
];
