import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from '../layouts/MainLayout'
import { IconButton } from '@chakra-ui/react'
import { AiFillLinkedin } from 'react-icons/ai'
import React from 'react'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <MainLayout>
        <IconButton
          onClick={() =>
            window.open('https://www.linkedin.com/in/quentin-piot/', '_blank')?.focus()
          }
          variant="ghost"
          aria-label="open linkedin"
          icon={<AiFillLinkedin size={32} />}
        />
      </MainLayout>
    </>
  )
}

export default About
