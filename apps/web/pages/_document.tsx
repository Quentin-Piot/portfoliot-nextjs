import { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from './_app'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png"></link>
        <meta name="theme-color" content="#fff" />
        <meta
          name="google-site-verification"
          content="fkukldKte3_7HBaHyBTWur7CHtBxeN-Btp-b1GujCsE"
        />
        <meta
          name="description"
          content="Portfolio of Quentin Piot. French software Engineer based in Asia. Well-versed in a wide range of frontend technologies (React, Vue, Next.js, Redux) and backend technologies (Node.js/Nest.js/Hapi.js, Java/Spring, GraphQl, PostgresSQL)"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
