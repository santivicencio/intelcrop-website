import type { Dictionary } from '@/lib/i18n/types'
import type { Locale } from '@/lib/i18n/config'
import { getServices } from '@/content/services'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ActorsExplorer } from './ActorsExplorer'

export function ActorsSection({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const { actors } = dictionary
  const serviceNames = Object.fromEntries(
    getServices(locale).map((service) => [service.slug, service.name])
  )
  return (
    <Section id="actores" surface="white" ariaLabelledBy="actors-heading">
      <SectionHeading id="actors-heading" kicker={actors.kicker} subcopy={actors.subcopy}>
        {actors.heading}
      </SectionHeading>
      <ActorsExplorer
        locale={locale}
        actors={actors}
        serviceNames={serviceNames}
        pickerLabel={dictionary.a11y.actorPicker}
      />
    </Section>
  )
}
