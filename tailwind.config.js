/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── COLORS ───────────────────────────────────────────────
      colors: {
        bg: {
          primary: "#0c0c0f",
          surface: "#13131a",
          surface2: "#1a1a24",
          surface3: "#22222f",
        },
        accent: {
          primary: "#7c6af7",
          light: "#a78bfa",
          glow: "rgba(124, 106, 247, 0.25)",
        },
        text: {
          primary: "#f0f0f5",
          muted: "#6b6b80",
          muted2: "#9090a8",
        },
        border: {
          default: "rgba(255, 255, 255, 0.07)",
        },
        status: {
          success: "#34d399",
          danger: "#f87171",
          warning: "#fbbf24",
        },
      },

      // ─── FONTS ────────────────────────────────────────────────
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },

      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },

      // ─── BORDER RADIUS ────────────────────────────────────────
      borderRadius: {
        sm: "6px",
        md: "9px",
        lg: "10px",
        xl: "11px",
        "2xl": "14px",
        "3xl": "20px",
        pill: "9999px",
      },

      // ─── BOX SHADOW ───────────────────────────────────────────
      boxShadow: {
        "accent-glow": "0 4px 20px rgba(124, 106, 247, 0.25)",
        "accent-glow-lg": "0 6px 32px rgba(124, 106, 247, 0.45)",
        "col-dot-purple": "0 0 6px rgba(124, 106, 247, 0.6)",
        "col-dot-yellow": "0 0 6px rgba(251, 191, 36, 0.5)",
        "col-dot-green": "0 0 6px rgba(52, 211, 153, 0.5)",
        card: "0 8px 24px rgba(0, 0, 0, 0.25)",
        "auth-card":
          "0 0 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.03)",
        "input-focus": "0 0 0 3px rgba(124, 106, 247, 0.25)",
        surface: "0 1px 4px rgba(0, 0, 0, 0.3)",
      },

      // ─── TYPOGRAPHY (font sizes) ──────────────────────────────
      fontSize: {
        "2xs": ["10px", { lineHeight: "1.4" }],
        xs: ["11px", { lineHeight: "1.4" }],
        sm: ["12px", { lineHeight: "1.5" }],
        base: ["13px", { lineHeight: "1.5" }],
        md: ["14px", { lineHeight: "1.5" }],
        lg: ["15px", { lineHeight: "1.5" }],
        xl: ["16px", { lineHeight: "1.4" }],
        "2xl": ["17px", { lineHeight: "1.3" }],
        "3xl": ["20px", { lineHeight: "1.3" }],
        "4xl": ["22px", { lineHeight: "1.2" }],
        "5xl": ["26px", { lineHeight: "1.2" }],
        "6xl": ["28px", { lineHeight: "1.1" }],
      },

      // ─── LETTER SPACING ───────────────────────────────────────
      letterSpacing: {
        tight: "-0.01em",
        normal: "0em",
        sm: "0.03em",
        md: "0.04em",
        lg: "0.06em",
        xl: "0.08em",
        "2xl": "0.12em",
      },

      // ─── SPACING (extra tokens) ───────────────────────────────
      spacing: {
        4.5: "18px",
        13: "52px",
        15: "60px",
        18: "72px",
      },

      // ─── BACKGROUND IMAGE (gradients) ─────────────────────────
      backgroundImage: {
        "auth-glow":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,106,247,0.12) 0%, transparent 70%)",
        "auth-glow-mobile":
          "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(124,106,247,0.10) 0%, transparent 60%)",
        "avatar-gradient": "linear-gradient(135deg, #7c6af7, #c084fc)",
        "accent-dot-glow":
          "radial-gradient(circle, rgba(124,106,247,0.06) 0%, transparent 70%)",
      },

      // ─── TRANSITIONS ──────────────────────────────────────────
      transitionDuration: {
        150: "150ms",
        200: "200ms",
        300: "300ms",
      },
      transitionTimingFunction: {
        drawer: "cubic-bezier(0.32, 0, 0.15, 1)",
      },

      // ─── SIZES (fixed elements) ───────────────────────────────
      width: {
        "todo-col": "280px",
        "todo-col-sm": "260px",
        "auth-card": "420px",
        drawer: "260px",
        "avatar-sm": "26px",
        "avatar-md": "28px",
        "avatar-lg": "32px",
        "avatar-xl": "36px",
        "logo-dot-sm": "20px",
        "logo-dot-md": "22px",
        "logo-dot-lg": "28px",
        checkbox: "16px",
        "col-dot": "10px",
        fab: "52px",
        "page-btn": "34px",
      },
      height: {
        "avatar-sm": "26px",
        "avatar-md": "28px",
        "avatar-lg": "32px",
        "avatar-xl": "36px",
        "logo-dot-sm": "20px",
        "logo-dot-md": "22px",
        "logo-dot-lg": "28px",
        checkbox: "16px",
        "col-dot": "10px",
        fab: "52px",
        "page-btn": "34px",
        "app-header": "58px",
        "m-header": "54px",
      },

      // ─── MAX WIDTH ────────────────────────────────────────────
      maxWidth: {
        mobile: "430px",
      },

      // ─── ANIMATION ────────────────────────────────────────────
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(124,106,247,0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(124,106,247,0.6)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s cubic-bezier(0.32, 0, 0.15, 1)",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
