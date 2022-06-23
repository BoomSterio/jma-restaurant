import React from 'react'
import styled from 'styled-components'

import { Box, Text } from 'components'
import ScanIcon from './ScanIcon'

const Wrapper = styled(Box)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding-vertical: ${({ theme }) => theme.spacing.xl}px;
  padding-horizontal: ${({ theme }) => theme.spacing.m}px;
`
const Actions = styled(Box)`
  flex-direction: row;
  align-items: center;
`

const Greetings = styled(Box)`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  align-items: center;
  justify-content: flex-end;
`

const Header = () => {
  return (
    <Wrapper>
      <Text variant='logo'>PDF™</Text>
      <Greetings paddingBottom='xl'>
        <Text variant='h6' textTransform='uppercase'>
          Hi Anna
        </Text>
      </Greetings>
      <Actions>
        <ScanIcon />
      </Actions>
    </Wrapper>
  )
}

export default Header
