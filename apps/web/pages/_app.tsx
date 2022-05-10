import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import MainLayout from '../layouts/MainLayout'

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
      // styles for the `a`
      a: {
        _hover: {
          bgColor: 'red',
        },
      },
    },
  },
  colors: {
    primary: '#ffffff',
    secondary: '#eeeeee',
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          backgroundColor: 'red',
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}

export default MyApp
