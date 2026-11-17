import { Mail, Phone, Globe } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import type { Locale } from '@/lib/i18n/config'
import { getServices } from '@/content/services'
import { siteConfig, telLink } from '@/lib/site-config'
import { Section } from '@/components/layout/Section'
import { Kicker } from '@/components/ui/Kicker'
import { ContactForm } from '@/components/ui/ContactForm'
import { TealOcreStripe } from '@/components/decor/TealOcreStripe'

export function ContactSection({
  locale,
  dictionary,
  heading,
  defaultInterest,
}: {
  locale: Locale
  dictionary: Dictionary
  /** Overrides the default heading (service pages). */
  heading?: string
  defaultInterest?: string
}) {
  const { contact } = dictionary
  const interestOptions = [
    contact.form.interestDemo,
    ...getServices(locale).map((service) => service.name),
    contact.form.interestOther,
  ]
  return (
    <Section id="contacto" surface="white" ariaLabelledBy="contact-heading">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
        <div>
          <Kicker>{contact.kicker}</Kicker>
          <h2 id="contact-heading" className="mt-4 text-h2 leading-[1.12] font-extrabold">
            {heading ?? contact.heading}
          </h2>
          <TealOcreStripe className="mt-6" />
          <p className="mt-6 text-lg">{contact.subcopy}</p>

          <dl className="mt-10 flex flex-col gap-6">
            <div>
              <dt className="text-xs font-bold tracking-[0.3em] text-ocre-accesible uppercase">
                {contact.emailLabel}
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-3 text-lg font-bold text-teal-accesible underline-offset-4 hover:underline"
                >
                  <Mail aria-hidden="true" size={20} />
                  {siteConfig.contactEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-[0.3em] text-ocre-accesible uppercase">
                {contact.phoneLabel}
              </dt>
              {siteConfig.phones.map((phone) => (
                <dd key={phone} className="mt-2">
                  <a
                    href={telLink(phone)}
                    className="inline-flex items-center gap-3 tabular-nums text-tinta hover:text-teal-accesible"
                  >
                    <Phone aria-hidden="true" size={18} className="text-teal-accesible" />
                    {phone}
                  </a>
                </dd>
              ))}
            </div>
            <div>
              <dt className="text-xs font-bold tracking-[0.3em] text-ocre-accesible uppercase">
                {contact.webLabel}
              </dt>
              <dd className="mt-2 inline-flex items-center gap-3 text-tinta">
                <Globe aria-hidden="true" size={18} className="text-teal-accesible" />
                {siteConfig.displayUrl}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-[var(--radius-card)] bg-crema p-6 md:p-10">
          <ContactForm
            dictionary={dictionary}
            interestOptions={interestOptions}
            defaultInterest={defaultInterest}
          />
        </div>
      </div>
    </Section>
  )
}
