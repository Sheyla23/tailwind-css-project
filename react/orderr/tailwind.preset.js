module.exports = {
  theme: {
    extend: {
      colors:{
        blue:{
          pale:'hsl(225, 100%, 94%)',
          bright:'hsl(245, 75%, 52%)',
          paler:'hsl(225, 100%, 98%)',
          desaturated:'hsl(224, 23%, 55%)',
          dark:' hsl(223, 47%, 23%)'
        }
      },
      backgroundImage: {
        'hero-sm': "url('./images/pattern-background-mobile.svg')",
        'hero-mb': "url('./images/pattern-background-desktop.svg')",
      }
    },
  },
  plugins: [],
}