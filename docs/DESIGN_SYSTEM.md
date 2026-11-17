# InteliCrop — Design System (web)

The source of truth for the brand is the **InteliCrop Manual de marca 2026 (v1.0,
October 2026)**. This file records how the site implements it. Tokens live in
`app/globals.css`; components live in `components/`.

## Logo (manual §2.1)

The logo is never retyped or redrawn. The files in `public/brand/` were extracted
from the official manual PDF:

| File                                 | Use                                     |
| ------------------------------------ | --------------------------------------- |
| `intelicrop-logo.png`                | Horizontal color — Crema/white surfaces |
| `intelicrop-logo-negativo.png`       | Horizontal negative — Tinta surfaces    |
| `intelicrop-sello.png`               | Seal — El Niño band and "Nosotros"      |
| `intelicrop-app-icon.png`            | 512px app icon (symbol on Crema)        |
| `app/icon.png`, `app/apple-icon.png` | Favicon / Apple touch icon (symbol)     |

Minimum digital height is 32px (`components/ui/Logo.tsx` enforces it). When the
official `02_Logo` kit (SVG) is available, replace these PNGs with the SVGs and
keep the same file names.

## Color (manual §2.2)

| Token                         | Hex                   | Use                                            |
| ----------------------------- | --------------------- | ---------------------------------------------- |
| `tinta`                       | `#0B3B45`             | Headings, dark bands, primary buttons, footer  |
| `teal`                        | `#1FA98E`             | Icons, rules, bars — never small text on light |
| `crema`                       | `#F8F5EE`             | Default background                             |
| `ocre` / `ocre-sol`           | `#C98A2B` / `#E0A63F` | Highlighted data series / accent CTA on dark   |
| `menta`                       | `#E6F2EA`             | Panels, callouts; body text on Tinta           |
| `teal-luz`                    | `#5ED3B8`             | Teal on dark surfaces                          |
| `agua` `sol` `campo` `tierra` | —                     | Illustration and territory layers only         |
| `texto`                       | `#1E3238`             | Body text                                      |
| `gris` / `gris-texto`         | `#6B7F82` / `#566A6E` | Decorative / small secondary text              |
| `borde`                       | `#BFD8D0`             | Card and table borders                         |
| `teal-accesible`              | `#0F7563`             | Small teal text and links on light surfaces    |
| `ocre-accesible`              | `#8F5E12`             | Kickers and small labels on light surfaces     |
| `teal-titulo`                 | `#17917B`             | Teal headline accents (≥ 24px bold)            |
| `riesgo-*`                    | —                     | Data traffic light — risk and alerts only      |

### Contrast (WCAG 2.2, computed)

| Pair                    | Ratio  | Rule                              |
| ----------------------- | ------ | --------------------------------- |
| Texto on Crema          | 12.3:1 | All text                          |
| Tinta on Crema          | 11.6:1 | All text                          |
| Teal Accesible on Crema | 5.2:1  | Small teal text, links            |
| Ocre Accesible on Crema | 5.1:1  | Kickers                           |
| Gris Texto on Crema     | 5.2:1  | Secondary small text              |
| Gris Niebla on Crema    | 3.9:1  | Decorative / large only           |
| Teal Título on Crema    | 3.6:1  | Headings ≥ 24px bold only         |
| Teal / Ocre on Crema    | 2.7:1  | Never text                        |
| Teal Luz on Tinta       | 6.7:1  | Text and accents on dark          |
| Ocre Sol on Tinta       | 5.6:1  | Kickers and figures on dark       |
| Menta on Tinta          | 10.6:1 | Body text on dark                 |
| White on Teal           | 3.0:1  | Not used as a resting button fill |

The only deviation from the manual is the hover state of the primary button: the
manual says "hover Teal", but white on `#1FA98E` is 3.0:1, so the hover uses Teal
Accesible (5.6:1) — same hue, still reads as teal.

## Typography (manual §2.3)

- **Manrope** (400–800) for everything, **JetBrains Mono** (400, 700) for figures,
  KPIs and codes. Both self-hosted via `next/font` with `display: swap`.
- Web scale: h1 56–72px/800, h2 36–44px/800, h3 22–26px/700, h4 18px/700,
  kicker 13px/700 uppercase tracking .3em Ocre, body 17px/1.6, captions 13px.
- Number format follows the manual in Spanish: dot for thousands, comma for
  decimals, "US$" and "MM" (US$5.993 MM · 9,88 %). English uses US conventions.

## Components (manual §3.6)

- **Buttons** (`components/ui/Button.tsx`): pill, 16×28 padding, Manrope 800.
  Primary Tinta; secondary 2px Tinta outline; accent Ocre Sol with Tinta text.
- **Cards**: white, 28px radius, shadow `0 10px 30px rgba(11,59,69,.08)`, hexagon icon on top.
- **Icons** (`components/ui/HexIcon.tsx`): Lucide (`lucide-react`), 2px stroke, in a
  pointy-top hexagon. Light: Teal outline/white fill. Dark: Teal Luz/Tinta.
- **Grid**: max 1280px content width, 80px side margins desktop / 20px mobile.
- **Graphic resources** (`components/decor/`): contour lines (10–20 % opacity),
  satellite grid (dark surfaces, ≤ 5 % lit cells), territory layers (always at the
  bottom), Teal → Ocre stripe, circuit connector, flat landscape illustration.
- **Data viz** (`EcuadorSection`): highlighted series in Ocre, rest in Teal,
  figures in JetBrains Mono, source in Teal italic.

## Voice (manual §1.8)

"Usted" across the site (audience is IFIs, agroindustria and government). Every
figure carries its source. "InteliCrop" in running text — never "IntelCrop",
"Intel Crop" or "INTELICROP".
