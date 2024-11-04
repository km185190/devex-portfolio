import type { BaseProps } from "@/types/common";

export interface CardProps extends BaseProps {
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
  bordered?: boolean;
  hoverable?: boolean;
}
