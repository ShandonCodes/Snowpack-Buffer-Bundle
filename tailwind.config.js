const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': '10rem auto'
      },
      colors: {
        'taxiebg': '#09bc8a',
        'taxiegray': '#263d42'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
