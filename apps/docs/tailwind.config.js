const baseConfig = require('@freemed-kit/ui/tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: ['./stories/**/*.{js,jsx,ts,tsx}'],
}
