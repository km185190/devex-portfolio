import type { BaseProps, ThemeColor, Size, Variant } from "@/types/common";

export interface ButtonProps extends BaseProps {
  variant?: Variant;
  color?: ThemeColor;
  size?: Size;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  icon?: boolean;
  loading?: boolean;
}
