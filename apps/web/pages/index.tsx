import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from '../views/Homepage'
import MainLayout from '../layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quentin Piot Portfolio</title>
      </Head>

      <MainLayout>
        <Homepage />
      </MainLayout>
    </>
  )
}

export default Home
