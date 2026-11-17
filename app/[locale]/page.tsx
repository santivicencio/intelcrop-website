import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Hero } from '@/components/sections/Hero'
import { StatsBand } from '@/components/sections/StatsBand'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { IfisSection } from '@/components/sections/IfisSection'
import { ElNinoBand } from '@/components/sections/ElNinoBand'
import { ActorsSection } from '@/components/sections/ActorsSection'
import { EcuadorSection } from '@/components/sections/EcuadorSection'
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
  const dictionary = await getDictionary(rawLocale)

  return (
    <>
      <Hero dictionary={dictionary} />
      <StatsBand dictionary={dictionary} />
      <ProblemSection dictionary={dictionary} />
      <HowItWorksSection dictionary={dictionary} />
      <SolutionsSection dictionary={dictionary} />
      <IfisSection dictionary={dictionary} />
      <ElNinoBand dictionary={dictionary} />
      <ActorsSection dictionary={dictionary} />
      <EcuadorSection dictionary={dictionary} />
      <SustainabilitySection dictionary={dictionary} />
      <AboutSection dictionary={dictionary} />
      <ContactSection dictionary={dictionary} />
    </>
  )
}
