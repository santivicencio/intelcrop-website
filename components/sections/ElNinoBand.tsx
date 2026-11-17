import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n/types'
import { contactHref } from '@/content/site'
import { Container } from '@/components/layout/Container'
import { ButtonLink } from '@/components/ui/Button'
import { ContourLines } from '@/components/decor/ContourLines'
import sello from '@/public/brand/intelicrop-sello.png'

/** Manual §3.6 home: El Niño band in Tinta with the seal, CTA in Ocre. */
export function ElNinoBand({ dictionary }: { dictionary: Dictionary }) {
  const { elNino } = dictionary
  return (
    <section aria-labelledby="elnino-heading" className="bg-white py-6 md:py-10">
      <Container>
        <div
          data-surface="dark"
          className="relative isolate grid items-center gap-8 overflow-hidden rounded-[var(--radius-card)] bg-tinta p-8 text-menta md:grid-cols-[1fr_auto] md:p-14"
        >
          <ContourLines tone="dark" className="inset-0 h-full w-full" />
          <div>
            <h2 id="elnino-heading" className="text-h2 leading-[1.15] font-extrabold">
              {elNino.headingStart}{' '}
              <span className="text-teal-luz">{elNino.headingAccent}</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg">{elNino.body}</p>
            <ButtonLink href={contactHref} variant="accent" className="mt-8">
              {elNino.cta}
            </ButtonLink>
          </div>
          <Image
            src={sello}
            alt={elNino.sealAlt}
            width={200}
            height={200}
            className="mx-auto hidden h-auto w-40 md:block lg:w-52"
          />
        </div>
      </Container>
    </section>
  )
}
