import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.palette.common.black};
  flex: 1;
`

const Layout = () => {
  return (
    <Wrapper>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View />
      </ScrollView>
    </Wrapper>
  )
}

export default Layout
