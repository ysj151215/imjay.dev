const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant, config, e, postcss }) {
      const importantSelector = typeof config('important') === 'string' ? config('important') : null

      addVariant('media-hover', ({ container, separator }) => {
        const atRule = postcss.atRule({ name: 'media', params: '(hover: hover)' })
        atRule.append(container.nodes)
        container.append(atRule)
        atRule.walkRules(rule => {
          rule.selector = `${importantSelector ? importantSelector + ' ' : ''}.${e(`media-hover${separator}`)}${rule.selector.slice(
            1 + (importantSelector ? importantSelector.length + 1 : 0)
          )}`
        })
      })
    })
  ],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: colors.white,
      black: colors.black
    },
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
      typography: () => ({
        DEFAULT: {
          css: {
            color: 'var(--fg)',
            a: { color: 'var(--fg-deep)' },
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
            'blockquote p:first-of-type::after': { content: 'none' }
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
