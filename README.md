# Design Lib — `@ahkh3/design-lib`

> Next.js design system library with use-case-tagged components.  
> shadcn/ui base + custom components for **Admin**, **Landing**, **Auth**, **SaaS**, **E-commerce** projects.

## 📦 Installation

```bash
npm install @ahkh3/design-lib
# or
yarn add @ahkh3/design-lib
```

### Required setup

1. Add `globals.css` to your root layout:
```tsx
import "@ahkh3/design-lib/globals.css";
```

2. Add the `tailwind.config.ts` from this library (or extend yours with the same theme tokens).

3. Wrap your app with providers where needed (e.g., `TooltipProvider` for tooltips).

## 🎯 Quick Start

### For an Admin Dashboard:

```tsx
import { AdminLayout, Sidebar, StatCard, KPIGrid, DataTable, PageHeader } from "@ahkh3/design-lib";

const sidebarItems = [
  { label: "Dashboard", href: "/", icon: <LayoutDashboard /> },
  { label: "Users", href: "/users", icon: <Users />, badge: 12 },
  { label: "Settings", href: "/settings", icon: <Settings /> },
];

export default function DashboardPage() {
  return (
    <AdminLayout
      sidebar={<Sidebar items={sidebarItems} />}
      header={<Navbar right={<Avatar />} />}
    >
      <PageHeader title="Dashboard" description="Welcome back!" />
      <KPIGrid metrics={metrics} />
      <DataTable columns={columns} data={data} />
    </AdminLayout>
  );
}
```

### For a Landing Page:

```tsx
import { LandingNavbar, Hero, FeaturesSection, CtaSection, Footer } from "@ahkh3/design-lib";

export default function HomePage() {
  return (
    <>
      <LandingNavbar links={navLinks} cta={{ label: "Get Started", href: "/signup" }} />
      <Hero title="Build Better" subtitle="Platform" description="..." primaryCta={{ label: "Start", href: "/signup" }} />
      <FeaturesSection title="Features" features={features} variant="cards" />
      <CtaSection title="Ready to start?" variant="branded" primaryCta={{ label: "Get started", href: "/signup" }} />
      <Footer columns={footerColumns} />
    </>
  );
}
```

## 🗺️ Component Registry

Every component is tagged with its use case. Use the registry to discover the right component:

```tsx
import { getComponentsByUseCase, getPreset } from "@ahkh3/design-lib";

// Get all components suitable for admin panels
const adminComponents = getComponentsByUseCase("admin");

// Get the full admin preset
const adminPreset = getPreset("admin");
// Returns: { layoutComponents: ["admin-layout"], components: [...], theme: {...}, suggestedPages: [...] }
```

### Presets Available

| Preset | Use Case | Layout | Pages |
|--------|----------|--------|-------|
| `admin` | Admin dashboards | AdminLayout | Dashboard, Users, Settings |
| `landing` | Marketing landing pages | LandingNavbar | Home, Features, Pricing |
| `saas` | SaaS applications | Both layouts | Home, Dashboard, Billing |
| `auth` | Authentication pages | AuthLayout | Login, Register, Forgot |
| `ecommerce` | Online stores | LandingNavbar | Shop, Cart, Checkout |
| `marketing` | Corporate sites | LandingNavbar | Home, About, Blog |
| `minimal` | Portfolios / docs | LandingNavbar | Home, Projects |

## 📁 Structure

```
src/
├── components/
│   ├── ui/          # shadcn-style base (Button, Card, Input, Dialog, etc.)
│   ├── admin/       # Admin: AdminLayout, Sidebar, DataTable, StatCard, etc.
│   ├── landing/     # Landing: Hero, Features, Pricing, Testimonials, etc.
│   ├── auth/        # Auth: LoginForm, RegisterForm, AuthLayout, AuthGuard
│   ├── forms/       # Form: FormField, Switch, Checkbox, FileUpload
│   ├── layout/      # Layout: Container, Grid, Stack, Section, Flex
│   └── patterns/    # Patterns: Pagination, ConfirmDialog, EmptyState, etc.
├── tokens/          # Design tokens (colors, spacing, typography, shadows)
├── presets/         # Pre-configured design system presets
├── registry.ts      # Component registry with use-case metadata
└── lib/             # Utilities (cn, formatDate, etc.)
```

## 🎨 Customization

Override the CSS variables in your `globals.css`:

```css
:root {
  --primary: 262 83% 58%; /* Purple primary */
  --radius: 0.75rem;      /* Larger border radius */
}
```

## ✅ Status

Currently includes **50+ components** across 7 categories.

## 📄 License

MIT
