module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'sans': 'Source Serif Pro, sans-serif'
    },
    transform: { // defaults to this value
      'none': 'none',
    },
    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '100': '1',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2',
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("tailwindcss")
  ],
}
