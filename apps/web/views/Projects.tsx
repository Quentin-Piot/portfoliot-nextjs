import React, { useState, useEffect } from 'react'
import capsFirst from 'utils/textFormatting'

import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react'

import ChakraCarousel from 'components/caroussel/Caroussel'
import BasicCard from 'components/cards/BasicCard'

const Projects = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  const bgColor = useColorModeValue('gray.100', 'gray.900')
  const textColor = useColorModeValue('gray.900', 'gray.100')

  return (
    <ChakraCarousel gap={10}>
      {data.slice(5, 15).map((post, index) => (
        <Flex
          key={index}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
          justifyContent="space-between"
          flexDirection="column"
          overflow="hidden"
          color={textColor}
          bg={bgColor}
          rounded={5}
          flex={1}
          p={5}
        >
          <BasicCard subtitle={'eaadaz'} categorie={'rzad'} />
        </Flex>
      ))}
    </ChakraCarousel>
  )
}
export default Projects
