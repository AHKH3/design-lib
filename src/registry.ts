// ============================================================================
// Design Registry — Each component tagged with its use cases
// This is the source of truth for what's available and where it fits
// ============================================================================

export type UseCase =
  | "all"       // Works everywhere
  | "admin"     // Admin dashboards, back-office
  | "landing"   // Marketing landing pages
  | "auth"      // Authentication pages
  | "forms"     // Complex forms
  | "saas"      // SaaS applications
  | "ecommerce" // E-commerce sites
  | "marketing" // Marketing/brochure sites
  | "portfolio" // Portfolio/personal sites
  | "docs"      // Documentation sites
  | "social";   // Social media / community

export type ComponentCategory =
  | "ui"         // Base UI primitives (shadcn-style)
  | "admin"
  | "landing"
  | "auth"
  | "forms"
  | "layout"
  | "marketing"
  | "saas"
  | "ecommerce"
  | "patterns";

export interface ComponentEntry {
  id: string;
  name: string;
  description: string;
  category: ComponentCategory;
  useCases: UseCase[];
  isBase: boolean; // true = shadcn-style base component
  dependencies: string[];
  layoutRequired?: boolean;
}

export const componentRegistry: ComponentEntry[] = [
  // ==========================================================================
  // BASE UI — shadcn-style (use everywhere)
  // ==========================================================================
  {
    id: "button",
    name: "Button",
    description: "Multi-variant button with icon support, sizes, loading state, and asChild prop",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "card",
    name: "Card",
    description: "Card container with Header, Title, Description, Content, Footer subcomponents",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "input",
    name: "Input",
    description: "Text input with optional left/right icon slots",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "label",
    name: "Label",
    description: "Form label built on Radix Label primitive",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "badge",
    name: "Badge",
    description: "Inline badge with color variants (default, secondary, destructive, success, warning, outline) and sizes",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "Avatar with image/fallback support via Radix Avatar",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "separator",
    name: "Separator",
    description: "Horizontal/vertical divider line via Radix Separator",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "Tabbed content switcher via Radix Tabs",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "Modal dialog with overlay, header, footer via Radix Dialog",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "dropdown-menu",
    name: "DropdownMenu",
    description: "Context menu / dropdown with items, labels, separators via Radix Dropdown",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "select",
    name: "Select",
    description: "Native-like select with search via Radix Select",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "textarea",
    name: "Textarea",
    description: "Multi-line text input with resize control",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "Hover tooltip via Radix Tooltip with Provider pattern",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "Animated loading placeholder",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "table",
    name: "Table",
    description: "Semantic table components (Table, Header, Body, Row, Head, Cell, Caption)",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "alert",
    name: "Alert",
    description: "Alert banner with variants (default, destructive, success, warning, info)",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "progress",
    name: "Progress",
    description: "Accessible progress bar with variants (default, success, warning), sizes, and optional label",
    category: "ui",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "container",
    name: "Container",
    description: "Max-width content wrapper with responsive padding and size variants",
    category: "layout",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "grid",
    name: "Grid",
    description: "Responsive CSS Grid wrapper with configurable columns and gap",
    category: "layout",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "stack",
    name: "Stack",
    description: "Flexbox layout primitive for vertical/horizontal spacing",
    category: "layout",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "section",
    name: "Section",
    description: "Page section with consistent vertical padding, polymorphic \`as\` prop, and optional container wrapper",
    category: "layout",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "flex",
    name: "Flex",
    description: "Inline flexbox wrapper for toolbars, button groups",
    category: "layout",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },

  // ==========================================================================
  // ADMIN — Dashboard & back-office
  // ==========================================================================
  {
    id: "admin-layout",
    name: "AdminLayout",
    description: "Full admin dashboard layout with collapsible sidebar + header + main content area",
    category: "admin",
    useCases: ["admin"],
    isBase: false,
    dependencies: ["sidebar"],
    layoutRequired: true,
  },
  {
    id: "sidebar",
    name: "Sidebar",
    description: "Navigation sidebar with active state detection, badges, nested items",
    category: "admin",
    useCases: ["admin"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "navbar",
    name: "Navbar",
    description: "Top navigation bar with left/center/right slots",
    category: "admin",
    useCases: ["admin", "saas"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "stat-card",
    name: "StatCard",
    description: "Single metric card with trend indicator, icon, loading state, color variants",
    category: "admin",
    useCases: ["admin", "saas"],
    isBase: false,
    dependencies: ["card"],
  },
  {
    id: "data-table",
    name: "DataTable",
    description: "Generic sortable data table with loading skeleton, empty state, row click",
    category: "admin",
    useCases: ["admin"],
    isBase: false,
    dependencies: ["table"],
  },
  {
    id: "page-header",
    name: "PageHeader",
    description: "Consistent page title + description + actions block",
    category: "admin",
    useCases: ["admin", "saas", "docs"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "filter-bar",
    name: "FilterBar",
    description: "Search input + dropdown filters in compact bar with clear action",
    category: "admin",
    useCases: ["admin"],
    isBase: false,
    dependencies: ["select"],
  },
  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    description: "Navigation breadcrumb trail with home icon",
    category: "admin",
    useCases: ["admin", "docs", "ecommerce"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "kpi-grid",
    name: "KPIGrid",
    description: "Grid of StatCards for dashboard KPI overview",
    category: "admin",
    useCases: ["admin", "saas"],
    isBase: false,
    dependencies: ["stat-card"],
  },

  // ==========================================================================
  // LANDING — Marketing pages
  // ==========================================================================
  {
    id: "hero",
    name: "Hero",
    description: "Landing page hero with center, left, and split layout variants, dual CTAs",
    category: "landing",
    useCases: ["landing", "marketing", "saas"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "features-section",
    name: "FeaturesSection",
    description: "Feature showcase with grid, list, and card variants with icons",
    category: "landing",
    useCases: ["landing", "marketing", "saas"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "pricing-section",
    name: "PricingSection",
    description: "Multi-tier pricing cards with monthly/yearly toggle, highlighted tier, feature lists",
    category: "landing",
    useCases: ["landing", "saas"],
    isBase: false,
    dependencies: ["card", "badge"],
  },
  {
    id: "testimonials-section",
    name: "TestimonialsSection",
    description: "Social proof testimonial cards with avatar, rating stars, company",
    category: "landing",
    useCases: ["landing", "marketing", "saas"],
    isBase: false,
    dependencies: ["avatar"],
  },
  {
    id: "cta-section",
    name: "CTASection",
    description: "Call to action with default, branded, and simple variants",
    category: "landing",
    useCases: ["landing", "marketing", "saas"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "faq-section",
    name: "FAQSection",
    description: "Expandable FAQ accordion section",
    category: "landing",
    useCases: ["landing", "saas", "ecommerce"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "landing-navbar",
    name: "LandingNavbar",
    description: "Responsive sticky navbar with mobile hamburger menu and CTA button",
    category: "landing",
    useCases: ["landing", "marketing", "saas", "portfolio"],
    isBase: false,
    dependencies: [],
    layoutRequired: true,
  },
  {
    id: "footer",
    name: "Footer",
    description: "Multi-column footer with link columns, social icons, copyright",
    category: "landing",
    useCases: ["landing", "marketing", "saas", "portfolio", "docs"],
    isBase: false,
    dependencies: [],
    layoutRequired: true,
  },
  {
    id: "newsletter-section",
    name: "NewsletterSection",
    description: "Email capture form with success state and input validation",
    category: "landing",
    useCases: ["landing", "marketing", "saas"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "logo-cloud",
    name: "LogoCloud",
    description: "Company/client logo row for social proof",
    category: "landing",
    useCases: ["landing", "marketing", "saas"],
    isBase: false,
    dependencies: [],
  },

  // ==========================================================================
  // AUTH — Authentication
  // ==========================================================================
  {
    id: "login-form",
    name: "LoginForm",
    description: "Email/password login form with forgot password link, loading/error states",
    category: "auth",
    useCases: ["auth", "admin", "saas"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "register-form",
    name: "RegisterForm",
    description: "Registration form with name, email, password fields and validation",
    category: "auth",
    useCases: ["auth", "saas"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "auth-layout",
    name: "AuthLayout",
    description: "Centered card layout for auth pages with title, subtitle, footer",
    category: "auth",
    useCases: ["auth"],
    isBase: false,
    dependencies: [],
    layoutRequired: true,
  },
  {
    id: "oauth-buttons",
    name: "OAuthButtons",
    description: "Social login button row with divider and provider icons",
    category: "auth",
    useCases: ["auth"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "auth-guard",
    name: "AuthGuard",
    description: "Route protection wrapper with redirect and loading state",
    category: "auth",
    useCases: ["auth", "admin", "saas"],
    isBase: false,
    dependencies: [],
  },

  // ==========================================================================
  // FORMS — Advanced form controls
  // ==========================================================================
  {
    id: "form-field",
    name: "FormField",
    description: "Label + input + error + hint consistent field wrapper",
    category: "forms",
    useCases: ["all"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "switch",
    name: "Switch",
    description: "Toggle switch via Radix Switch primitive",
    category: "forms",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "Checkbox input via Radix Checkbox primitive",
    category: "forms",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "radio-group",
    name: "RadioGroup",
    description: "Radio button group via Radix RadioGroup primitive",
    category: "forms",
    useCases: ["all"],
    isBase: true,
    dependencies: [],
  },
  {
    id: "file-upload",
    name: "FileUpload",
    description: "Drag-and-drop file upload with preview, size validation, file list",
    category: "forms",
    useCases: ["forms", "admin"],
    isBase: false,
    dependencies: [],
  },

  // ==========================================================================
  // PATTERNS — Composite patterns
  // ==========================================================================
  {
    id: "confirm-dialog",
    name: "ConfirmDialog",
    description: "Confirmation alert dialog for destructive/important actions",
    category: "patterns",
    useCases: ["all"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "empty-state",
    name: "EmptyState",
    description: "Empty state placeholder with icon, title, description, action button",
    category: "patterns",
    useCases: ["all"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "error-state",
    name: "ErrorState",
    description: "Error display with retry button and appropriate iconography",
    category: "patterns",
    useCases: ["all"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "loading-state",
    name: "LoadingState",
    description: "Skeleton loading placeholders for card, table, list, and page layouts",
    category: "patterns",
    useCases: ["all"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Full pagination with page numbers, ellipsis, prev/next, first/last, page size selector",
    category: "patterns",
    useCases: ["all"],
    isBase: false,
    dependencies: [],
  },
  {
    id: "search-with-results",
    name: "SearchWithResults",
    description: "Search input with results container and clear button",
    category: "patterns",
    useCases: ["all"],
    isBase: false,
    dependencies: [],
  },
];

// ============================================================================
// Helpers
// ============================================================================

export function getComponentsByUseCase(useCase: UseCase): ComponentEntry[] {
  return componentRegistry.filter((c) => c.useCases.includes(useCase) || c.useCases.includes("all"));
}

export function getComponentsByCategory(category: ComponentCategory): ComponentEntry[] {
  return componentRegistry.filter((c) => c.category === category);
}

export function getBaseComponents(): ComponentEntry[] {
  return componentRegistry.filter((c) => c.isBase);
}

export function getLayoutComponents(): ComponentEntry[] {
  return componentRegistry.filter((c) => c.layoutRequired);
}

export function getComponentById(id: string): ComponentEntry | undefined {
  return componentRegistry.find((c) => c.id === id);
}


