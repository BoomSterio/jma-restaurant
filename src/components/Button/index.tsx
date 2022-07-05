import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Box, BoxProps } from 'components/Box'

interface ButtonProps extends BoxProps {
  hitSlop?: TouchableOpacityProps['hitSlop']
  onPress: TouchableOpacityProps['onPress']
}

export const Button = ({ hitSlop, onPress, children, ...props }: ButtonProps) => {
  return (
    <Box {...props}>
      <TouchableOpacity onPress={onPress} hitSlop={hitSlop}>
        {children}
      </TouchableOpacity>
    </Box>
  )
}
