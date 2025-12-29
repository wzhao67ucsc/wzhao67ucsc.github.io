/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'canvas': '#fcfcfc',
        'ink': '#1a1a1a',
        'subtle': '#8c8c8c',
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
