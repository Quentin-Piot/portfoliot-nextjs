import type { NextPage } from 'next'
import Head from 'next/head'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import React from 'react'
import { FaSchool } from 'react-icons/fa'
import BasicCard from 'components/cards/BasicCard'
import { ListItem, Text, UnorderedList, useColorModeValue, VStack } from '@chakra-ui/react'

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
const Education: NextPage = () => {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>

      <VerticalTimeline
        lineColor={useColorModeValue(
          'var(--chakra-colors-gray-900)',
          'var(--chakra-colors-gray-100)'
        )}
      >
        <CustomChakraVerticalElement date="2016-2021">
          <BasicCard subtitle="UTT" categorie="Master of Engineering">
            <VStack color={useColorModeValue('gray.900', 'gray.100')} textAlign="left">
              <Text color={useColorModeValue('gray.700', 'gray.300')}>
                Université de Technologie de Troyes
              </Text>
              <Text style={{ fontWeight: 700 }}>Followed courses</Text>
              <UnorderedList>
                <ListItem>
                  <strong>CS489</strong> : Computer ethics and social issues
                </ListItem>
                <ListItem>
                  <strong>CS442</strong> : Mobile computing, applications and networking
                </ListItem>
                <ListItem>
                  <strong>CS484</strong> : Introduction to Computer Vision
                </ListItem>
                <ListItem>
                  <strong>HS003</strong> : Introduction to Korean
                </ListItem>
              </UnorderedList>
            </VStack>
          </BasicCard>
        </CustomChakraVerticalElement>
        <CustomChakraVerticalElement date="2019">
          <BasicCard subtitle="KAIST" categorie="Exchange semester">
            <VStack color={useColorModeValue('gray.900', 'gray.100')} textAlign="left">
              <Text color={useColorModeValue('gray.700', 'gray.300')}>
                Korea Advanced Institute of Science And Technology <br />
                (QS :<strong> #41</strong>)
              </Text>
              <Text style={{ fontWeight: 700 }}>Followed courses</Text>
              <UnorderedList>
                <ListItem>
                  <strong>CS489</strong> : Computer ethics and social issues
                </ListItem>
                <ListItem>
                  <strong>CS442</strong> : Mobile computing, applications and networking
                </ListItem>
                <ListItem>
                  <strong>CS484</strong> : Introduction to Computer Vision
                </ListItem>
                <ListItem>
                  <strong>HS003</strong> : Introduction to Korean
                </ListItem>
              </UnorderedList>
            </VStack>
          </BasicCard>
        </CustomChakraVerticalElement>
      </VerticalTimeline>
    </>
  )
}

export default Education
