module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],

  variants: {
    gridTemplateColumns: ['responsive'],
  },

  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    extend: {
      colors: {
        bgPrimary: 'var(--bg-primary)',
        textPrimary: 'var(--text-primary)',
        borderPrimary: 'var(--border-primary)',
      },

      gridTemplateColumns: {},
      gridTemplateRows: {},
      gap: {
        defaultX: '2%',
        defaultY: '10px',
      },
    },
    screens: {
      sm: '320px',
      ssm: '350px',
      md: '768px',
      lg: '1024px',
    },
  },

  corePlugins: { preflight: true }, // tailwind reset css 활성/비활성 옵션
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-textshadow'),
    require('flowbite/plugin'),
    require('tailwindcss-image-rendering')(), // image-rendering plugin
  ],
};
