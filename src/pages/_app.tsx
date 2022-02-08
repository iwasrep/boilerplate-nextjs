import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={process.env.APP_DESCRIPTION} />
        <meta name="author" content={process.env.APP_DEVELOPER} />
        <meta
          name="facebook-domain-verification"
          content={process.env.FACEBOOK_DOMAIN_VERIFICATION}
        />
        <meta name="robots" content="1 day" />
        <meta name="theme-color" content={process.env.APP_THEME_COLOR} />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/favicons/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          type="image/png"
          href="/images/favicons/favicon-512x512.png"
        />
        <link
          rel="android-chrome"
          sizes="192x192"
          type="image/png"
          href="/images/favicons/favicon-192x192.png"
        />
        <link
          rel="android-chrome"
          sizes="512x512"
          type="image/png"
          href="/images/favicons/favicon-512x512.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
