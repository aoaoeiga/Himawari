import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C8920A",
          light: "#E8B84A",
          dark: "#9A7008",
        },
        crimson: {
          DEFAULT: "#C41E3A",
        },
        royal: {
          DEFAULT: "#1A237E",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        noto: ["Noto Serif JP", "serif"],
      },
      borderColor: {
        "gold-subtle": "rgba(200,146,10,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
