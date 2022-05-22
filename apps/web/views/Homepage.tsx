import React from 'react'
import { Box, Center, Image, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const PDFViewer = dynamic(() => import('components/pdfViewer/PdfViewer'), {
  ssr: false,
})

const Homepage: React.FC = () => {
  return (
    <VStack>
      {/*<HStack minHeight={200} width="100%" flexDirection={{ base: 'column', md: 'row' }} mb={30}>*/}
      <Center flex={1} height={{ base: 90, md: 200 }} pb={6}>
        <Image
          src="/images/me.jpg"
          borderRadius="full"
          height={{ base: 90, md: 200 }}
          alt={'photo of me'}
        />
      </Center>
      {/*  <Stack flex={2} height="100%">*/}
      {/*    <BasicCard*/}
      {/*      categorie={t('common.aboutMe')}*/}
      {/*      subtitle={t('pages.homepage.cards.aboutMe.title')}*/}
      {/*      width="800px"*/}
      {/*    >*/}
      {/*      <br />*/}
      {/*      <ReactMarkdown>{t('pages.homepage.cards.aboutMe.text')}</ReactMarkdown>*/}
      {/*    </BasicCard>*/}
      {/*  </Stack>*/}
      {/*</HStack>*/}
      {/*<Divider />*/}
      <PDFViewer url="/CV_2022.pdf" />
    </VStack>
  )
}

export default Homepage
