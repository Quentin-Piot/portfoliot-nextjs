import React from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { AiFillLinkedin } from 'react-icons/ai'

const Homepage: React.FC = () => {
  return (
    <Box>
      <IconButton
        onClick={() => window.open('https://www.linkedin.com/in/quentin-piot/', '_blank')?.focus()}
        variant="ghost"
        aria-label="open linkedin"
        icon={<AiFillLinkedin size={32} />}
      />
    </Box>
  )
}

export default Homepage
