import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Hero } from '@/components/sections/Hero'
import { StatsBand } from '@/components/sections/StatsBand'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ActorsSection } from '@/components/sections/ActorsSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { IfisSection } from '@/components/sections/IfisSection'
import { SustainabilitySection } from '@/components/sections/SustainabilitySection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) notFound()
  const locale = rawLocale
  const dictionary = await getDictionary(locale)

  return (
    <>
      <Hero dictionary={dictionary} />
      <StatsBand dictionary={dictionary} />
      <SolutionsSection locale={locale} dictionary={dictionary} />
      <ProblemSection dictionary={dictionary} />
      <ActorsSection locale={locale} dictionary={dictionary} />
      <HowItWorksSection dictionary={dictionary} />
      <IfisSection locale={locale} dictionary={dictionary} />
      <SustainabilitySection locale={locale} dictionary={dictionary} />
      <AboutSection dictionary={dictionary} />
      <ContactSection locale={locale} dictionary={dictionary} />
    </>
  )
}
