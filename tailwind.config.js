/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ff4d00'
      },
      fontFamily: {
        sans: ['NB International Mono', 'JetBrains Mono', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['NB International Mono', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular']
      }
    }
  },
  plugins: []
};
