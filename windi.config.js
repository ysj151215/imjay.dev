import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

const customColors = {
  gray: {
    0: '#fff',
    100: '#fafafa',
    200: '#eaeaea',
    300: '#999999',
    400: '#888888',
    500: '#666666',
    600: '#444444',
    700: '#333333',
    800: '#222222',
    900: '#111111'
  }
}

export default defineConfig({
  /* https://windicss.org/integrations/webpack.html#next-js */
  extract: {
    include: ['**/*.{jsx,js,css,html}'],
    exclude: ['node_modules', '.git', '.next']
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: customColors.gray
      },
      typography: {
        DEFAULT: {
          css: {
            color: customColors.gray[700],
            a: {
              color: colors.blue[500],
              '&:hover': { color: colors.blue[800] },
              code: { color: colors.blue[400] }
            },
            'h2, h3, h4': { 'scroll-margin-top': 'spacing-32' },
            thead: { borderBottomColor: customColors.gray[200] },
            code: { color: customColors.gray[500] },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: customColors.gray[200],
            a: {
              color: colors.blue[400],
              '&:hover': { color: colors.blue[600] }
            },
            blockquote: {
              borderLeftColor: customColors.gray[700],
              color: customColors.gray[300]
            },
            'h1, h2, h3, h4': { color: customColors.gray[100] },
            hr: { borderColor: customColors.gray[700] },
            ol: { li: { '&:before': { color: customColors.gray[500] } } },
            ul: {
              li: { '&:before': { backgroundColor: customColors.gray[500] } }
            },
            strong: { color: customColors.gray[100] },
            thead: {
              color: customColors.gray[100],
              borderBottomColor: customColors.gray[600]
            },
            tbody: { tr: { borderBottomColor: customColors.gray[700] } }
          }
        }
      }
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('windicss/plugin/typography')
    // ...
  ]
})
