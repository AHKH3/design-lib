// ============================================================================
// Design Lib — Barrel Export
// All components, utilities, tokens, registry, and presets
// ============================================================================

// Re-export from a single location to keep consumers' imports clean.
// Internal 'ui' barrel for shadcn-style primitives
export * from "./components/ui/button";
export * from "./components/ui/card";
export * from "./components/ui/input";
export * from "./components/ui/label";
export * from "./components/ui/badge";
export * from "./components/ui/avatar";
export * from "./components/ui/separator";
export * from "./components/ui/tabs";
export * from "./components/ui/dialog";
export * from "./components/ui/dropdown-menu";
export * from "./components/ui/select";
export * from "./components/ui/textarea";
export * from "./components/ui/tooltip";
export * from "./components/ui/skeleton";
export * from "./components/ui/table";
export * from "./components/ui/alert";
export * from "./components/ui/progress";

// Admin
export * from "./components/admin/admin-layout";
export * from "./components/admin/sidebar";
export * from "./components/admin/navbar";
export * from "./components/admin/stat-card";
export * from "./components/admin/data-table";
export * from "./components/admin/page-header";
export * from "./components/admin/filter-bar";
export * from "./components/admin/breadcrumbs";
export * from "./components/admin/kpi-grid";

// Landing
export * from "./components/landing/hero";
export * from "./components/landing/features-section";
export * from "./components/landing/pricing-section";
export * from "./components/landing/testimonials-section";
export * from "./components/landing/cta-section";
export * from "./components/landing/faq-section";
export * from "./components/landing/navbar";
export * from "./components/landing/footer";
export * from "./components/landing/newsletter-section";
export * from "./components/landing/logo-cloud";

// Auth
export * from "./components/auth/login-form";
export * from "./components/auth/register-form";
export * from "./components/auth/auth-layout";
export * from "./components/auth/oauth-buttons";
export * from "./components/auth/auth-guard";

// Forms
export * from "./components/forms/form-field";
export * from "./components/forms/switch";
export * from "./components/forms/checkbox";
export * from "./components/forms/radio-group";
export * from "./components/forms/file-upload";

// Layout
export * from "./components/layout/container";
export * from "./components/layout/grid";
export * from "./components/layout/stack";
export * from "./components/layout/flex";
export * from "./components/layout/section";

// Patterns
export * from "./components/patterns/confirm-dialog";
export * from "./components/patterns/empty-state";
export * from "./components/patterns/error-state";
export * from "./components/patterns/loading-state";
export * from "./components/patterns/pagination";
export * from "./components/patterns/search-with-results";

// Registry & tokens
export * from "./registry";
export * from "./tokens/index";

// Presets
export * from "./presets/index";

// Lib utilities
export * from "./lib/utils";
