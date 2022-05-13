import React from 'react'
import { Box, Center, Heading, HStack, IconButton, Image, Stack, VStack } from '@chakra-ui/react'
import { AiFillLinkedin } from 'react-icons/ai'
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
            text={t('pages.homepage.cards.aboutMe.text')}
          />
        </Stack>
      </HStack>

      <Heading fontSize={'2xl'} pt={10}>
        {t('common.externalResources')}
      </Heading>
      <Center>
        <IconButton
          onClick={() =>
            window.open('https://www.linkedin.com/in/quentin-piot/', '_blank')?.focus()
          }
          variant="ghost"
          aria-label="open linkedin"
          icon={<AiFillLinkedin size={40} />}
        />
      </Center>
    </VStack>
  )
}

export default Homepage
