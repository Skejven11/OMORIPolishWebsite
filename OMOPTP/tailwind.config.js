module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'omori': ['OMORI'],
      'omori2': ['OMORI2']
    },
    extend: {
      keyframes: {
        moveLeftRight: {
          '0%': { transform: 'translatex(0px)' },
          '50%': { transform: 'translatex(3px)' },
        },
        moveUpDown: {
          '0%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-6px)' },
        }
      },
      animation: {
        'left-right': 'moveLeftRight 1s infinite linear',
        'up-down' : 'moveUpDown 2s infinite'
      },
    },
  },
  plugins: [],
}
