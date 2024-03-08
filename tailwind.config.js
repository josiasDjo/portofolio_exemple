/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'website_bg' : {
          '900' : '#000000',
          '800' : '#000000ec',
          '700' : '#000000be',
          '600' : '##0000009c',
          '500' : '#0000007b',
        }
      }
    },
  },
  plugins: [],
}

