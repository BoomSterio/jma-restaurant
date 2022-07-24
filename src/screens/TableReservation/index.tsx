import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'

import { Box, Button, Header, Text } from 'components'
import { SafeAreaContainer } from 'containers'
import { NavigationProps } from 'config/routes'

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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const MIN_DATE = moment().add(20, 'm').toDate()

export const TableReservation = () => {
  const [date, setDate] = useState(MIN_DATE)
  const [visitors, setVisitors] = useState<number | number[]>(2)

  const navigation = useNavigation<NavigationProps>()

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
        <Box style={{ flex: 1, width: '100%', justifyContent: 'flex-end' }}>
          <ActionsWrapper>
            <Button
              onPress={() => navigation.goBack()}
              hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
            >
              <Text variant='body1' color='p2' style={{ textDecorationLine: 'underline' }}>
                Back
              </Text>
            </Button>
            <Button
              onPress={() => navigation.goBack()}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Icon name='check-circle' size={32} color='green' />
            </Button>
          </ActionsWrapper>
        </Box>
      </Content>
    </SafeAreaContainer>
  )
}
