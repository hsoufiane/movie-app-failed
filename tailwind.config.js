/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF7500',
        secondary: '#0F172A',
        background: '#F8FAFC',
        customGray: '#2E2D2B',
      },
    },
  },
  plugins: [],
};
