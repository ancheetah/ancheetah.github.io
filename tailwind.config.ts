import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          primary: '#232b2b',
          secondary: '#666666',
        },
        coral: '#FF6A59',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
