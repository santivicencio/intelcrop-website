import type { Dictionary } from '@/lib/i18n/types'
import { Container } from '@/components/layout/Container'
import { ContourLines } from '@/components/decor/ContourLines'

/** Manual §3.6: key-figure band in Tinta, figures in JetBrains Mono. */
export function StatsBand({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section
      aria-label={dictionary.stats.label}
      data-surface="dark"
      className="relative isolate overflow-hidden bg-tinta py-12 md:py-14"
    >
      <ContourLines tone="dark" className="top-[-120%] right-[-10%] h-[340%] w-[70%]" />
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {dictionary.stats.items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse gap-2">
              <dt className="text-sm text-menta">{item.label}</dt>
              <dd className="font-mono text-[clamp(2rem,4vw,3rem)] leading-none font-bold text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
