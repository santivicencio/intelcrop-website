import { CircleCheck } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/types'
import { Container } from '@/components/layout/Container'
import { Kicker } from '@/components/ui/Kicker'
import { ButtonLink } from '@/components/ui/Button'
import { ContourLines } from '@/components/decor/ContourLines'
import { LandscapeIllustration } from '@/components/decor/LandscapeIllustration'
import { TealOcreStripe } from '@/components/decor/TealOcreStripe'

export function Hero({ dictionary }: { dictionary: Dictionary }) {
  const { hero } = dictionary
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-crema pt-28 md:pt-32"
    >
      <ContourLines className="top-[-30%] left-[-20%] h-[140%] w-[90%]" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          <div className="pb-4 lg:pb-20">
            <Kicker>{hero.kicker}</Kicker>
            <h1
              id="hero-heading"
              className="mt-5 text-display leading-[1.04] font-extrabold tracking-[-0.025em]"
            >
              {hero.headlineStart}{' '}
              <span className="text-teal-titulo">{hero.headlineAccent}</span>
            </h1>
            <TealOcreStripe className="mt-7" />
            <p className="mt-7 max-w-xl text-lg leading-relaxed md:text-xl">
              {hero.subcopy}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#soluciones">{hero.ctaPrimary}</ButtonLink>
              <ButtonLink href="#como-funciona" variant="secondary">
                {hero.ctaSecondary}
              </ButtonLink>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-gris-texto">
              <CircleCheck
                aria-hidden="true"
                size={18}
                className="shrink-0 text-teal-accesible"
              />
              {hero.cropin}
            </p>
          </div>
          <LandscapeIllustration className="self-end" />
        </div>
      </Container>
    </section>
  )
}
