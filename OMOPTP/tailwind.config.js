module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translatex(0px)' },
          '50%': { transform: 'translatex(3px)' },
        }
      },
      animation: {
        'left-right': 'move 2s infinite ease-in-out'
      },
    },
  },
  plugins: [],
}
