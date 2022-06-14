import React, { useContext } from 'react'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'
import { ThemeContext } from 'styled-components'

import { FontType } from 'config/fonts'
import { SpacingType, TextColorType } from 'config/themes'

interface TextProps extends RNTextProps {
  variant?: keyof FontType
  color?: keyof TextColorType
  margin?: keyof SpacingType
  padding?: keyof SpacingType
}

export const Text = ({
  style,
  margin,
  padding,
  variant = 'h2',
  color = 'primary',
  ...rest
}: TextProps) => {
  const theme = useContext(ThemeContext)

  return (
    <RNText
      style={[
        {
          padding: padding ? theme.spacing[padding] : 0,
          margin: margin ? theme.spacing[margin] : 0,
          color: theme.palette.text[color],
          ...theme.fonts[variant],
        },
        style,
      ]}
      {...rest}
    />
  )
}
