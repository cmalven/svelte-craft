const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
  addComponents({
    '.c-card': {
      '@apply rounded-card': {},
      '@apply shadow-card': {},
      '@apply bg-white': {},
      '@apply px-outer-component': {},
      '@apply py-[calc(var(--fluid-size-outer-component)*1.3)]': {},
    },
  });
});
