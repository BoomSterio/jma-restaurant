import React from 'react'
import styled from 'styled-components'
import { View } from 'react-native'

import { SafeAreaContainer } from 'containers'
import { MemberCard } from 'components'

import Background from './components/Background'
import Header from './components/Header'
import Title from './components/Title'
import ReserveTable from './components/ReserveTable'

const ItemsWrapper = styled(View)`
  width: 100%;
  align-items: center;
  padding-horizontal: 12px;
`

export const Home = () => {
  return (
    <SafeAreaContainer>
      <Background />
      <Header />
      <Title />
      <ItemsWrapper>
        <MemberCard />
        <ReserveTable />
      </ItemsWrapper>
    </SafeAreaContainer>
  )
}
