import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, locales } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { absoluteUrl } from '@/lib/site-config'
import {
  getService,
  getServices,
  isServiceSlug,
  serviceSlugs,
  servicePath,
} from '@/content/services'
import type { Surface } from '@/components/layout/Section'
import { ServiceLocalNav } from '@/components/service/ServiceLocalNav'
import {
  RelatedServices,
  ServiceBands,
  ServiceBasel,
  ServiceBenefits,
  ServiceClosingNotes,
  ServiceFeatureBlock,
  ServiceFormulas,
  ServiceHero,
  ServiceHighlights,
  ServiceSteps,
  ServiceTimeline,
} from '@/components/service/ServiceBlocks'
import { ContactSection } from '@/components/sections/ContactSection'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.flatMap((locale) => serviceSlugs.map((slug) => ({ locale, slug })))
}

type Params = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale) || !isServiceSlug(slug)) return {}
  const service = getService(locale, slug)
  if (!service) return {}
  return {
    title: service.name,
    description: `${service.headline} ${service.short}`,
    alternates: {
      canonical: absoluteUrl(servicePath(locale, slug)),
      languages: {
        'es-EC': absoluteUrl(servicePath('es', slug)),
        'en-US': absoluteUrl(servicePath('en', slug)),
        'x-default': absoluteUrl(servicePath('es', slug)),
      },
    },
    openGraph: {
      title: `${service.name} | InteliCrop`,
      description: service.short,
      url: absoluteUrl(servicePath(locale, slug)),
    },
  }
}

export default async function ServicePage({ params }: Params) {
  const { locale, slug } = await params
  if (!isLocale(locale) || !isServiceSlug(slug)) notFound()
  const service = getService(locale, slug)
  if (!service) notFound()
  const dictionary = await getDictionary(locale)

  const featureSurfaces: Surface[] = ['crema', 'tinta', 'white']

  return (
    <div className="pt-[63px]">
      <ServiceLocalNav locale={locale} service={service} dictionary={dictionary} />
      <ServiceHero service={service} dictionary={dictionary} />
      <ServiceHighlights service={service} dictionary={dictionary} />
      {service.steps && <ServiceSteps steps={service.steps} />}
      {service.bands && <ServiceBands bands={service.bands} />}
      {service.formulas && !service.basel && (
        <ServiceFormulas formulas={service.formulas} />
      )}
      {service.benefits && <ServiceBenefits benefits={service.benefits} />}
      {service.featureBlocks?.map((block, index) => (
        <ServiceFeatureBlock
          key={block.title}
          block={block}
          index={index}
          surface={
            !service.steps && index === 0
              ? 'white'
              : featureSurfaces[index % featureSurfaces.length]
          }
        />
      ))}
      {service.basel && <ServiceBasel basel={service.basel} />}
      {service.formulas && service.basel && (
        <ServiceFormulas formulas={service.formulas} />
      )}
      {service.timeline && <ServiceTimeline timeline={service.timeline} />}
      <ServiceClosingNotes service={service} dictionary={dictionary} />
      <RelatedServices
        locale={locale}
        current={service}
        services={getServices(locale)}
        dictionary={dictionary}
      />
      <ContactSection
        locale={locale}
        dictionary={dictionary}
        heading={`${dictionary.servicePage.contactHeading} ${service.name}.`}
        defaultInterest={service.name}
      />
    </div>
  )
}
