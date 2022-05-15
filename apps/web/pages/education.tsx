import type { NextPage } from 'next'
import Head from 'next/head'
import 'react-vertical-timeline-component/style.min.css'

import React from 'react'
import EducationView from 'views/Education'

const Education: NextPage = () => {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <EducationView />
    </>
  )
}

export default Education
