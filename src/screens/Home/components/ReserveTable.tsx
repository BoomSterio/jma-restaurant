import React from 'react'
import styled from 'styled-components'
import { Image, TouchableOpacity } from 'react-native'

import { Box, Text } from 'components'
import { ReservationIcon } from 'assets/icons'

const Button = styled(Box)`
  width: 100%;
  max-height: 103px;
  border-radius: ${({ theme }) => theme.spacing.m}px;
`

const Content = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
`

const ReserveTable = () => {
  return (
    <Button marginVertical='xxl' paddingTop='l' paddingHorizontal='l' backgroundColor='default'>
      <Content hitSlop={{ top: 48, bottom: 24, left: 32, right: 32 }}>
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
    </Button>
  )
}

export default ReserveTable