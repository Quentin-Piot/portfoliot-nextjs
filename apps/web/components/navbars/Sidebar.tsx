import React from 'react'
import { Box, BoxProps, CloseButton, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi'
import { IconType } from 'react-icons'
import NavItem from './NavItem'

export interface LinkItemProps {
  name: string
  icon: IconType
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Experience', icon: FiTrendingUp },
  { name: 'Projects', icon: FiCompass },
  { name: 'Education', icon: FiStar },
  { name: 'About', icon: FiSettings },
]

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
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
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Quentin Piot
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default Sidebar
