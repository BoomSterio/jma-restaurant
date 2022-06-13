import React, { useContext } from 'react'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'
import { ThemeContext } from 'styled-components'

import { FontType } from 'config/fonts'
import { TextColorType } from 'config/themes'

interface TextProps extends RNTextProps {
  variant?: keyof FontType
  color?: keyof TextColorType
}

export const Text = ({ style, variant = 'h2', color = 'primary', ...rest }: TextProps) => {
  const theme = useContext(ThemeContext)
  
  return (
    <RNText
      style={[
        {
          color: theme.palette.text[color],
          ...theme.fonts[variant],
        },
        style,
      ]}
      {...rest}
    />
  )
}
