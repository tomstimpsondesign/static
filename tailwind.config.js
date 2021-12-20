module.exports = {
  content: [
    './**/*.{html,js}'
  ], 
  theme: {
    colors: {
      'pale': '#FFF8F8',
      'lime': '#59FF88',
      'lime-alpha': '#469A5C',
      'mint': '#caffec',
      'teal': '#00CFAA',
      'green': '#323430',
      'green-alpha': '#7E998E',
      'ochre': '#FFCA0F',
      'darkgreen': '#121614',
      'red': '#FF3A2E',
    },
    fontFamily: {
      'sans-neutral': ['PolySans-Neutral', 'Helvetica', 'Arial', 'system-ui'],
      'sans-median': ['PolySans-Median', 'Helvetica', 'Arial', 'system-ui'],
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