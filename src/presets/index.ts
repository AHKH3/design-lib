import type { UseCase, ComponentEntry } from "../registry";

// ============================================================================
// Design System Presets — Complete pre-configured design systems per project type
// Each preset includes: layout, required components, optional components, and theme
// ============================================================================

export interface PresetComponent {
  id: string;
  required: boolean;
}

export interface PresetTheme {
  primaryHue: string;
  surfaceHue?: string;
  radius?: string;
  font?: string;
}

export interface DesignPreset {
  id: string;
  name: string;
  description: string;
  useCase: UseCase;
  layoutComponents: string[]; // Component IDs that form the page layout
  components: PresetComponent[];
  theme: PresetTheme;
  suggestedPages: string[];
}

export const presets: Record<string, DesignPreset> = {
  admin: {
    id: "admin",
    name: "Admin Dashboard",
    description: "Complete admin panel design system with sidebar nav, data tables, KPIs, and CRUD patterns",
    useCase: "admin",
    layoutComponents: ["admin-layout"],
    components: [
      { id: "button", required: true },
      { id: "card", required: true },
      { id: "input", required: true },
      { id: "badge", required: true },
      { id: "avatar", required: true },
      { id: "table", required: true },
      { id: "select", required: true },
      { id: "dialog", required: true },
      { id: "dropdown-menu", required: true },
      { id: "sidebar", required: true },
      { id: "navbar", required: true },
      { id: "stat-card", required: true },
      { id: "data-table", required: true },
      { id: "page-header", required: true },
      { id: "filter-bar", required: false },
      { id: "breadcrumbs", required: false },
      { id: "kpi-grid", required: false },
      { id: "confirm-dialog", required: true },
      { id: "empty-state", required: false },
      { id: "loading-state", required: true },
      { id: "pagination", required: false },
      { id: "search-with-results", required: false },
      { id: "tabs", required: false },
      { id: "form-field", required: false },
      { id: "file-upload", required: false },
    ],
    theme: {
      primaryHue: "221",
      surfaceHue: "222",
      font: "Inter",
    },
    suggestedPages: ["Dashboard", "Users List", "User Detail", "Settings", "Reports", "Analytics"],
  },

  landing: {
    id: "landing",
    name: "Landing Page",
    description: "High-conversion landing page with hero, features, pricing, testimonials, and CTA sections",
    useCase: "landing",
    layoutComponents: ["landing-navbar"],
    components: [
      { id: "button", required: true },
      { id: "card", required: true },
      { id: "badge", required: true },
      { id: "avatar", required: true },
      { id: "container", required: true },
      { id: "hero", required: true },
      { id: "features-section", required: true },
      { id: "cta-section", required: true },
      { id: "footer", required: true },
      { id: "landing-navbar", required: true },
      { id: "pricing-section", required: false },
      { id: "testimonials-section", required: false },
      { id: "faq-section", required: false },
      { id: "newsletter-section", required: false },
      { id: "logo-cloud", required: false },
      { id: "grid", required: false },
      { id: "section", required: false },
    ],
    theme: {
      primaryHue: "221",
      radius: "0.75rem",
      font: "Inter",
    },
    suggestedPages: ["Home", "Features", "Pricing", "About", "Contact"],
  },

  saas: {
    id: "saas",
    name: "SaaS Application",
    description: "SaaS app design system combining landing + dashboard elements with subscription management",
    useCase: "saas",
    layoutComponents: ["landing-navbar", "admin-layout"],
    components: [
      { id: "button", required: true },
      { id: "card", required: true },
      { id: "input", required: true },
      { id: "badge", required: true },
      { id: "avatar", required: true },
      { id: "tabs", required: true },
      { id: "select", required: true },
      { id: "dropdown-menu", required: true },
      { id: "dialog", required: true },
      { id: "hero", required: true },
      { id: "features-section", required: true },
      { id: "pricing-section", required: true },
      { id: "testimonials-section", required: false },
      { id: "cta-section", required: true },
      { id: "faq-section", required: false },
      { id: "footer", required: true },
      { id: "stat-card", required: false },
      { id: "page-header", required: false },
      { id: "data-table", required: false },
      { id: "confirm-dialog", required: true },
      { id: "auth-guard", required: true },
      { id: "login-form", required: true },
      { id: "oauth-buttons", required: false },
      { id: "form-field", required: false },
    ],
    theme: {
      primaryHue: "271",
      surfaceHue: "240",
      font: "Inter",
    },
    suggestedPages: ["Home", "Features", "Pricing", "Dashboard", "Settings", "Billing", "Login"],
  },

  auth: {
    id: "auth",
    name: "Auth Pages",
    description: "Authentication system with login, register, OAuth, and route protection",
    useCase: "auth",
    layoutComponents: ["auth-layout"],
    components: [
      { id: "button", required: true },
      { id: "input", required: true },
      { id: "label", required: true },
      { id: "card", required: true },
      { id: "separator", required: false },
      { id: "auth-layout", required: true },
      { id: "login-form", required: true },
      { id: "register-form", required: true },
      { id: "oauth-buttons", required: true },
      { id: "auth-guard", required: true },
    ],
    theme: {
      primaryHue: "221",
      font: "Inter",
    },
    suggestedPages: ["Login", "Register", "Forgot Password", "Reset Password"],
  },

  ecommerce: {
    id: "ecommerce",
    name: "E-commerce",
    description: "Online store with product display, cart, and checkout components",
    useCase: "ecommerce",
    layoutComponents: ["landing-navbar"],
    components: [
      { id: "button", required: true },
      { id: "card", required: true },
      { id: "input", required: true },
      { id: "badge", required: true },
      { id: "avatar", required: true },
      { id: "select", required: true },
      { id: "dialog", required: true },
      { id: "separator", required: false },
      { id: "landing-navbar", required: true },
      { id: "footer", required: true },
      { id: "hero", required: false },
      { id: "features-section", required: false },
      { id: "testimonials-section", required: false },
      { id: "faq-section", required: false },
      { id: "cta-section", required: true },
      { id: "breadcrumbs", required: false },
      { id: "grid", required: false },
    ],
    theme: {
      primaryHue: "142",
      font: "Inter",
    },
    suggestedPages: ["Home", "Shop", "Product Detail", "Cart", "Checkout", "Orders"],
  },

  marketing: {
    id: "marketing",
    name: "Marketing Site",
    description: "Corporate/brochure website with content sections, blog, and contact forms",
    useCase: "marketing",
    layoutComponents: ["landing-navbar"],
    components: [
      { id: "button", required: true },
      { id: "card", required: true },
      { id: "badge", required: true },
      { id: "avatar", required: true },
      { id: "container", required: true },
      { id: "landing-navbar", required: true },
      { id: "hero", required: true },
      { id: "features-section", required: true },
      { id: "testimonials-section", required: false },
      { id: "cta-section", required: true },
      { id: "faq-section", required: false },
      { id: "footer", required: true },
      { id: "newsletter-section", required: false },
      { id: "logo-cloud", required: false },
      { id: "grid", required: false },
    ],
    theme: {
      primaryHue: "221",
      font: "Inter",
    },
    suggestedPages: ["Home", "About", "Services", "Blog", "Contact"],
  },

  minimal: {
    id: "minimal",
    name: "Minimal / Portfolio",
    description: "Minimal design system for portfolios, personal sites, and docs",
    useCase: "portfolio",
    layoutComponents: ["landing-navbar"],
    components: [
      { id: "button", required: true },
      { id: "card", required: true },
      { id: "badge", required: true },
      { id: "avatar", required: true },
      { id: "container", required: true },
      { id: "landing-navbar", required: false },
      { id: "hero", required: true },
      { id: "grid", required: true },
      { id: "footer", required: true },
      { id: "section", required: true },
      { id: "features-section", required: false },
      { id: "testimonials-section", required: false },
    ],
    theme: {
      primaryHue: "221",
      font: "Inter",
    },
    suggestedPages: ["Home", "Projects", "About", "Contact"],
  },
};

export function getPreset(id: string): DesignPreset | undefined {
  return presets[id];
}

export function getPresetByUseCase(useCase: UseCase): DesignPreset | undefined {
  return Object.values(presets).find((p) => p.useCase === useCase);
}

export function getAllPresets(): DesignPreset[] {
  return Object.values(presets);
}
