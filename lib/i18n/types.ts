import type {
  AudienceId,
  CreditStageId,
  DecisionDomain,
  EcosystemActorId,
  SolutionAreaId,
} from '@/content/site'

export interface Dictionary {
  meta: {
    title: string
    description: string
    ogAlt: string
  }
  nav: {
    comoFunciona: string
    soluciones: string
    paraQuien: string
    observatorio: string
    nosotros: string
    hablemos: string
  }
  languageSwitch: {
    label: string
    es: string
    en: string
  }
  hero: {
    eyebrow: string
    headline: string
    subcopy: string
    ctaPrimary: string
    ctaSecondary: string
  }
  ecosystem: {
    eyebrow: string
    heading: string
    centerLabel: string
    ringLabel: string
    tapHint: string
    actors: Record<EcosystemActorId, { name: string; benefit: string }>
  }
  questions: {
    eyebrow: string
    heading: string
    todayLabel: string
    withIntelCropLabel: string
    items: {
      question: string
      today: string
      withIntelCrop: string
      solutionArea: SolutionAreaId
    }[]
  }
  satellite: {
    eyebrow: string
    heading: string
    chains: Record<DecisionDomain, [string, string, string]>
    statsNote: string
    stats: { value: string; label: string }[]
    alertsChannelsNote: string
  }
  credit: {
    eyebrow: string
    heading: string
    supportingLine: string
    stages: Record<CreditStageId, { name: string; description: string }>
  }
  solutions: {
    eyebrow: string
    heading: string
    note: string
    areas: Record<SolutionAreaId, { name: string; tagline: string; items: string[] }>
  }
  audience: {
    eyebrow: string
    heading: string
    blocks: Record<AudienceId, { name: string; description: string }>
  }
  sustainability: {
    eyebrow: string
    heading: string
    items: { name: string; description: string }[]
    odsNote: string
  }
  ecuadorData: {
    eyebrow: string
    heading: string
    statsNote: string
    stats: { value: string; label: string }[]
    cropsLabel: string
    crops: string[]
  }
  whyIntelCrop: {
    statements: [string, string, string]
    equationParts: [string, string, string]
    equationResult: string
  }
  team: {
    eyebrow: string
    heading: string
    body: string
  }
  observatory: {
    eyebrow: string
    heading: string
    placeholderNote: string
    items: { date: string; category: string; title: string }[]
  }
  finalCta: {
    heading: string
    subcopy: string
    whatsappCta: string
    whatsappNote: string
    form: {
      nameLabel: string
      nameError: string
      organizationLabel: string
      organizationError: string
      organizationTypeLabel: string
      organizationTypeOptions: string[]
      emailLabel: string
      emailError: string
      needLabel: string
      needError: string
      submitLabel: string
      submittingLabel: string
      successMessage: string
      errorMessage: string
    }
  }
  footer: {
    contactLabel: string
    legalLabel: string
    privacyLabel: string
    copyrightSuffix: string
  }
  a11y: {
    skipToContent: string
    languageSwitcherLabel: string
  }
}
