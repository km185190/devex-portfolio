import type { BaseProps } from "@/types/common";

export interface ContainerProps extends BaseProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
}
