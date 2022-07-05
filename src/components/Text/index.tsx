import React, { useContext } from 'react'
import { Dimensions, Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native'
import { DefaultTheme, ThemeContext } from 'styled-components'

import { FontType } from 'config/fonts'
import { BreakpointsType, SpacingType, TextColorType } from 'config/themes'

interface Breakpoint {
  smallPhone: keyof FontType
  phone: keyof FontType
  tablet: keyof FontType
}

interface TextProps extends RNTextProps {
  variant?: keyof FontType
  color?: keyof TextColorType
  margin?: keyof SpacingType
  padding?: keyof SpacingType
  fontSize?: keyof FontType | Breakpoint
  textTransform?: TextStyle['textTransform']
  letterSpacing?: TextStyle['letterSpacing']
}

interface GetBreakpointForScreenSizeProps {
  theme: DefaultTheme
  dimensions: { width: number; height: number }
}

interface GetResponsiveValueProps {
  value: keyof FontType | Breakpoint
  theme: DefaultTheme
  dimensions: { width: number; height: number }
}

const getBreakpointForScreenSize = ({
  theme,
  dimensions,
}: GetBreakpointForScreenSizeProps): unknown => {
  const sortedBreakpoints = Object.entries(theme.breakpoints).sort((valA, valB) => {
    return valA[1] - valB[1]
  })

  return sortedBreakpoints.reduce((acc, [breakpoint, minWidth]) => {
    if (dimensions.width >= minWidth) {
      return breakpoint
    }
    return acc
  }, 'smallPhone')
}

const getResponsiveValue = ({ value, dimensions, theme }: GetResponsiveValueProps) => {
  if (typeof value === 'object') {
    return value[getBreakpointForScreenSize({ theme, dimensions }) as keyof BreakpointsType]
  }
  return value
}

export const Text = ({
  style,
  margin,
  padding,
  variant = 'h2',
  color = 'primary',
  fontSize,
  textTransform = 'none',
  letterSpacing,
  ...rest
}: TextProps) => {
  const theme = useContext(ThemeContext)
  const dimensions = Dimensions.get('window')

  return (
    <RNText
      style={[
        {
          ...theme.fonts[variant],
          padding: padding ? theme.spacing[padding] : 0,
          margin: margin ? theme.spacing[margin] : 0,
          color: theme.palette.text[color],
          fontSize: fontSize
            ? theme.fonts[getResponsiveValue({ value: fontSize, theme, dimensions })].fontSize
            : theme.fonts[variant].fontSize,
          textTransform,
          letterSpacing,
        },
        style,
      ]}
      {...rest}
    />
  )
}
