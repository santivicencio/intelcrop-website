/**
 * Structural brand data: ids, ordering and non-textual data (colors, numbers of
 * a data scale). All display text lives in the i18n dictionaries — this site has
 * no "stays in English" nomenclature rule like Concilium did, so nothing here is
 * bilingual-shared text.
 */

export type SolutionAreaId =
  'digitalizacion' | 'inteligencia' | 'agrofinanzas' | 'sostenibilidad'

export const solutionAreaIds: readonly SolutionAreaId[] = [
  'digitalizacion',
  'inteligencia',
  'agrofinanzas',
  'sostenibilidad',
] as const

export const solutionAreaNumbers: Record<SolutionAreaId, string> = {
  digitalizacion: '01',
  inteligencia: '02',
  agrofinanzas: '03',
  sostenibilidad: '04',
}

/** The six ecosystem actors in the "El productor al centro" ring, in ring order. */
export type EcosystemActorId =
  'financiero' | 'insumos' | 'industria' | 'gobierno' | 'multilaterales' | 'academia'

export const ecosystemActorIds: readonly EcosystemActorId[] = [
  'financiero',
  'insumos',
  'industria',
  'gobierno',
  'multilaterales',
  'academia',
] as const

/** The six audience entry points in "Para quién" — producer first, then institutions. */
export type AudienceId =
  'productores' | 'financiero' | 'insumos' | 'industria' | 'gobierno' | 'academia'

export const audienceIds: readonly AudienceId[] = [
  'productores',
  'financiero',
  'insumos',
  'industria',
  'gobierno',
  'academia',
] as const

export type DecisionDomain = 'produccion' | 'sanidad' | 'clima'

export const decisionDomains: readonly DecisionDomain[] = [
  'produccion',
  'sanidad',
  'clima',
] as const

export type CreditStageId = 'prospeccion' | 'originacion' | 'seguimiento' | 'cobranza'

export const creditStageIds: readonly CreditStageId[] = [
  'prospeccion',
  'originacion',
  'seguimiento',
  'cobranza',
] as const

/**
 * Vigor data scale for maps/charts only (never decorative) — stress to vigor,
 * per the brand brief §9.2.
 */
export const vigorScale = ['#B5553C', '#E0B04A', '#9CC56B', '#2E8B57'] as const

export const navigation = [
  { key: 'comoFunciona', href: '#como-funciona' },
  { key: 'soluciones', href: '#soluciones' },
  { key: 'paraQuien', href: '#para-quien' },
  { key: 'observatorio', href: '#observatorio' },
  { key: 'nosotros', href: '#nosotros' },
] as const

export type NavKey = (typeof navigation)[number]['key']
