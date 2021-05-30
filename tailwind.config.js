module.exports = {
  mode: 'jit',
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1536px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '425px'
      },
      padding: {
        DEFAULT: '20px',
        xs: '30px',
        sm: '45px'
      }
    },
    screens: {
      '2xl': { max: '1536px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
      xs: { max: '425px' }
    },
    extend: {
      colors: {
        'c-bg': 'var(--c-bg)',
        fg: 'var(--fg)',
        'fg-deep': 'var(--fg-deep)'
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: 'var(--fg)',
            a: { color: 'var(--fg-deep)' },
            'a:hover': { color: 'var(--fg-deeper)' },
            b: { color: 'var(--fg-deep)' },
            code: { color: 'var(--fg-deep)' },
            strong: { color: 'var(--fg-deep)' },
            em: { color: 'inherit' },
            h1: { color: 'var(--fg-deeper)' },
            h2: { color: 'var(--fg-deep)' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            hr: { width: '50px', 'margin-left': 'auto', 'margin-right': 'auto' },
            blockquote: { color: 'inherit' },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
            'figure figcaption': { color: 'var(--fg)' }
          }
        }
      })
    }
  },
  variants: {
    extend: {},
    typography: ['responsive', 'dark']
  }
}
