import type { NextPage } from 'next'
import Head from 'next/head'

import { IconButton } from '@chakra-ui/react'
import { AiFillLinkedin } from 'react-icons/ai'
import React from 'react'

const Education: NextPage = () => {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>

      <IconButton
        onClick={() => window.open('https://www.linkedin.com/in/quentin-piot/', '_blank')?.focus()}
        variant="ghost"
        aria-label="open linkedin"
        icon={<AiFillLinkedin size={32} />}
      />
    </>
  )
}

export default Education
