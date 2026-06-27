export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do you work on freelance or remote projects?',
    answer:
      'Yes, I am fully available for freelance contracts and remote roles across different time zones.',
  },
  {
    id: 'faq-2',
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    id: 'faq-3',
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Absolutely. I pixel-perfectly translate Figma, Sketch, or Adobe XD designs into clean, responsive, and semantic frontend code.',
  },
  {
    id: 'faq-4',
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Yes, I am highly experienced in agile teams, git workflows, and integrating RESTful APIs or GraphQL alongside backend engineers.',
  },
];
