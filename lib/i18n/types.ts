import type es from './dictionaries/es.json'

/**
 * The Spanish dictionary is the source of truth for the shape. `get-dictionary.ts`
 * assigns the English JSON to this type, so a missing or renamed key in either
 * language fails the type check instead of rendering `undefined`.
 */
export type Dictionary = typeof es
