module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
		// Modificando a classe Container
		container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
		// Extendendo as cores: vai criar novas cores com o mesmo padrão TailWind
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
		// Especificando qual fonte usar
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};