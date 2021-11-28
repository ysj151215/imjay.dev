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
    900: '#111111',
  },
}

export default defineConfig({
  /* https://windicss.org/integrations/webpack.html#next-js */
  extract: {
    include: ['**/*.{jsx,js,css,html}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        gray: customColors.gray,
      },
      typography: {
        DEFAULT: {
          css: {
            color: customColors.gray[200],
            'h2, h3, h4': {
              color: customColors.gray[100],
              'scroll-margin-top': 'p-[32]',
            },
            a: {
              color: '#f19c79',
              '&:hover': { color: '#dd6e42' },
              code: { color: colors.blue[400] },
            },
            strong: { color: customColors.gray[100] },
            ol: { li: { '&:before': { color: customColors.gray[500] } } },
            ul: {
              li: { '&:before': { backgroundColor: customColors.gray[500] } },
            },
            hr: { borderColor: customColors.gray[700] },
            thead: {
              color: customColors.gray[100],
              borderBottomColor: customColors.gray[600],
            },
            tbody: { tr: { borderBottomColor: customColors.gray[700] } },
            pre: { fontFamily: 'menlo' },
            code: { color: colors.pink[500] },
            blockquote: {
              color: customColors.gray[300],
              borderLeftColor: customColors.gray[700],
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
      },
    },
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
})
