import { addIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui'),
    addIconSelectors(["fluent"]),
  ],
}

