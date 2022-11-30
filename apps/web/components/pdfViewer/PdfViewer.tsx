import React, { LegacyRef, useEffect, useRef, useState } from 'react'

import { Document, Page, pdfjs } from 'react-pdf'
import { Box, Button, CircularProgress, HStack, Text, VStack } from '@chakra-ui/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import throttle from 'lodash/throttle'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PdfViewer = ({ url = '' }) => {
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1) //setting 1 to show fisrt page
  const pdfWrapper = useRef<LegacyRef<HTMLDivElement>>(null)
  const [initialWidth, setInitialWidth] = useState(1000)

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current?.getBoundingClientRect().width)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', throttle(setPdfSize, 3000))
    setPdfSize()
    return () => {
      window.removeEventListener('resize', throttle(setPdfSize, 3000))
    }
  }, [])

  const onDocumentLoadSuccess = ({ numPages = 0 }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  const previousPage = () => {
    changePage(-1)
  }

  const nextPage = () => {
    changePage(1)
  }

  return (
    <VStack width="100%">
      <Box ref={pdfWrapper as any} width="100%" maxW={1000}>
        <Document
          file={url}
          onSourceSuccess={() => setNumPages(0)}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<></>}
        >
          <Page pageNumber={pageNumber} width={initialWidth} renderMode="svg" />
        </Document>
      </Box>
      {numPages > 0 ? (
        <>
          <Text fontWeight={600}>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </Text>
          <HStack>
            <Button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              mr={5}
              leftIcon={<FiChevronLeft />}
            >
              Previous
            </Button>
            <Button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              ml={5}
              rightIcon={<FiChevronRight />}
            >
              Next
            </Button>
          </HStack>
        </>
      ) : (
        <Box position="absolute" top="30%">
          <CircularProgress isIndeterminate color="gray.900" />
        </Box>
      )}
    </VStack>
  )
}

export default PdfViewer
