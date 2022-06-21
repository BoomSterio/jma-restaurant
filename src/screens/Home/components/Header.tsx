import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import { Text } from 'components'
import ScanIcon from './ScanIcon'

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding-vertical: ${({ theme }) => theme.spacing.xl}px;
  padding-horizontal: ${({ theme }) => theme.spacing.m}px;
`
const Actions = styled(View)`
  flex-direction: row;
  align-items: center;
`

const Header = () => {
  return (
    <Wrapper>
      <Text variant='logo'>PDF™</Text>
      <Text variant='h6' style={{ alignSelf: 'flex-end' }}>
        HI ANNA
      </Text>
      <Actions>
        <ScanIcon />
        {/* <ScanIcon /> */}
      </Actions>
    </Wrapper>
  )
}

export default Header
