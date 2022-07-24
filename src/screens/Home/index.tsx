import React, { useState } from 'react'
import styled from 'styled-components'

import { SafeAreaContainer } from 'containers'
import { Box, MemberCard, Header, Text, MemberCardType } from 'components'

import Background from './components/Background'
import Title from './components/Title'
import ReserveTable from './components/ReserveTable'
import { TouchableOpacity } from 'react-native'

const Content = styled(Box)`
  width: 100%;
  align-items: center;
`

export const Home = () => {
  const [cardType, setCardType] = useState<MemberCardType>('platinum')

  const toggleCardType = () => {
    setCardType((type) => {
      if (type === 'gold') {
        return 'platinum'
      }
      return 'gold'
    })
  }

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
        <TouchableOpacity onPress={toggleCardType}>
          <MemberCard type={cardType} />
        </TouchableOpacity>
        <ReserveTable />
      </Content>
    </SafeAreaContainer>
  )
}
