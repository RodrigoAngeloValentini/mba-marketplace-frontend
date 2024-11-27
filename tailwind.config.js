/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        orange: {
          base: 'var(--orange-base)',
          dark: 'var(--orange-dark)'
        },
        blue: {
          light: 'var(--blue-light)',
          base: 'var(--blue-base)',
          dark: 'var(--blue-dark)'
        },
        white: 'var(--white)',
        background: 'var(--background)',
        shape: 'var(--shape)',
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)'
        },
        danger: 'var(--danger)',
        success: 'var(--success)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
