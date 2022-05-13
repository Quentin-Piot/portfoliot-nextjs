import React, { useMemo } from 'react'
import { Box, BoxProps, CloseButton, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi'
import { IconType } from 'react-icons'
import NavItem from './NavItem'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export interface ILinkItemProps {
  name: string
  icon: IconType
  route: string
}

interface ISidebarProps extends BoxProps {
  onClose: () => void
}

const Sidebar: React.FC<ISidebarProps> = ({ onClose, ...rest }) => {
  const router = useRouter()
  const { t } = useTranslation()

  const linkItems = useMemo<Array<ILinkItemProps>>(
    () => [
      { name: t('components.navbar.items.home'), icon: FiHome, route: '/' },
      { name: t('components.navbar.items.experience'), icon: FiTrendingUp, route: '/experience' },
      { name: t('components.navbar.items.projects'), icon: FiCompass, route: '/projects' },
      { name: t('components.navbar.items.education'), icon: FiStar, route: '/education' },
      { name: t('components.navbar.items.about'), icon: FiSettings, route: '/about' },
    ],
    [t]
  )
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="5" justifyContent="space-between">
        <Heading fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Quentin Piot
        </Heading>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          route={link.route}
          active={link.route === router.asPath}
          suppressHydrationWarning
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default Sidebar
