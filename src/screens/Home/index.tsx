import React from 'react'
import styled from 'styled-components'

import { SafeAreaContainer } from 'containers'
import { Box, MemberCard, Header, Text } from 'components'

import Background from './components/Background'
import Title from './components/Title'
import ReserveTable from './components/ReserveTable'

const Content = styled(Box)`
  width: 100%;
  align-items: center;
`

export const Home = () => {
  return (
    <SafeAreaContainer>
      <Background />
      <Header>
        <Text variant='h6' textTransform='uppercase' style={{ alignSelf: 'flex-end' }}>
          Hi Anna
        </Text>
      </Header>

      <Content paddingHorizontal={{ smallPhone: 'none', phone: 's', tablet: 'l' }}>
        <Title />
        <MemberCard type='platinum' />
        <ReserveTable />
      </Content>
    </SafeAreaContainer>
  )
}
