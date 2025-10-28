/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        // Primary Background / Surfaces
        'deep-navy': '#15354A',
        'light-gray': '#F3F3F3',

        // Text / Content
        'dark-navy': '#002036',
        'near-black': '#192124',
        'dark-slate-blue': '#113247',

        // Headers / Secondary Backgrounds
        'steel-blue': '#2A5066',
        'slate-blue-gray': '#3D535C',

        // Neutral UI / Dividers
        'taupe-gray': '#877673',
        'mid-gray': '#BDBDBD',

        // Accents & Interactive Elements
        'lime-green': '#72A343',
        'baby-blue': '#87CEEB',

        // Legacy colors (keeping for compatibility)
        'navy': '#15354A', // Updated to match deep-navy
        'ink': '#002036', // Updated to match dark-navy
        'teal': '#0F766E',
        'gold': '#D97706',
      },
      fontFamily: {
        'sans': ['Graphik', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'graphik': ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}