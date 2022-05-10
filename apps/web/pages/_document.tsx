import { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from './_app'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
