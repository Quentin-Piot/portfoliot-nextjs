import React from 'react'
import { Box, Center, HStack, Image, Stack, VStack } from '@chakra-ui/react'
import BasicCard from 'components/cards/BasicCard'
import { useTranslation } from 'react-i18next'

const Homepage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <VStack>
      <HStack minHeight={200} width="100%" flexDirection={{ base: 'column', md: 'row' }} mb={30}>
        <Center flex={1} height={200}>
          <Box>
            <Image src="/images/me.jpg" borderRadius="full" height={200} alt={'photo of me'} />
          </Box>
        </Center>
        <Stack flex={2} height="100%">
          <BasicCard
            categorie={t('common.aboutMe')}
            subtitle={t('pages.homepage.cards.aboutMe.softwareEngineer')}
            content={t('pages.homepage.cards.aboutMe.text')}
          />
        </Stack>
      </HStack>
    </VStack>
  )
}

export default Homepage
