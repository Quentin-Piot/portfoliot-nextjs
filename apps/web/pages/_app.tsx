import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

function MyApp({Component, pageProps}: AppProps) {

  const theme = extendTheme({
    colors: {
      primary: "#ffffff",
      secondary: "#eeeeee"
    },
  })
  return <ChakraProvider theme={theme}> <Component {...pageProps} /></ChakraProvider>
}

export default MyApp
