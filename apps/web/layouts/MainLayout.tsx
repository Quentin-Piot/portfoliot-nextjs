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
    <Box flex={1} bg="red">
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
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
      {children}
    </Box>
  )
}

export default MainLayout
