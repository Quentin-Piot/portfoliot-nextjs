import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

interface IBasicCardProps {
  categorie: string
  subtitle: string
  logo?: string
  content?: React.ReactNode
  children?: React.ReactNode
}

const BasicCard: React.FC<IBasicCardProps> = ({ children, categorie, subtitle, content, logo }) => {
  return (
    <Center>
      <Box
        w={'full'}
        maxW="900px"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={4}
        overflow={'hidden'}
      >
        <Stack>
          <HStack justifyContent="space-between">
            <Stack>
              <Text
                style={{ color: useColorModeValue('gray.500', 'gray.100') }}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
              >
                {categorie}
              </Text>
              <Heading
                style={{ color: useColorModeValue('gray.900', 'white') }}
                fontSize={'2xl'}
                fontFamily={'body'}
              >
                {subtitle}
              </Heading>
            </Stack>
            {logo && <Image ml="auto" height={20} src={logo} alt={'logo card'} rounded="md" />}
          </HStack>
          {children} {content && <Text color={'gray.500'}>{content}</Text>}
        </Stack>
      </Box>
    </Center>
  )
}

export default BasicCard
