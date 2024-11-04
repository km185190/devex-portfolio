export interface BaseProps {
  className?: string;
  id?: string;
  "data-testid"?: string;
}

export interface LoadingState {
  loading?: boolean;
  loadingText?: string;
}

// Theme types for consistent styling
export type ThemeColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning";
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Variant = "solid" | "outline" | "ghost";
