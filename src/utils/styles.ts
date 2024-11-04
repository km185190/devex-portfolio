/**
 * Utility to create conditional class strings
 */
export function cx(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Common dark mode variant generator
 */
export function createDarkVariant(
  lightClass: string,
  darkClass: string
): string {
  return `${lightClass} dark:${darkClass}`;
}
