import { ThemeProvider } from 'next-themes'
import 'windi.css'
import '../styles/globals.css'
import '../styles/typography.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
