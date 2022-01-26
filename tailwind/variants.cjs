const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addVariant, theme }) {
  // :nth-child
  addVariant('2-col-row-first', '&:nth-child(2n+1)');
  addVariant('2-col-row-second', '&:nth-child(2n+2)');
  addVariant('3-col-row-first', '&:nth-child(3n+1)');
  addVariant('3-col-row-second', '&:nth-child(3n+2)');
  addVariant('3-col-row-third', '&:nth-child(3n+3)');
  addVariant('4-col-row-first', '&:nth-child(4n+1)');
  addVariant('4-col-row-second', '&:nth-child(4n+2)');
  addVariant('4-col-row-third', '&:nth-child(4n+3)');
  addVariant('4-col-row-fourth', '&:nth-child(4n+4)');
});
