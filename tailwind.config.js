/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/section/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '460px'
      },
      colors: {
        "cblue-1": '#117',
        "cblue-2": '#1dace9',
        cyellow: '#ffc700',
      },
    },
  },
  plugins: [],
}
