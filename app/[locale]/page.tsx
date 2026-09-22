import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Hero } from '@/components/sections/Hero'
import { EcosystemSection } from '@/components/sections/EcosystemSection'
import { QuestionsSection } from '@/components/sections/QuestionsSection'
import { SatelliteSection } from '@/components/sections/SatelliteSection'
import { CreditSection } from '@/components/sections/CreditSection'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { AudienceSection } from '@/components/sections/AudienceSection'
import { SustainabilitySection } from '@/components/sections/SustainabilitySection'
import { EcuadorDataSection } from '@/components/sections/EcuadorDataSection'
import { WhyIntelCropSection } from '@/components/sections/WhyIntelCropSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { ObservatorySection } from '@/components/sections/ObservatorySection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'

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
      <EcosystemSection dictionary={dictionary} />
      <QuestionsSection dictionary={dictionary} />
      <SatelliteSection dictionary={dictionary} />
      <CreditSection dictionary={dictionary} />
      <SolutionsSection locale={locale} dictionary={dictionary} />
      <AudienceSection locale={locale} dictionary={dictionary} />
      <SustainabilitySection dictionary={dictionary} />
      <EcuadorDataSection dictionary={dictionary} />
      <WhyIntelCropSection dictionary={dictionary} />
      <TeamSection dictionary={dictionary} />
      <ObservatorySection dictionary={dictionary} />
      <FinalCtaSection dictionary={dictionary} />
    </>
  )
}
