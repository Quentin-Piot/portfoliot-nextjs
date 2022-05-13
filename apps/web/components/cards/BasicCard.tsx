import { Box, Center, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface IBasicCardProps {
  categorie: string
  subtitle: string
  text: string
}

const BasicCard: React.FC<IBasicCardProps> = ({ categorie, subtitle, text }) => {
  return (
    <Center py={6}>
      <Box
        w={'full'}
        maxW="900px"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Stack>
          <Text
            color={'gray.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {categorie}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {subtitle}
          </Heading>
          <Text color={'gray.500'}>{text}</Text>
        </Stack>
      </Box>
    </Center>
  )
}

export default BasicCard
