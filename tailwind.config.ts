import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'boxIn': '2px 2px 5px rgba(161, 172, 170, 0.90) inset',
        'boxOut': '2px 2px 5px rgba(161, 172, 170, 0.90)',
      }
    },
    colors: {
      'background': '#D6E5E3',
      'font': '#6B7271',
      'alart': 'EE2E31',
    }
  },
  plugins: [],
}
export default config
