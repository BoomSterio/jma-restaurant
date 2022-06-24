import React from 'react'
import styled from 'styled-components'

import { Box, Header } from 'components'
import { SafeAreaContainer } from 'containers'
import Background from './components/Background'

const Content = styled(Box)`
  width: 100%;
  align-items: center;
`

export const TableReservation = () => {
  return (
    <SafeAreaContainer>
      <Header />
      <Background />
      <Content paddingHorizontal={{ smallPhone: 'none', phone: 's', tablet: 'l' }}></Content>
    </SafeAreaContainer>
  )
}
