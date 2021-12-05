import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="zh-hans">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="theme-color"
            content="#f9fafb"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#111111"
            media="(prefers-color-scheme: dark)"
          />
          <meta property="og:image" content="/images/OGP.png" />
        </Head>
        <body className="text-black dark:text-white font-sans min-w-80">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
