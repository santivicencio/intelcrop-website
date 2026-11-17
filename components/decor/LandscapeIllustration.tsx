import { cn } from '@/lib/utils/cn'

/**
 * Manual §2.5 / §3.6 hero art: flat landscape — sun with halos, a data line
 * rising over the hills, a river (Agua) crossing the territory layers, and a
 * small plant growing from the soil. Pure SVG, decorative.
 */
export function LandscapeIllustration({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 720 520"
      className={cn('h-auto w-full', className)}
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F8F5EE" stopOpacity="0" />
          <stop offset="1" stopColor="#E6F2EA" />
        </linearGradient>
        <linearGradient id="river" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#3F8FB5" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F7D57A" />
          <stop offset="1" stopColor="#F2C14E" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="720" height="520" fill="url(#sky)" />

      {/* Sun with halos */}
      <g transform="translate(560 110)">
        <circle
          r="96"
          fill="none"
          stroke="#F2C14E"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
        <circle r="74" fill="none" stroke="#F2C14E" strokeOpacity="0.4" strokeWidth="2" />
        <circle r="54" fill="url(#sun)" />
      </g>

      {/* Data line rising over the land */}
      <path
        d="M330 268 C400 250 430 230 480 214 C540 194 590 170 650 132 L720 104 L720 300 L330 300 Z"
        fill="#E8DDC4"
        opacity="0.7"
      />
      <path
        d="M330 268 C400 250 430 230 480 214 C540 194 590 170 650 132 L720 104"
        fill="none"
        stroke="#C98A2B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[
        [480, 214],
        [650, 132],
      ].map(([cx, cy]) => (
        <circle
          key={cx}
          cx={cx}
          cy={cy}
          r="6"
          fill="#E0A63F"
          stroke="#F8F5EE"
          strokeWidth="2"
        />
      ))}

      {/* Hills */}
      <path
        d="M0 300 C140 262 300 268 430 290 C560 312 650 300 720 284 V520 H0 Z"
        fill="#9CC59A"
      />
      <path
        d="M0 334 C160 304 320 316 470 330 C600 342 670 326 720 318 V520 H0 Z"
        fill="#2F5E3A"
      />
      <path
        d="M0 372 C180 352 360 362 520 370 C620 375 680 366 720 362 V520 H0 Z"
        fill="#3E7D3A"
      />
      <path
        d="M0 410 C200 396 380 404 560 410 C640 413 690 406 720 404 V520 H0 Z"
        fill="#E0A63F"
      />
      <path
        d="M0 440 C200 430 400 438 580 442 C650 444 700 438 720 436 V520 H0 Z"
        fill="#6B4A2B"
      />

      {/* River (Agua) */}
      <path
        d="M512 282 C520 300 498 318 470 336 C430 362 380 378 340 404 C296 432 270 470 262 520 L346 520 C352 484 372 452 410 428 C456 398 512 378 548 348 C574 326 576 300 560 282 Z"
        fill="url(#river)"
      />
      <path
        d="M520 300 C500 330 450 352 410 372 M380 420 C340 448 318 476 310 506"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.5"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Tree on the hill */}
      <g transform="translate(140 318)">
        <rect x="-2" y="-6" width="4" height="22" rx="2" fill="#6B4A2B" />
        <path d="M0 -40 L16 -4 H-16 Z" fill="#2F5E3A" />
      </g>

      {/* Sprout from the soil: data meets field */}
      <g transform="translate(180 452)">
        <path d="M0 0 V-34" stroke="#1FA98E" strokeWidth="4" strokeLinecap="round" />
        <path d="M0 -24 C-16 -26 -24 -38 -22 -48 C-8 -46 0 -36 0 -24 Z" fill="#1FA98E" />
        <path d="M0 -30 C14 -34 24 -46 22 -56 C8 -54 0 -44 0 -30 Z" fill="#5ED3B8" />
        <circle cx="-22" cy="-48" r="3.5" fill="#E0A63F" />
        <circle cx="22" cy="-56" r="3.5" fill="#E0A63F" />
      </g>
    </svg>
  )
}
