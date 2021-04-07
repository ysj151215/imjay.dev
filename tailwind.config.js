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
            color: '#555555',
            a: { color: '#222222' },
            b: { color: '#222222' },
            code: { color: '#222222' },
            strong: { color: '#222222' },
            em: { color: 'inherit' },
            h1: { color: '#000000' },
            h2: { color: '#222222' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            hr: { width: '50px', 'margin-left': 'auto', 'margin-right': 'auto' },
            blockquote: { color: 'inherit' },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' }
          }
        },
        dark: {
          css: {
            color: '#bbbbbb',
            a: { color: '#dddddd' },
            b: { color: '#dddddd' },
            code: { color: '#dddddd' },
            strong: { color: '#dddddd' },
            em: { color: 'inherit' },
            h1: { color: '#ffffff' },
            h2: { color: '#dddddd' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            h5: { color: '#bbbbbb' },
            blockquote: { color: 'inherit' }
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
