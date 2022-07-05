import React from 'react'
import styled from 'styled-components'

import { Box, Header, Text } from 'components'
import { SafeAreaContainer } from 'containers'
import Background from './components/Background'
import SliderContainer from './components/SliderContainer'
import TimeSelect from './components/TimeSelect'

const Content = styled(Box)`
  flex: 1;
  width: 100%;
  align-items: center;
  margin-top: 100px;
`

export const TableReservation = () => {
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
          <Text variant='body1' color='p2' style={{ textDecorationLine: 'underline' }}>
            Back
          </Text>
        </Box>
      </Content>
    </SafeAreaContainer>
  )
}
