import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
        numans: ["var(--font-numans)"],
        robotoflex: ['"Roboto Flex"', "sans-serif"],
      },
      screens: {
        mol: { max: "425px" },
        "md-custom": "860px",
        "lg-custom": "1220px",
      },
      transform: {
        "rotate-x-180": "rotateX(180deg)",
      },
      colors: {
        brand: {
          "100": "#00C8FF",
          DEFAULT: "#2C526F",
        },
        ash: "#4D4D4F",
        toreabay: "#0A279A",
        paradiso: "#3C8D8D",
        limeade: "#73BA00",
        tarawera: {
          "100": "#1b456e",
          DEFAULT: "#073056",
        },
        curiousblue: "#197DDA",
        dustygray: "#999999",
        light: {
          "100": "#333F4E",
          "200": "#A3B2C7",
          "300": "#F2F5F9",
          "400": "#F2F4F8",
        },
        dark: {
          "100": "#04050C",
          "200": "#131524",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        "drop-1": "0px 10px 30px 0px rgba(66, 71, 97, 0.1)",
        "drop-2": "0 8px 30px 0 rgba(65, 89, 214, 0.3)",
        "drop-3": "0 8px 30px 0 rgba(65, 89, 214, 0.1)",
        "custom-1": "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        "custom-2": "0 0 10px 0 rgba(0, 0, 0, 0.8)",
        "custom-3": "0px 0px 9.8px 0px rgba(0, 0, 0, 1.5)",
        header: "0px 4px 6px -1px rgba(0, 0, 0, 0.6)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
        scrollX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseOnce: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        attention: {
          "0%, 100%": { transform: "scale(1)", color: "black" },
          "50%": { transform: "scale(1.05)", color: "#4338ca" }, // indigo-600
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        scrollX: "scrollX 20s linear infinite",
        pulseOnce: "pulseOnce 2s ease-in-out infinite",
        attention: "attention 1.5s ease-in-out infinite",
      },
      textIndent: {
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};
export default config;
