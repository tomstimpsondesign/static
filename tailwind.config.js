module.exports = {
  content: [
    './**/*.{html,js}'
  ], 
  theme: {
    colors: {
      'pale': '#ffffff',
      'mint': '#caffec',
      'teal': '#00CFAA',
      'green': '#323430',
    },
    extend: {
      spacing: {
        '402': '25.125rem'
      },
      fontSize: {
        '64': ['4rem', {
          lineHeight: '4.5rem',
        }]
      },
    },
  },
  plugins: [],
}