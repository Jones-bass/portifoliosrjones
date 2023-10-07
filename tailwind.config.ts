import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        diego: '#333'
      }
    },
  },
  plugins: [],
}
export default config
