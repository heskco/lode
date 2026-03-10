/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lode: {
          navy: '#0B1F3B',
          orange: '#FF6A00',
          slate: '#94A3B8',
          'light-bg': '#F5F7FA',
          success: '#4CAF50',
          error: '#DC2626',
          warning: '#F59E0B',
          info: '#3B82F6',
        },
      },
      fontFamily: {
        trebuchet: ['"Trebuchet MS"', '"Lucida Grande"', 'Tahoma', 'sans-serif'],
      },
      borderRadius: {
        lode: '6px',
      },
      boxShadow: {
        'lode-orange': '0 0 0 3px rgba(255, 106, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
