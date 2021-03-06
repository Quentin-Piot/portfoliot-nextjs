import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from '../views/Homepage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio Quentin Piot</title>
      </Head>

      <Homepage />
    </>
  )
}

export default Home
