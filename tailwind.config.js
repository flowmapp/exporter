/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
      },
      gray: {
        DEFAULT: '#1F1F1F', // --primary-basic-gray
        560: '#707070',
        880: '$1F1F1F',
      },
      'neutral-gray': {
        80: '#EBEBEB',
        120: '#E0E0E0',
        400: '#999999',
        'opacity-120': 'rgba(0, 0, 0, 0.12)',
      },
    },
    fontSize: {
      xxs: ['2.1mm', '2.94mm'],
      xs: ['3.15mm', '4.41mm'],
      s: ['4.2mm', '5.88mm'],
      m: ['5mm', '7mm'],
      'p-xs': ['2mm', '2.5mm'],
      'p-s': ['2.6mm', '3.3mm'],
      'p-m': ['3.3mm', '4.16mm'],
      'p-l': ['5.3mm', '6.6mm'],
      'p-xl': ['6.6mm', '8.3mm'],
    },
    letterSpacing: {
      tightest: '-.04em',
      tighter: '-.03em',
      tight: '-.02em',
      regular: '-0.01em',
    },
    extend: {
      spacing: {
        '1cm': '1cm',
      },
    },
  },
  plugins: [],
}
