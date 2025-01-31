/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        paua: '#272450',
        primary: 'var(--color-primary)',
      }
    },
  },
  plugins: [],
}
