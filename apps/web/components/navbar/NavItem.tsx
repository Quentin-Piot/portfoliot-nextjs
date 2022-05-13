import { Flex, FlexProps, Icon, useColorMode } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import React, { ReactText } from 'react'
import Link from 'next/link'

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
  route: string
  active: boolean
}

const NavItem = ({ icon, children, route, active, ...rest }: NavItemProps) => {
  const { colorMode } = useColorMode()
  const colors = {
    light: {
      background: { base: 'transparent', hover: 'gray.600', active: 'black' },
      color: { base: 'black', hover: 'white', active: 'white' },
    },
    dark: {
      background: { base: 'transparent', hover: 'gray.200', active: 'gray.100' },
      color: { base: 'white', hover: 'black', active: 'black' },
    },
  }
  return (
    <Link href={route} style={{ textDecoration: 'none' }}>
      <a>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          bg={colors[colorMode]['background'][active ? 'active' : 'base']}
          color={colors[colorMode]['color'][active ? 'active' : 'base']}
          _hover={{
            bg: colors[colorMode]['background'][active ? 'active' : 'hover'],
            color: colors[colorMode]['color'][active ? 'active' : 'hover'],
          }}
          {...rest}
        >
          {icon && <Icon mr="4" fontSize="16" as={icon} />}
          {children}
        </Flex>
      </a>
    </Link>
  )
}

export default NavItem
