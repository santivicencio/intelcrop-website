'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { usePrefersReducedMotion } from '@/lib/hooks/use-prefers-reduced-motion'

const WIDTH = 640
const HEIGHT = 520
const COLS = 10
const ROWS = 8
const CELL = 8

// A simple pixel sprout silhouette (stem + two leaves) picked out of the grid once
// it settles — a nod to the brand's proposed pixel-grid symbol evolution (brief §9.4).
const SPROUT_OFFSETS: [number, number][] = [
  [0, 0],
  [0, -1],
  [0, -2],
  [-1, -2],
  [1, -2],
  [-1, -1],
  [1, -1],
]

function mulberry32(seed: number) {
  let a = seed
  return function random() {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

interface GridCell {
  id: number
  startX: number
  startY: number
  startRotate: number
  endX: number
  endY: number
  delay: number
  highlighted: boolean
}

function buildGrid(): GridCell[] {
  const random = mulberry32(20260922)
  const colGap = WIDTH / (COLS + 1)
  const rowGap = HEIGHT / (ROWS + 1)
  const centerCol = Math.floor(COLS / 2)
  const centerRow = Math.floor(ROWS / 2) + 1
  const sproutCells = new Set(
    SPROUT_OFFSETS.map(([dc, dr]) => `${centerCol + dc},${centerRow + dr}`)
  )

  const cells: GridCell[] = []
  let id = 0
  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      cells.push({
        id,
        startX: random() * WIDTH,
        startY: random() * HEIGHT,
        startRotate: (random() - 0.5) * 40,
        endX: colGap * (col + 1),
        endY: rowGap * (row + 1),
        delay: random() * 1400,
        highlighted: sproutCells.has(`${col},${row}`),
      })
      id += 1
    }
  }
  return cells
}

const GRID = buildGrid()

export function HeroFieldGrid({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        data-playing={playing && !reducedMotion}
      >
        <g>
          {GRID.map((cell) => (
            <rect
              key={cell.id}
              x={reducedMotion ? cell.endX - CELL / 2 : -CELL / 2}
              y={reducedMotion ? cell.endY - CELL / 2 : -CELL / 2}
              width={CELL}
              height={CELL}
              rx={1.5}
              fill={cell.highlighted ? 'var(--color-teal-bright)' : 'var(--color-mist)'}
              opacity={cell.highlighted ? 1 : 0.4}
              className={reducedMotion ? undefined : 'field-cell'}
              style={
                reducedMotion
                  ? undefined
                  : ({
                      '--sx': `${cell.startX}px`,
                      '--sy': `${cell.startY}px`,
                      '--sr': `${cell.startRotate}deg`,
                      '--ex': `${cell.endX}px`,
                      '--ey': `${cell.endY}px`,
                      animationDelay: `${cell.delay}ms`,
                    } as CSSProperties)
              }
            />
          ))}
        </g>
      </svg>

      <style>{`
        .field-cell {
          transform: translate(var(--sx), var(--sy)) rotate(var(--sr));
          animation: field-settle 1600ms var(--ease-entry, cubic-bezier(0.22, 1, 0.36, 1)) forwards;
          animation-play-state: paused;
          transform-box: fill-box;
          transform-origin: center;
        }
        svg[data-playing='true'] .field-cell {
          animation-play-state: running;
        }
        @keyframes field-settle {
          from { transform: translate(var(--sx), var(--sy)) rotate(var(--sr)); }
          to { transform: translate(var(--ex), var(--ey)) rotate(0deg); }
        }
      `}</style>
    </div>
  )
}
