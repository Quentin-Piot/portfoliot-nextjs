import React, { useEffect, useState } from 'react'
import {
  Box,
  Drawer,
  DrawerContent,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import Sidebar from '../components/navbar/Sidebar'
import MobileNavbar from '../components/navbar/MobileNavbar'
import styles from './MainLayout.module.css'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])
  return (
    <Box flex={1} bg={useColorModeValue('gray.100', 'gray.900')}>
      <Box minH={{ base: 'calc(100vh - 60px)', md: 'calc(100vh - 25px)' }} position="relative">
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
        <Box ml={{ base: 0, md: 60 }} height="100%" position={'relative'} bgColor={'transparent'}>
          {/*{hasMounted && <DisplacementSphere />}*/}

          <div className={styles.container}>{children}</div>
        </Box>
      </Box>
      <Text
        textAlign={{ base: 'center', md: 'right' }}
        bg={useColorModeValue('grey.100', 'gray.800')}
        color={useColorModeValue('grey.800', 'gray.100')}
        pr={5}
        fontFamily="monospace"
      >
        Built using Typescript, React, Next.js, ChakraUI, Turborepo, yarn workspaces, Three.js, ...
      </Text>
    </Box>
  )
}

export default MainLayout
