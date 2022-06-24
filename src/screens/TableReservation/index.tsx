import React from 'react'
import styled from 'styled-components'

import { Box, Header, Text } from 'components'
import { SafeAreaContainer } from 'containers'
import Background from './components/Background'
import SliderContainer from './components/SliderContainer'

const Content = styled(Box)`
  width: 100%;
  align-items: center;
  margin-top: 100px;
`

export const TableReservation = () => {
  return (
    <SafeAreaContainer>
      <Header />
      <Background />
      <Content paddingHorizontal={{ smallPhone: 's', phone: 'm', tablet: 'xxl' }}>
        <Text variant='h1' style={{ textAlign: 'center' }}>
          How many of you will there be?
        </Text>
        <Text margin={'xs'} variant='h4'>
          Lorem ipsum dolor sit amet
        </Text>
        <SliderContainer />
      </Content>
    </SafeAreaContainer>
  )
}
