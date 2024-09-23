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
        120: '#E0E0E0',
        'opacity-120': 'rgba(0, 0, 0, 0.12)',
      },
    },
    fontSize: {
      xxs: ['6pt', '9pt'],
      xs: ['9pt', '12pt'],
      s: ['12pt', '16pt'],
      m: ['14pt', '20pt'],
      'p-xs': ['2mm', '2.5mm'],
      'p-s': ['2.6mm', '3.3mm'],
      'p-m': ['3.3mm', '4.16mm'],
      'p-l': ['5.3mm', '6.6mm'],
      'p-xl': ['6.6mm', '8.3mm'],
      // lg: ['1.25rem', '1.75rem'],
      // xl: ['1.5rem', '2rem'],
      // h1: ['2.5rem', '2.75rem'],
      // h2: ['2rem', '2.5rem'],
      // h3: ['1.5rem', '1.875rem'],
      // h4: ['1.25rem', '1.5rem'],
      // h5: ['1.125rem', '1.375rem'],
      // h6: ['0.75rem', '1rem'],
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
