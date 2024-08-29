import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      msserif: ["MS Serif", "sans-serif"],
      
      frlight: ["Franklin Gothic Light", "sans-serif"],
      frgoth: ["Franklin Gothic", "sans-serif"],
      frblack: ["Franklin Gothic Black", "sans-serif"],
      frcond: ["Franklin Gothic Condensed", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "w98-clouds": "url('/assets/images/pictures/Welcome.webp')"
      },
    },
  },
  plugins: [],
};
export default config;
