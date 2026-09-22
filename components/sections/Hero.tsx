import type { Dictionary } from '@/lib/i18n/types'
import { Container } from '@/components/layout/Container'
import { Label } from '@/components/ui/Label'
import { Button, TextLink } from '@/components/ui/Button'
import { HeroFieldGrid } from '@/components/motion/HeroFieldGrid'

export function Hero({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section
      data-surface="dark"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-canopy text-field"
    >
      <div className="absolute inset-0 opacity-20 lg:hidden">
        <HeroFieldGrid className="h-full w-full" />
      </div>

      <Container className="relative flex flex-col items-start gap-8 pt-24 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <Label as="p" className="mb-6 text-teal-bright">
            {dictionary.hero.eyebrow}
          </Label>
          <h1 className="text-display leading-[1.05] font-semibold tracking-[-0.03em] text-field">
            {dictionary.hero.headline}
          </h1>
          <p className="text-body-lg mt-8 max-w-[52ch] leading-[1.5] text-mist">
            {dictionary.hero.subcopy}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Button href="#como-funciona">{dictionary.hero.ctaPrimary}</Button>
            <TextLink href="#final-cta" className="text-field decoration-teal-bright">
              {dictionary.hero.ctaSecondary}
            </TextLink>
          </div>
        </div>

        <div className="hidden h-[420px] w-full max-w-md shrink-0 lg:block">
          <HeroFieldGrid className="h-full w-full" />
        </div>
      </Container>
    </section>
  )
}
