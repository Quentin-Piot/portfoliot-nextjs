import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useColorModeValue } from '@chakra-ui/react'
import { FaSchool } from 'react-icons/fa'

interface ICustomChakraVerticalElementProps {
  children: React.ReactNode
  date: string
}

const CustomChakraVerticalElement: React.FC<ICustomChakraVerticalElementProps> = ({
  children,
  date = '2019',
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{
        background: useColorModeValue(
          'var(--chakra-colors-gray-300)',
          'var(--chakra-colors-gray-700)'
        ),
        color: useColorModeValue('var(--chakra-colors-gray-900)', 'var(--chakra-colors-gray-100)'),
      }}
      icon={<FaSchool />}
      contentStyle={{
        background: useColorModeValue(
          'var(--chakra-colors-gray-300)',
          'var(--chakra-colors-gray-700)'
        ),
        color: useColorModeValue('var(--chakra-colors-gray-900)', 'var(--chakra-colors-gray-100)'),
      }}
    >
      {children}
    </VerticalTimelineElement>
  )
}
export default CustomChakraVerticalElement
