module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Oswald', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        whiteupe: {
          DEFAULT: "#FFFFF0",
        },
        blupe: {  
          DEFAULT: '#334A76',
        },
        redupe: {  
          DEFAULT: '#ED3237',
        },
        grayupe: {  
          DEFAULT: '#8A98B1',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
