type ClassValue = string | false | null | undefined

/** Joins truthy class names. No conflict resolution — components here never pass conflicting utilities for the same property. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}
