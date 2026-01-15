/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(240, 3%, 6%)',
        secondary: 'hsl(225, 3%, 28%)',
      },
      maxWidth: {
        '350': '87.5rem',
        '77.25': '19.3125rem',
      },
      gap: {
        '30': '7.5rem',
      },
      spacing: {
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}
