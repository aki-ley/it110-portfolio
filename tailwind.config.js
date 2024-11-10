/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F1A208',
        secondary: '#ec4899',
        cardColor: '#005377',
        bgColor: '#052F5F',
        textColor: 'white',
        textColorDarker: 'gray',
        textColorDark: '#d1d5db',
        grayish: '#ADB7BE',
      }
    },
  },
  plugins: [],
}

