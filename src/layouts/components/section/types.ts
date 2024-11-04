import type { BaseProps } from "@/types/common";

export interface SectionProps extends BaseProps {
  background?: "none" | "light" | "dark" | "gradient";
  padding?: "none" | "sm" | "md" | "lg";
}
