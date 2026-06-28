export interface Skill {
  name: string;
  iconPath: string;
  percentage: number;
}

interface ComparisonItem {
  skill: string;
  withMe: boolean;
  other: boolean;
}

export interface ComparisonTableProps {
  items: ComparisonItem[];
}

export interface Project {
  title: string;
  year: string;
  image: string;
  slug: string;
}
