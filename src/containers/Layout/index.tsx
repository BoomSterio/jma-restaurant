import React from 'react'
import { StatusBar, View } from 'react-native'
import styled from 'styled-components'

import { Routes } from 'providers/Navigation'

const Wrapper = styled(View)`
  background-color: ${({ theme }) => theme.palette.common.black};
  flex: 1;
`

const Layout = () => {
  return (
    <Wrapper>
      <StatusBar barStyle={'light-content'} />
      <Routes />
    </Wrapper>
  )
}

export default Layout
