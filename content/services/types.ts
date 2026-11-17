/**
 * Service ("solution") pages — one page per service under
 * /[locale]/soluciones/[slug]. Content comes from the InteliCrop Summary 2026.
 * Slugs are shared by both locales so the language switch keeps the page.
 */

export const serviceSlugs = [
  'score-agroclimatico',
  'licencias-analiticas',
  'analisis-sectorial',
  'riesgo-climatico',
  'analitica-de-precision',
  'visualizadores',
  'sostenibilidad-eudr',
  'capacitaciones',
] as const

export type ServiceSlug = (typeof serviceSlugs)[number]

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value)
}

/** Keys of the Lucide icons registered in components/ui/icons.ts. */
export type IconKey =
  | 'gauge'
  | 'smartphone'
  | 'map'
  | 'cloudSun'
  | 'satellite'
  | 'chart'
  | 'leaf'
  | 'graduation'
  | 'clipboard'
  | 'scan'
  | 'shield'
  | 'target'
  | 'binoculars'
  | 'file'
  | 'coins'
  | 'trending'
  | 'atom'
  | 'brain'
  | 'heart'
  | 'droplets'
  | 'cloudRain'
  | 'thermometer'
  | 'bell'
  | 'sprout'
  | 'wheat'
  | 'bug'
  | 'flask'
  | 'trees'
  | 'footprints'
  | 'recycle'
  | 'layers'
  | 'users'
  | 'calendar'
  | 'tractor'
  | 'database'
  | 'cloud'
  | 'landmark'
  | 'factory'
  | 'ship'
  | 'building'
  | 'globe'
  | 'presentation'
  | 'activity'
  | 'waves'
  | 'zap'
  | 'refresh'
  | 'gavel'
  | 'box'

export type RiskTone = 'bajo' | 'medio' | 'alto' | 'rojo' | 'critico'

export interface FeatureBlock {
  kicker: string
  title: string
  intro?: string
  items: { name: string; body: string; icon: IconKey }[]
  note?: string
}

export interface Service {
  slug: ServiceSlug
  icon: IconKey
  name: string
  /** One line for tiles and the menu. */
  short: string
  kicker: string
  /** Apple-style statement headline. */
  headline: string
  intro: string
  highlights: { value: string; label: string }[]
  steps?: {
    kicker: string
    title: string
    items: { name: string; subtitle?: string; body?: string; points?: string[] }[]
    note?: string
  }
  featureBlocks?: FeatureBlock[]
  bands?: {
    kicker: string
    title: string
    items: { name: string; action: string; tone: RiskTone }[]
    note: string
  }
  formulas?: {
    kicker: string
    title: string
    items: { name: string; expression: string }[]
    note?: string
  }
  benefits?: { kicker: string; title: string; items: { name: string; body: string }[] }
  basel?: {
    kicker: string
    title: string
    intro: string
    requiresLabel: string
    contributionLabel: string
    items: { name: string; body: string; requires: string; contribution: string }[]
    closing: string
    sources: string
  }
  timeline?: {
    kicker: string
    title: string
    items: { name: string; date: string; icon: IconKey }[]
    facts: string[]
    note: string
  }
  commercial?: string
  footnote?: string
}
