import type { CardProps } from "@/components/shared/card/types";

export interface CaseStudyCardProps extends CardProps {
  title: string;
  description: string;
  industry: string;
  results: Result[];
  slug: string;
}

export interface Result {
  metric: string;
  value: string;
  context?: string;
}
