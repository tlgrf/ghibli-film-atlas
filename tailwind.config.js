/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mist: {
          50: 'var(--color-mist-50)',
          100: 'var(--color-mist-100)',
          200: 'var(--color-mist-200)',
          300: 'var(--color-mist-300)',
          400: 'var(--color-mist-400)',
          500: 'var(--color-mist-500)',
          600: 'var(--color-mist-600)',
          700: 'var(--color-mist-700)',
          800: 'var(--color-mist-800)',
          900: 'var(--color-mist-900)'
        },
        moss: {
          50: 'var(--color-moss-50)',
          100: 'var(--color-moss-100)',
          200: 'var(--color-moss-200)',
          300: 'var(--color-moss-300)',
          400: 'var(--color-moss-400)',
          500: 'var(--color-moss-500)',
          600: 'var(--color-moss-600)',
          700: 'var(--color-moss-700)',
          800: 'var(--color-moss-800)',
          900: 'var(--color-moss-900)'
        },
        ocean: {
          50: 'var(--color-ocean-50)',
          100: 'var(--color-ocean-100)',
          200: 'var(--color-ocean-200)',
          300: 'var(--color-ocean-300)',
          400: 'var(--color-ocean-400)',
          500: 'var(--color-ocean-500)',
          600: 'var(--color-ocean-600)',
          700: 'var(--color-ocean-700)',
          800: 'var(--color-ocean-800)',
          900: 'var(--color-ocean-900)'
        },
        skyx: {
          50: 'var(--color-skyx-50)',
          100: 'var(--color-skyx-100)',
          200: 'var(--color-skyx-200)',
          300: 'var(--color-skyx-300)',
          400: 'var(--color-skyx-400)',
          500: 'var(--color-skyx-500)',
          600: 'var(--color-skyx-600)',
          700: 'var(--color-skyx-700)',
          800: 'var(--color-skyx-800)',
          900: 'var(--color-skyx-900)'
        },
        sakura: {
          50: 'var(--color-sakura-50)',
          100: 'var(--color-sakura-100)',
          200: 'var(--color-sakura-200)',
          300: 'var(--color-sakura-300)',
          400: 'var(--color-sakura-400)',
          500: 'var(--color-sakura-500)',
          600: 'var(--color-sakura-600)',
          700: 'var(--color-sakura-700)',
          800: 'var(--color-sakura-800)',
          900: 'var(--color-sakura-900)'
        },
        tea: {
          50: 'var(--color-tea-50)',
          100: 'var(--color-tea-100)',
          200: 'var(--color-tea-200)',
          300: 'var(--color-tea-300)',
          400: 'var(--color-tea-400)',
          500: 'var(--color-tea-500)',
          600: 'var(--color-tea-600)',
          700: 'var(--color-tea-700)',
          800: 'var(--color-tea-800)',
          900: 'var(--color-tea-900)'
        },
        soot: {
          50: 'var(--color-soot-50)',
          100: 'var(--color-soot-100)',
          200: 'var(--color-soot-200)',
          300: 'var(--color-soot-300)',
          400: 'var(--color-soot-400)',
          500: 'var(--color-soot-500)',
          600: 'var(--color-soot-600)',
          700: 'var(--color-soot-700)',
          800: 'var(--color-soot-800)',
          900: 'var(--color-soot-900)'
        },
        ink: 'var(--color-ink)'
      }
    },
  },
  plugins: [],
}