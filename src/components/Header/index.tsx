import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import styled from 'styled-components'

import { Box, BoxProps } from '../../components/Box'
import { Text } from '../../components/Text'
import ListIcon from './components/ListIcon'

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
  const navigation = useNavigation()

  return (
    <Wrapper>
      <Text variant='logo'>PDF™</Text>
      <Center>{children}</Center>
      <Actions>
        <ListIcon onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
      </Actions>
    </Wrapper>
  )
}
