import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/tabs.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xxl: "1536px", // Define custom breakpoint at 1536px
      }
    },
  },
  plugins: [function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.font-ligatures': {
          'font-feature-settings': '"liga" 1',},});
    },nextui()],
};
export default config;
