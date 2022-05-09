import React from 'react'
import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../components/Navbars/Sidebar'
import MobileNavbar from '../components/Navbars/MobileNavbar'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box flex={1} bg={useColorModeValue('gray.100', 'gray.900')}>
      <Box minH={{ base: 'calc(100vh - 50px)', md: 'calc(100vh - 25px)' }}>
        <Sidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNavbar onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
      <Box
        textAlign={{ base: 'center', md: 'right' }}
        minH={{ base: '45px', md: '25px' }}
        bg={useColorModeValue('grey.100', 'gray.800')}
        color={useColorModeValue('grey.800', 'gray.100')}
        pr={5}
      >
        Built using Typescript, React, Next.js,ChakraUI, turborepo, yarn workspaces, etc.
      </Box>
    </Box>
  )
}

export default MainLayout
