import React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.common.black};
`

export const SafeAreaContainer: React.FC<any> = ({ children, style }) => {
  return <SafeArea style={style}>{children}</SafeArea>
}
