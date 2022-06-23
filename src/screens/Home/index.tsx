import React from 'react'
import styled from 'styled-components'

import { SafeAreaContainer } from 'containers'
import { Box, MemberCard } from 'components'

import Background from './components/Background'
import Header from './components/Header'
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
      <Header />

      <Content paddingHorizontal={{ smallPhone: 'none', phone: 's', tablet: 'l' }}>
        <Title />
        <MemberCard />
        <ReserveTable />
      </Content>
    </SafeAreaContainer>
  )
}
