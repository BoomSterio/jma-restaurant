import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

import { Box, Button, Header, Text } from 'components'
import { SafeAreaContainer } from 'containers'
import { NavigationProps } from 'config/routes'
import { useAsyncStorage } from 'hooks'

import Background from './components/Background'
import SliderContainer from './components/SliderContainer'
import DateTimeSelect from './components/DateTimeSelect'

const Content = styled(Box)`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-top: 100px;
`

const ActionsWrapper = styled(Box)`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

export interface ReservationType {
  id: string
  date: string
  name: string
  visitors: number
}

const MIN_DATE = moment().add(20, 'm').toDate()

export const TableReservation = () => {
  const { storedValue, setValue } = useAsyncStorage<ReservationType[]>('@reservations', [])
  const [date, setDate] = useState(MIN_DATE)
  const [visitors, setVisitors] = useState<number | number[]>(2)

  const navigation = useNavigation<NavigationProps>()

  const handleSubmit = async () => {
    const newReservation: ReservationType = {
      id: uuidv4(),
      name: 'Anna',
      date: moment(date).toISOString(),
      visitors: Array.isArray(visitors) ? visitors[0] : visitors,
    }
    console.log(newReservation)
    await setValue([...storedValue, newReservation])

    navigation.goBack()
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
        <SliderContainer value={visitors} setValue={setVisitors} />
        <Box marginTop='xxl'>
          <Text variant='h3'>What time?</Text>
        </Box>
        <DateTimeSelect date={date} setDate={setDate} minimumDate={MIN_DATE} />
        <ActionsWrapper>
          <Button
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
          >
            <Text variant='body1' color='p2' style={{ textDecorationLine: 'underline' }}>
              Back
            </Text>
          </Button>
          <Button onPress={handleSubmit} hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}>
            <Text variant='body1' color='primary'>
              Confirm
            </Text>
          </Button>
        </ActionsWrapper>
      </Content>
    </SafeAreaContainer>
  )
}
