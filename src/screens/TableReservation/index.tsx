import React from 'react'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import { Box, Button, Header, Text, CalendarModule } from 'components'
import { SafeAreaContainer } from 'containers'
import Background from './components/Background'
import SliderContainer from './components/SliderContainer'
import TimeSelect from './components/TimeSelect'
import { NavigationProps } from 'config/routes'

const Content = styled(Box)`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-top: 100px;
`

export const TableReservation = () => {
  const navigation = useNavigation<NavigationProps>()

  const onSubmit = async () => {
    try {
      const eventId = await CalendarModule.createCalendarEvent(
        'Maksym',
        4,
        '2022-08-24T18:30:00.000Z',
      )
      console.log(`Created a new event with id ${eventId}`)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <SafeAreaContainer>
      <Header />
      <Background />
      <Content
        paddingHorizontal={{ smallPhone: 's', phone: 'm', tablet: 'xxl' }}
        paddingBottom={{ smallPhone: 'm', phone: 'l', tablet: 'xxl' }}
      >
        <Text variant='h1' style={{ textAlign: 'center' }}>
          How many of you will there be?
        </Text>
        <Text margin={'xs'} variant='h4'>
          Lorem ipsum dolor sit amet
        </Text>
        <SliderContainer />
        <Box marginTop='xxl'>
          <Text variant='h3'>What time?</Text>
        </Box>
        <TimeSelect />
        <Box style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Button
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
          >
            <Text variant='body1' color='p2' style={{ textDecorationLine: 'underline' }}>
              Back
            </Text>
          </Button>
        </Box>
      </Content>
    </SafeAreaContainer>
  )
}
