module.exports = {
  // Reduzir o arquivo tailwind para ter somente as classe que queremos
	purge: ['./index.html', './src/**/*.(vue,js,ts,jsx,tsx)'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
