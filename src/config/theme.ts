export type ThemePreset = "academic-blue" | "tech-dark" | "editorial-cream" | "emerald-sustain";

export interface ThemeConfig {
  preset: ThemePreset;
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
    border: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const activeTheme: ThemeConfig = {
  preset: "academic-blue",
  colors: {
    primary: "#1e3a8a", // Deep Blue
    primaryHover: "#1d4ed8",
    secondary: "#0d9488", // Teal
    accent: "#f59e0b", // Amber Accent
    background: "#f8fafc", // Light Slate Background
    surface: "#ffffff",
    text: "#0f172a",
    muted: "#64748b",
    border: "#e2e8f0"
  },
  typography: {
    headingFont: "var(--font-sans)",
    bodyFont: "var(--font-sans)"
  },
  radius: {
    sm: "0.375rem",
    md: "0.75rem",
    lg: "1rem"
  }
};
