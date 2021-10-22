module.exports = {
  purge: {
    mode: 'all',
    content: ['./**/**/*.html', './**/**/*.svelte'],

    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
		  sans: "Source Serif Pro, sans-serif",
		},
		transform: { // defaults to this value
		  none: "none",
		},
		scale: {
		  0: "0",
		  25: ".25",
		  50: ".5",
		  75: ".75",
		  90: ".9",
		  100: "1",
		  110: "1.1",
		  125: "1.25",
		  150: "1.5",
		  200: "2",
		},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
