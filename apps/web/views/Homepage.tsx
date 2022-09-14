import React, { useMemo } from 'react'
import { Center, Image, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

const PDFViewer = dynamic(() => import('components/pdfViewer/PdfViewer'), {
  ssr: false,
})

const Homepage: React.FC = () => {
  const { i18n } = useTranslation()

  const urlCv = useMemo(
    () => '/cvs/' + (i18n.language === 'fr' ? 'cv_français.pdf' : 'cv_english.pdf'),
    [i18n.language]
  )
  console.log('urlCv', urlCv)
  return (
    <VStack>
      {/*<HStack minHeight={200} width="100%" flexDirection={{ base: 'column', md: 'row' }} mb={30}>*/}
      <Center flex={1} height={{ base: 90, md: 200 }} pb={6}>
        <Image
          src="/images/lkn_picture.png"
          borderRadius="full"
          height={{ base: 90, md: 200 }}
          alt={'photo of me'}
        />
      </Center>

      <PDFViewer url={urlCv} />
    </VStack>
  )
}

export default Homepage
