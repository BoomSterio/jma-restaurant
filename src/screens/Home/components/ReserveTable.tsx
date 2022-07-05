import React from 'react'
import styled from 'styled-components'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Box, Button, Text } from 'components'
import { ReservationIcon } from 'assets/icons'
import { NavigationProps, Screens } from 'config/routes'

const Wrapper = styled(Button)`
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.m}px;
`

const Content = styled(Box)`
  flex-direction: row;
`

const ReserveTable = () => {
  const navigation = useNavigation<NavigationProps>()

  const handleClick = () => {
    navigation.push(Screens.tableReservation)
  }

  return (
    <Wrapper
      marginVertical='xxl'
      paddingBottom='xs'
      paddingTop='l'
      paddingHorizontal='l'
      backgroundColor='default'
      onPress={handleClick}
      hitSlop={{ top: 48, bottom: 24, left: 32, right: 32 }}
    >
      <Content>
        <Image source={ReservationIcon} />
        <Box marginLeft='m'>
          <Text variant='h5' textTransform='uppercase'>
            Reserve a table
          </Text>
          <Text variant='body2' color='p2'>
            book a table in the app and get points automatically
          </Text>
        </Box>
      </Content>
    </Wrapper>
  )
}

export default ReserveTable
