import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#06B6D4',
          hover: '#22D3EE',
          dim: '#0E7490',
          glow: 'rgba(6, 182, 212, 0.15)',
        },
        surface: {
          DEFAULT: '#0A0A0B',
          raised: '#141415',
          overlay: '#1C1C1E',
          border: '#2A2A2D',
        },
      },
    },
  },
  plugins: [],
}
export default config
