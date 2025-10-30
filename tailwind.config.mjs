/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3B82F6", // Primary
        },
        accent: {
          DEFAULT: "#22C55E", // Accent
        },
        dark: {
          DEFAULT: "#0F172A", // Text dark
        },
        muted: {
          DEFAULT: "#0B1220", // Hero gradient dark
          light: "#F8FAFC", // Section light
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji"],
      },
      boxShadow: {
        'soft': '0 10px 20px -10px rgba(0,0,0,0.25)'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [typography, forms],
};
