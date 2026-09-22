import 'server-only'
import type { Locale } from './config'
import type { Dictionary } from './types'
import es from './dictionaries/es.json'
import en from './dictionaries/en.json'

const dictionaries: Record<Locale, Dictionary> = {
  es: es as Dictionary,
  en: en as Dictionary,
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]
}
