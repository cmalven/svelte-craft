module.exports = ({ theme }) => ({
  'h-1': {
    stack: 'sans',
    sizes: {
      min: 48,
      md: 64,
      xl: 96,
    },
    properties: {
      lineHeight: 1.2,
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 'bold',
    },
  },
  'h-2': {
    stack: 'sans',
    sizes: {
      min: 24,
      md: 28,
    },
    properties: {
      lineHeight: 1.3,
      fontWeight: 'bold',
    },
  },
  'body-1': {
    stack: 'sans',
    sizes: {
      min: 15,
      md: 16,
    },
    properties: {
      lineHeight: 1.7,
    },
  },
  'body-2': {
    stack: 'sans',
    sizes: {
      min: 16,
      md: 22,
    },
    properties: {
      lineHeight: 1.7,
    },
  },

  'sub-1': {
    stack: 'sans',
    sizes: {
      min: 16,
    },
    properties: {
      textTransform: 'uppercase',
      lineHeight: 1.2,
      fontWeight: '800',
    },
  },
});
