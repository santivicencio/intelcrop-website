import type { Dictionary } from '@/lib/i18n/types'
import { whatsappLink } from '@/lib/site-config'
import { Section } from '@/components/layout/Section'
import { ContactForm } from '@/components/ui/ContactForm'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'

export function FinalCtaSection({ dictionary }: { dictionary: Dictionary }) {
  const href = whatsappLink(dictionary.finalCta.whatsappCta)

  return (
    <Section surface="canopy" id="final-cta">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-20">
        <RevealOnScroll>
          <h2 className="text-h1 font-medium tracking-[-0.03em] text-field">
            {dictionary.finalCta.heading}
          </h2>
          <p className="text-body-lg mt-6 max-w-[40ch] text-mist">
            {dictionary.finalCta.subcopy}
          </p>

          <div className="mt-10">
            <a
              href={href}
              target={href === '#' ? undefined : '_blank'}
              rel={href === '#' ? undefined : 'noreferrer noopener'}
              aria-disabled={href === '#'}
              className="inline-flex min-h-11 items-center gap-3 border border-teal-bright px-6 py-3 text-sm font-medium text-field transition-colors duration-[180ms] ease-[var(--ease-entry)] hover:bg-teal-bright hover:text-canopy"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C11.5 9 11 7.8 10.8 7.3c-.2-.4-.3-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.4Z" />
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3C8.4 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.2c-1.7 0-3.3-.5-4.6-1.3l-.3-.2-3.2.8.9-3.1-.2-.3C3.8 14.7 3.3 13.4 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7Z" />
              </svg>
              {dictionary.finalCta.whatsappCta}
            </a>
            {href === '#' && (
              <p className="mt-2 text-xs text-mist italic">
                {/* TODO: contenido pendiente de validación */}
                {dictionary.finalCta.whatsappNote}
              </p>
            )}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <ContactForm dictionary={dictionary} />
        </RevealOnScroll>
      </div>
    </Section>
  )
}
