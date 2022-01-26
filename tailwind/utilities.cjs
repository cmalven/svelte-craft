const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme }) {
  addUtilities({
    '.outer': {
      paddingLeft: 'var(--fluid-size-outer)',
      paddingRight: 'var(--fluid-size-outer)',
    },
    '.inner': {
      width: '100%',
      maxWidth: '1600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  });
});
