# Design System: LOGAZ Ecosystem

## 1. Visual Theme & Atmosphere

LOGAZ is an ecosystem of fuel station management applications — from customer-facing loyalty apps to internal CRM dashboards. The design language is professional and trustworthy, reflecting the energy/fuel industry with a confident blue-and-orange palette. The primary brand color is a deep institutional blue (`#3B55A2`) paired with a warm, energetic orange (`#FB8607`) for calls-to-action.

The ecosystem spans 4 applications with a shared UI library (`logaz-ui`), ensuring visual consistency while allowing app-specific adaptations. All apps support light and dark modes via HSL CSS variables on the `.dark` class.

**Key Characteristics:**
- **Mood:** Trustworthy, professional, industry-grade
- **Density:** Varies — CRM is data-dense with tables and dashboards; loyalty app is spacious and mobile-first
- **Philosophy:** Functional clarity — fuel station operators and customers need fast, reliable interfaces
- **Motion:** Subtle — accordion, fade-in, slide transitions. Mobile apps add touch-optimized animations
- **Brand presence:** Blue (`#3B55A2`) + Orange (`#FB8607`) — consistent across all apps
- **Architecture:** Shared `logaz-ui` preset → per-app Tailwind config extensions

**Applications:**

| App | Audience | Focus | Mobile Reference |
|-----|----------|-------|-----------------|
| **Fuel Hub** | Business accounts | Account management, transactions, analytics | — |
| **Loyalty App** | Retail customers | Points, rewards, tier progression (PWA) | Follows Card App patterns |
| **Loyalty CRM** | Internal operators | Customer management, analytics, reports | — |
| **Card App** | Drivers | Fuel card management, transactions (Capacitor PWA) | **Mobile source of truth** |

> **Mobile design source of truth:** `logaz-card-mobile-app`. All mobile apps (Loyalty App, Card App) MUST follow patterns established in Card App. Loyalty App is in early development and adopts Card App conventions.

## 2. Color Palette & Roles

### Primary Brand (LOGAZ Blue)

| Token | Hex | Role |
|-------|-----|------|
| `--primary-50` | `#E8EFFC` | Lightest tint, subtle backgrounds |
| `--primary-100` | `#C5D7F7` | Light backgrounds |
| `--primary-200` | `#9EBEF2` | Hover tints |
| `--primary-300` | `#77A5ED` | Light accents |
| `--primary-400` | `#5892E9` | Secondary interactive |
| `--primary-500` | `#3B55A2` | **Primary brand** — buttons, headings, focus |
| `--primary-600` | `#35609C` | Hover on primary |
| `--primary-700` | `#2E5389` | CRM sidebar accent |
| `--primary-800` | `#274776` | Dark accents |
| `--primary-900` | `#1B3154` | CRM sidebar border, deepest |

### Secondary Brand (LOGAZ Orange)

| Token | Hex | Role |
|-------|-----|------|
| `--secondary-50` | `#FFF4E6` | Lightest tint |
| `--secondary-100` | `#FFE4C1` | Light backgrounds |
| `--secondary-200` | `#FFD397` | Hover tints |
| `--secondary-300` | `#FFC26D` | Warm accents |
| `--secondary-400` | `#FFB54E` | Secondary interactive |
| `--secondary-500` | `#FB8607` | **Secondary brand** — CTAs, highlights, alerts |
| `--secondary-600` | `#F47806` | Hover on secondary |
| `--secondary-700` | `#EC6705` | Active/pressed |
| `--secondary-800` | `#E45704` | Deep orange |
| `--secondary-900` | `#D73A02` | Urgent states |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#4CAF50` | Success states, confirmations |
| `--warning` | `#FFC107` | Warnings, attention needed |
| `--error` / `--destructive` | `#F44336` | Errors, destructive actions |
| `--info` | `#2196F3` | Informational messages |

### Neutral Grayscale

| Token | Hex | Role |
|-------|-----|------|
| `--gray-50` | `#FAFAFA` | Lightest background |
| `--gray-100` | `#F5F5F5` | Subtle surface |
| `--gray-200` | `#EEEEEE` | Light borders |
| `--gray-300` | `#E0E0E0` | Default borders |
| `--gray-400` | `#BDBDBD` | Placeholder text |
| `--gray-500` | `#9E9E9E` | Muted text |
| `--gray-600` | `#757575` | Secondary text |
| `--gray-700` | `#616161` | Body text |
| `--gray-800` | `#424242` | Headings |
| `--gray-900` | `#212121` | Primary text |

### Theme Variables (Light / Dark)

**Light mode (`:root`):**
```
--background:       0 0% 100%          (White)
--foreground:       222.2 84% 4.9%     (Dark navy)
--card:             0 0% 100%          (White)
--muted:            210 40% 96.1%      (Light gray)
--muted-foreground: 215.4 16.3% 46.9% (Medium gray)
--border:           214.3 31.8% 91.4%  (Light gray)
--ring:             222.2 84% 4.9%     (Dark navy)
```

**Dark mode (`.dark`):**
```
--background:       222.2 84% 4.9%     (Dark navy)
--foreground:       210 40% 98%        (Near-white)
--card:             222.2 84% 4.9%     (Dark navy)
--muted:            217.2 32.6% 17.5%  (Dark gray)
--muted-foreground: 215 20.2% 65.1%   (Light gray)
--border:           217.2 32.6% 17.5%  (Dark gray)
--ring:             212.7 26.8% 83.9%  (Light gray)
```

### CRM Sidebar (brand-colored, app-specific override)

```
--sidebar-background:          #2E5389  (Primary-700)
--sidebar-foreground:          #FFFFFF
--sidebar-primary:             #FB8607  (Secondary-500, orange)
--sidebar-primary-foreground:  #FFFFFF
--sidebar-accent:              #35609C  (Primary-600)
--sidebar-accent-foreground:   #FFFFFF
--sidebar-border:              #1B3154  (Primary-900)
```

### Loyalty App Tier Colors (planned, to be aligned with Card App)

| Tier | Token | Use |
|------|-------|-----|
| **Bronze** | `hsl(var(--bronze))` | Entry tier indicator |
| **Silver** | `hsl(var(--silver))` | Mid tier |
| **Gold** | `hsl(var(--gold))` | High tier |
| **Platinum** | `hsl(var(--platinum))` | Top tier |

> These tokens will be finalized when Loyalty App development progresses. Implementation must follow Card App visual patterns.

### Chart Colors

```
--chart-1: 212 95% 68%   (Blue)
--chart-2: 142 76% 60%   (Green)
--chart-3: 48 96% 56%    (Amber)
--chart-4: 25 95% 60%    (Orange)
--chart-5: 0 72% 62%     (Red)
```

## 3. Typography Rules

### Font Families

| Token | Font | Fallback | Use |
|-------|------|----------|-----|
| `font-sans` / `font-montserrat` | Montserrat | sans-serif | Headings (all apps), body text (CRM/Fuel Hub) |
| `font-syncopate` | Syncopate | sans-serif | Special display text, brand elements |
| `font-roboto` | Roboto (300,400,500,700) | sans-serif | **Mobile apps body text** (Card App, Loyalty App) |
| `font-heading` (CRM) | Montserrat, Inter | sans-serif | CRM headings |

> **Mobile font convention:** Mobile apps use **Roboto** (via Google Fonts, 4 weights) as the primary body font. Desktop/CRM apps use Montserrat. This is established by Card App and applies to all mobile apps.

### Font Size Scale

| Token | Size | Pixels | Use |
|-------|------|--------|-----|
| `text-xs` | 0.75rem | 12px | Metadata, badges, timestamps |
| `text-sm` | 0.875rem | 14px | Body small, labels, buttons |
| `text-base` | 1rem | 16px | Standard body text |
| `text-lg` | 1.125rem | 18px | Large body, intro text |
| `text-xl` | 1.25rem | 20px | Section titles |
| `text-2xl` | 1.5rem | 24px | Card titles |
| `text-3xl` | 1.75rem | 28px | Page titles |
| `text-4xl` | 2.25rem | 36px | Hero headlines |
| `text-5xl` | 3rem | 48px | Display text |

### Weight Hierarchy

| Weight | Value | Use |
|--------|-------|-----|
| `font-normal` | 400 | Body text, descriptions |
| `font-medium` | 500 | Labels, buttons, nav items |
| `font-semibold` | 600 | Card titles, sub-headings |
| `font-bold` | 700 | Page titles, headings |
| `font-extrabold` | 800 | Display/hero text |

### Line Heights

```
leading-tight:    1.2   — headings
leading-normal:   1.5   — body text
leading-relaxed:  1.6   — descriptions, long text
```

## 4. Component Stylings

### Buttons (CVA variants, from logaz-ui)

**Base styles:**
```
inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
disabled:pointer-events-none disabled:opacity-50
```

| Variant | Background | Text | Hover |
|---------|-----------|------|-------|
| **default** | `bg-primary` | `text-primary-foreground` | `hover:bg-primary/90` |
| **destructive** | `bg-destructive` | `text-destructive-foreground` | `hover:bg-destructive/90` |
| **outline** | `border border-input` | inherited | `hover:bg-accent` |
| **secondary** | `bg-secondary` | `text-secondary-foreground` | `hover:bg-secondary/80` |
| **ghost** | transparent | inherited | `hover:bg-accent` |
| **link** | transparent | `text-primary` | `hover:underline` |

| Size | Height | Padding |
|------|--------|---------|
| **sm** | h-9 (36px) | px-3 |
| **default** | h-10 (40px) | px-4 py-2 |
| **lg** | h-11 (44px) | px-8 |
| **icon** | h-10 w-10 | — |

### CRM Utility Button Classes

```
.btn-primary:    bg-primary-500 text-white hover:bg-primary-600 rounded-lg px-4 py-2.5
.btn-secondary:  bg-secondary-500 text-white hover:bg-secondary-600 rounded-lg px-4 py-2.5
.btn-action:     bg-white text-primary-700 border border-primary-200 hover:bg-primary-50
.btn-cancel:     bg-gray-100 text-gray-700 hover:bg-gray-200
.btn-danger:     bg-red-50 text-red-600 border border-red-200 hover:bg-red-100
```

### Cards

```
Card:            rounded-lg border bg-card text-card-foreground shadow-sm
CardHeader:      flex flex-col space-y-1.5 p-6
CardTitle:       text-2xl font-semibold leading-none tracking-tight
CardDescription: text-sm text-muted-foreground
CardContent:     p-6 pt-0
CardFooter:      flex items-center p-6 pt-0
```

**CRM Stats Card:**
```
.stats-card:     rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow
```

### Badges

```
Base: inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold
```

| Variant | Styles |
|---------|--------|
| **default** | `border-transparent bg-primary text-primary-foreground` |
| **secondary** | `border-transparent bg-secondary text-secondary-foreground` |
| **destructive** | `border-transparent bg-destructive text-destructive-foreground` |
| **outline** | `text-foreground` |

### Inputs

```
flex h-10 w-full rounded-md border border-input bg-background px-3 py-2
text-base ring-offset-background placeholder:text-muted-foreground
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
disabled:cursor-not-allowed disabled:opacity-50
```

### Sidebar (logaz-ui component)

```
Width:           16rem (256px) desktop, 18rem (288px) mobile
Icon-only:       3rem (48px)
Menu button:     h-8 gap-2 px-2 py-1
Menu item sizes: sm: h-7, default: h-8, lg: h-12
Sub menu:        mx-3.5 border-l border-sidebar-border px-2.5
Group padding:   p-2
```

## 5. Layout Principles

### Spacing System

- Base unit: 4px (Tailwind default)
- Primary rhythm: 4, 8, 12, 16, 24, 32px
- Card padding: 24px (p-6)
- CRM custom: `space-18` (72px), `space-22` (88px)
- Container: centered, max-width 1400px, 32px padding

### Responsive Padding (CRM)

| Breakpoint | Padding |
|-----------|---------|
| Mobile (default) | 16px (1rem) |
| Tablet (768px) | 20px (1.25rem) |
| Desktop (1024px) | 24px (1.5rem) |
| 2XL (1536px) | 32px (2rem) |
| Ultra-wide (2560px) | 48px (3rem) |

### Grid Patterns

**Fuel Hub / Loyalty App:** Standard responsive grids
```
Mobile:  1 column
Tablet:  2 columns
Desktop: 3-4 columns
```

**CRM Dashboard (ultra-wide support):**
```
.grid-kpi-2xl:       repeat(6, 1fr)   — KPI cards
.grid-metrics-2xl:   repeat(8, 1fr)   — Metrics grid
.dashboard-grid-2xl: 3-column layout  — Dashboard widgets
```

### Mobile Page Layout (Card App pattern — apply to all mobile apps)

```
<div className="min-h-screen bg-logaz-background pb-16">
  <Header />                    <!-- Centered logo, py-4 px-4, minimal shadow -->
  <OfflineIndicator />          <!-- Amber banner when offline -->
  <main className="p-4">
    {/* Page content */}
  </main>
  <BottomNavigation />          <!-- Fixed bottom tab bar -->
</div>
```

**Key patterns:**
- `min-h-screen` — full viewport height
- `pb-16` (64px) — bottom padding to clear fixed navigation
- `p-4` (16px) — main content padding
- `mb-6` / `mb-4` — section spacing within pages

### Mobile Bottom Navigation (Card App pattern)

```
Position:    fixed bottom-0 left-0 right-0, z-10
Background:  white, border-t border-gray-200, shadow-lg
Tab layout:  4 items, flex justify-around
Icon size:   20px (h-5 w-5)
Label:       text-xs
Active:      text-logaz-blue
Inactive:    text-gray-500, hover: text-logaz-orange
Padding:     px-1 py-2 per tab
```

### Mobile Brand Colors in Context

```
bg-logaz-blue:        Primary actions, spinners, active nav, links
bg-logaz-orange:      Login CTA, action buttons ("Подробнее")
bg-logaz-background:  Page canvas
bg-logaz-error:       Error states (text-logaz-error, border-logaz-error, bg-logaz-error/5)
text-logaz-text:      Primary text
```

### Mobile Card Patterns (Card App)

**FuelCard (hero card):**
```
Background:  gradient from-logaz-blue to-logaz-blue/80
Radius:      rounded-xl (12px)
Shadow:      shadow-lg
Content:     card number (grouped by 4), balance, company name
Features:    QR button, pattern overlay, ripple/gradient effects
```

**StationCard (list item card):**
```
Background:  bg-white shadow-md rounded-lg
Content:     title + star rating, address (MapPin icon), distance
Fuel types:  Badge chips with gray background
Actions:     Two buttons — orange ("Подробнее") + blue ("Маршрут")
```

### Mobile Modal Pattern (Card App)

```
Base:        Radix UI Dialog via @logaz/ui
Max width:   sm:max-w-md
Close icon:  [&>button>svg]:h-6 [&>button>svg]:w-6
Layout:      Header + Content + Action buttons
QR Modal:    256x256 QR code, offline indicator, refresh button, expiration countdown
```

### Mobile State Patterns (Card App — apply to all mobile apps)

| State | Pattern |
|-------|---------|
| **Loading** | `animate-pulse` skeleton bars (gray placeholders) |
| **Spinner** | `<Loader2 className="h-6 w-6 animate-spin text-logaz-blue" />` |
| **Button loading** | `disabled` attribute on button |
| **Offline** | Amber banner: `bg-amber-50 border-l-4 border-amber-400`, WifiOff icon, retry button |
| **Empty** | Centered icon + message + action button |
| **Error** | Toast via `sonner`, error text in `text-logaz-error` |
| **Unread** | `border-l-4 border-logaz-blue` left accent |

### Mobile Capacitor Integration (Card App)

```typescript
// capacitor.config.ts
appId: 'pro.logazsv.card'
SplashScreen: { launchShowDuration: 2000, backgroundColor: '#ffffff', showSpinner: false }
PushNotifications: { presentationOptions: ["badge", "sound", "alert"] }

// Plugins: @capacitor/geolocation (high accuracy), @capacitor/network,
//          @capacitor/preferences (storage), @capacitor/push-notifications
```

### Mobile PWA Config (Card App)

```
name:         'ЛОГАЗ SV - Топливная карта'
theme_color:  '#1E40AF'
display:      'standalone'
orientation:  'portrait-primary'
SW strategy:  NetworkFirst with 5min TTL for API calls
```

### Whitespace Philosophy

**App-dependent density.** CRM is data-dense — tables, charts, KPI grids fill the viewport. Mobile apps (Card App, Loyalty App) are spacious — generous padding (`p-4`), full-width cards, clear section spacing (`mb-6`). Fuel Hub is balanced — clear data presentation with comfortable spacing.

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `--radius` | 8px (0.5rem) | Base value |
| `rounded-lg` | 8px | Cards, CRM buttons |
| `rounded-md` | 6px | Buttons, inputs |
| `rounded-sm` | 4px | Small elements |
| `rounded-xl` | 12px | CRM stats cards |
| `rounded-full` | 9999px | Badges, avatars |

## 6. Depth & Elevation

| Level | Shadow | Use |
|-------|--------|-----|
| Flat | No shadow | Background surfaces |
| Subtle | `0 1px 2px rgba(0,0,0,0.05)` | Cards, sidebar |
| Medium | `0 4px 12px rgba(0,0,0,0.08)` | Floating elements, dropdowns |
| Elevated | `0 10px 40px rgba(0,0,0,0.12)` | Modals, dialogs |
| Maximum | `0 20px 60px rgba(0,0,0,0.15)` | Command palette, overlays |

**Shadow Philosophy:** Standard depth elevation. Shadows are neutral (black opacity) — no brand-colored glows. CRM stats cards transition from `shadow-sm` to `shadow-md` on hover for interactive feedback.

### Animations

**Core (logaz-ui):**
```
accordion-down/up:  0.2s ease-out, height animation
fade-in:            0.3s ease-out, opacity + translateY(10px)
scale-in:           0.2s ease-out, scale(0.95) + opacity
pulse-slow:         3s infinite, opacity 0.7 ↔ 1
slide-in-left:      0.3s ease-out, translateX(-100%)
```

**Mobile (from Card App — source of truth for all mobile apps):**
```
animate-spin:       loading spinners (Loader2 icon)
animate-pulse:      skeleton loading placeholders
transition-all:     duration-300, progress bars and state changes
hover opacity:      /90 suffix for press feedback
```

**CRM:**
```
fadeInUp:            0.5s ease-out, opacity + translateY(20px)
stagger > *:         0.05s increments per child
```

## 7. Do's and Don'ts

### Do

- Use `logaz-ui` Tailwind preset as the base for all apps — import `@logaz/ui/tailwind`
- Use brand blue (`#3B55A2`) for primary actions, navigation, headings
- Use brand orange (`#FB8607`) for CTAs, highlights, attention-grabbing elements
- Apply semantic colors consistently: green=success, red=error, yellow=warning, blue=info
- Use Montserrat for headings across all apps
- Support both light and dark modes via HSL CSS variables
- Use `rounded-md` (6px) for interactive elements, `rounded-lg` (8px) for containers
- Apply `shadow-sm → shadow-md` transition on hoverable cards
- Use 44px minimum touch targets on mobile apps
- Use `pb-16` on all mobile pages to clear fixed bottom navigation
- Use `logaz-card-mobile-app` as the reference for ALL mobile UI patterns
- Use Roboto (Google Fonts, 300/400/500/700) as the mobile body font
- Use fixed bottom tab bar navigation (4 tabs) on mobile apps
- Implement offline indicator (amber banner) in all mobile apps
- Use `animate-pulse` skeleton screens for loading states
- Use `sonner` toasts for success/error feedback on mobile

### Don't

- Never use different primary blue values across apps — `#3B55A2` is the standard
- Never skip the shared preset — app-specific configs EXTEND, not replace
- Never hardcode CRM sidebar colors outside the CSS variable system
- Never use the orange as a destructive/error color — it's a positive CTA color
- Never mix Syncopate with body text — it's only for special display elements
- Never ignore mobile touch targets — minimum 44x44px for all interactive elements
- Never deviate from Card App mobile patterns in Loyalty App — Card App is the mobile source of truth
- Never use Inter as body font on mobile — use Roboto (Card App convention)
- Never build custom mobile navigation — use the bottom tab bar pattern from Card App
- Never skip the offline indicator — all mobile apps must handle offline state gracefully
- Never use custom shadows when the 4-level scale suffices
- Never skip loading states — use `shimmer` animation for skeleton screens
- Never use different badge styles across apps — `logaz-ui` Badge is the source of truth

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| xs (CRM) | 475px | Extra small, CRM only |
| sm | 640px | Standard small |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |
| 2xl | 1400px (logaz-ui) / 1600px (CRM) | Wide screens |
| 3xl (CRM) | 2560px | Ultra-wide monitors |

### Mobile Design (Card App patterns — apply to Loyalty App)

**Navigation:** Fixed bottom tab bar, 4 routes, icons (20px) + labels (text-xs)
**Layout:** `min-h-screen`, `p-4` content padding, `pb-16` nav clearance
**Touch:** Generous padding on all interactive elements, buttons minimum h-10/h-11
**Offline:** Amber banner with WifiOff icon + retry button, cached data strategy
**Loading:** `animate-pulse` skeleton screens, `animate-spin` spinners
**Modals:** Radix Dialog, `sm:max-w-md`, consistent close button sizing
**Fonts:** Roboto 300/400/500/700 via Google Fonts
**Responsive:** Mobile-first, only `sm:` breakpoint used, full-width by default

### Collapsing Strategy

- **CRM Sidebar**: Always visible on desktop, overlay on mobile. Brand-colored (`#2E5389`)
- **Fuel Hub**: Responsive grid — 4 cols → 2 cols → 1 col
- **Card App**: Mobile-only reference app — fixed bottom nav, full-width cards, `p-4` content
- **Loyalty App**: Follows Card App patterns — bottom tab nav, same layout structure

### CRM Ultra-wide Support

```
@2560px+: 6-column KPI grids, 8-column metrics, 3-column dashboard
Padding scales from 16px (mobile) to 48px (ultra-wide)
```

## 9. Agent Prompt Guide

### Quick Color Reference

- Primary brand: LOGAZ Blue `#3B55A2`
- Secondary brand: LOGAZ Orange `#FB8607`
- Success: `#4CAF50`
- Warning: `#FFC107`
- Error/Destructive: `#F44336`
- Info: `#2196F3`
- Background (light): White `#FFFFFF`
- Background (dark): `hsl(222.2, 84%, 4.9%)`
- Primary text: `#212121` (light) / `hsl(210, 40%, 98%)` (dark)
- Secondary text: `#757575`
- Border: `hsl(214.3, 31.8%, 91.4%)` light / `hsl(217.2, 32.6%, 17.5%)` dark
- CRM sidebar: `#2E5389` background, `#FB8607` accent, `#1B3154` border

### Example Component Prompts

"Create a LOGAZ dashboard card: `rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow`. Header `p-6`: title at `text-2xl font-semibold` (Montserrat), description `text-sm text-muted-foreground`. Content `p-6 pt-0`. Primary button `bg-[#3B55A2] text-white rounded-md h-10 px-4 hover:bg-[#35609C]`."

"Build a CRM sidebar: `bg-[#2E5389]` background, `border-r border-[#1B3154]`, `w-64` width. Logo area at top. Nav items: `text-white text-sm px-3 py-2 rounded-md hover:bg-[#35609C]`. Active item: `bg-[#35609C]`. CTA highlight in orange `#FB8607`."

"Design a loyalty tier badge: `rounded-full px-3 py-1 text-xs font-semibold`. Bronze: warm copper tones. Silver: cool gray. Gold: rich amber. Platinum: deep slate with shine."

"Create a mobile screen following Card App pattern: `min-h-screen bg-logaz-background pb-16`. Header with centered logo, `py-4 px-4`. Main content `p-4`. Hero card: `rounded-xl shadow-lg` with gradient `from-logaz-blue to-logaz-blue/80`, white text. List cards: `bg-white shadow-md rounded-lg` with icon+text rows. Fixed bottom nav: 4 tabs, `text-logaz-blue` active, `text-gray-500` inactive. Font: Roboto."

"Build mobile offline handling: Amber banner `bg-amber-50 border-l-4 border-amber-400 p-3`. WifiOff icon `text-amber-600`. Message: 'Нет подключения к интернету'. Retry button. Only shown when `navigator.onLine === false`. Loading skeleton: `animate-pulse` gray bars matching content layout."

"Build a fuel transaction table for CRM: `border rounded-lg overflow-hidden`. Header row `bg-muted font-medium text-sm`. Data rows `text-sm border-b hover:bg-accent`. Amount column in `font-mono`. Status badges: success=green, pending=orange, failed=red."

### Iteration Guide

- Blue (`#3B55A2`) is institutional trust — use for primary actions, headings, active states
- Orange (`#FB8607`) is energy and urgency — use for CTAs, highlights, attention
- Never mix blue and orange in the same button — pick one per context
- CRM has the densest layout — 6+ column grids at ultra-wide
- Mobile apps follow Card App patterns — bottom tab nav, `p-4` content, `pb-16` nav clearance
- All apps import `@logaz/ui/tailwind` preset — only extend, never override base tokens
- Desktop: Montserrat headings. Mobile: Roboto body (Card App convention)
- Mobile apps MUST implement: offline indicator, skeleton loading, bottom tab navigation
- Loading states use `shimmer` animation — consistent skeleton screens across all apps
- Charts use the 5-color scale: blue, green, amber, orange, red (in order)
