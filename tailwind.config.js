module.exports = {
  content: [
    './**/*.{html,js}'
  ], 
  theme: {
    colors: {
      'white': '#FFFFFF',
      'keyline': '#D4D6DB',
      'charcoal': '#0C0E13',
      'mid-grey': '#A09FA4',
      'teal': '#00CFAA',
      'body': '#45484F',
    },
    fontFamily: {
      'serif': ['RecklessNeue-Light', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
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