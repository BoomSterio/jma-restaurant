import React from 'react'
import styled from 'styled-components'

import { Box, BoxProps, Text } from 'components'
import ScanIcon from './components/ScanIcon'

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

const Center = styled(Box)`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: ${({ theme }) => theme.spacing.xl}px;
  right: 0px;
  flex-direction: row;
  justify-content: center;
`

export const Header = ({ children }: BoxProps) => {
  return (
    <Wrapper>
      <Text variant='logo'>PDF™</Text>
      <Center>{children}</Center>
      <Actions>
        <ScanIcon />
      </Actions>
    </Wrapper>
  )
}
