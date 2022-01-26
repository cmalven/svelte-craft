const { type, fluidSize, fluid } = require('@malven/tailwind-toolkit');
const typeStyles = require('./tailwind/type-styles.cjs');
const fontStacks = require('./tailwind/font-stacks.cjs');
const colors = require('./tailwind/colors.cjs');
const sizes = require('./tailwind/sizes.cjs');
const utilities = require('./tailwind/utilities.cjs');
const components = require('./tailwind/components.cjs');
const variants = require('./tailwind/variants.cjs');

module.exports = {
  content: [
    './**/*.html',
    './src/**/*.svelte',
    './src/styles/**/*.scss',
    './src/scripts/**/*.js',
  ],
  theme: {
    borderRadius: {
      'card': '0.4rem',
    },
    boxShadow: {
      'card': '0 2px 15px rgba(0, 0, 0, 0.09)',
    },
    fontStacks,
    typeStyles,
    sizes,
    colors,
    fontSize: {},
  },
  plugins: [
    type,
    fluidSize,
    fluid,
    components,
    utilities,
    variants,
  ],
};
