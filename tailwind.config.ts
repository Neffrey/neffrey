import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        neffrey: {
          primary: "#1DC2E7",
          secondary: "#00A3C4",
          accent: "#F51880",
          neutral: "#f0f0f0",
          "base-100": "#222222",
          info: "#9AD3F8",
          success: "#88F3D8",
          warning: "#FFDB58",
          error: "#F73B60",
        },
      },
    ],
  },
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
