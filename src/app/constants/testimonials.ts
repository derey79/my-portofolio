export interface TestimonialItem {
  id: string;
  stat?: string;
  title?: string;
  text: string;
  author: string;
  role: string;
  avatarUrl?: string;
  variant: 'featured' | 'standard' | 'simple';
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'voice-8x',
    stat: '8X',
    title: 'More users converted after redesign',
    text: 'Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations.',
    author: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
    variant: 'featured', // Kartu besar kiri
  },
  {
    id: 'voice-3x',
    stat: '3X',
    title: 'Improved user engagement and sign-ups',
    text: "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
    author: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
    variant: 'standard', // Kartu kanan atas
  },
  {
    id: 'voice-small-1',
    text: "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    author: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
    variant: 'simple', // Kartu kecil bawah 1
  },
  {
    id: 'voice-small-2',
    text: 'Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.',
    author: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
    variant: 'simple', // Kartu kecil bawah 2
  },
];
