import React from 'react'
import styled from 'styled-components'

import { Box, Text } from 'components'
import { TouchableOpacity } from 'react-native'

const Button = styled(Box)`
  width: 100%;
  max-height: 103px;
  border-radius: ${({ theme }) => theme.spacing.m}px;
`

const ReserveTable = () => {
  return (
    <Button marginVertical='xxl' paddingTop='l' paddingHorizontal='l' backgroundColor='default'>
      <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 10, right: 10 }}>
        <Text variant='h5' textTransform='uppercase'>
          Reserve a table
        </Text>
      </TouchableOpacity>
    </Button>
  )
}

export default ReserveTable
