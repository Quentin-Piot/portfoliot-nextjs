import React from 'react'
import { Box, BoxProps, CloseButton, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi'
import { IconType } from 'react-icons'
import NavItem from './NavItem'
import { useRouter } from 'next/router'

export interface LinkItemProps {
  name: string
  icon: IconType
  route: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, route: '/' },
  { name: 'Experience', icon: FiTrendingUp, route: '/experience' },
  { name: 'Projects', icon: FiCompass, route: '/projects' },
  { name: 'Education', icon: FiStar, route: '/education' },
  { name: 'About', icon: FiSettings, route: '/about' },
]

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter()
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
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          route={link.route}
          active={link.route === router.asPath}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default Sidebar
