module.exports = {
  content: [
    './**/*.{html,js}'
  ], 
  theme: {
    colors: {
      'white': '#FFFFFF',
      'pale': '#B4A1FF',
      'green': '#323430',
      'red': '#FF3A2E',
      'purple': '#6B00D6',
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