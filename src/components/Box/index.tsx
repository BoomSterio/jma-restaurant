import React, { useContext } from 'react'
import { View, Dimensions, ViewProps } from 'react-native'
import { DefaultTheme, ThemeContext } from 'styled-components'

import { BackgroundColorType, BreakpointsType, SpacingType } from 'config/themes'

interface Breakpoint {
  smallPhone: keyof SpacingType
  phone: keyof SpacingType
  tablet: keyof SpacingType
}

interface BoxProps extends ViewProps {
  backgroundColor?: keyof BackgroundColorType
  margin?: keyof SpacingType
  marginVertical?: keyof SpacingType
  marginHorizontal?: keyof SpacingType
  marginLeft?: keyof SpacingType
  marginRight?: keyof SpacingType
  marginTop?: keyof SpacingType
  marginBottom?: keyof SpacingType
  padding?: keyof SpacingType
  paddingVertical?: keyof SpacingType
  paddingHorizontal?: keyof SpacingType
  paddingTop?: keyof SpacingType
  paddingBottom?: keyof SpacingType
  paddingLeft?: keyof SpacingType
  paddingRight?: keyof SpacingType
}

interface GetBreakpointForScreenSizeProps {
  theme: DefaultTheme
  dimensions: { width: number; height: number }
}

interface GetResponsiveValueProps {
  value: keyof SpacingType | Breakpoint
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

export const Box = ({
  style,
  backgroundColor,
  padding = 'none',
  margin = 'none',
  marginVertical = 'none',
  marginHorizontal = 'none',
  marginLeft = 'none',
  marginRight = 'none',
  marginTop = 'none',
  marginBottom = 'none',
  paddingVertical = 'none',
  paddingHorizontal = 'none',
  paddingTop = 'none',
  paddingBottom = 'none',
  paddingLeft = 'none',
  paddingRight = 'none',
  ...rest
}: BoxProps) => {
  const theme = useContext(ThemeContext)
  const dimensions = Dimensions.get('window')

  return (
    <View
      style={[
        {
          margin: theme.spacing[getResponsiveValue({ value: margin, dimensions, theme })],
          marginVertical:
            theme.spacing[getResponsiveValue({ value: marginVertical, dimensions, theme })],
          marginHorizontal:
            theme.spacing[getResponsiveValue({ value: marginHorizontal, dimensions, theme })],
          marginLeft: theme.spacing[getResponsiveValue({ value: marginLeft, dimensions, theme })],
          marginRight: theme.spacing[getResponsiveValue({ value: marginRight, dimensions, theme })],
          marginTop: theme.spacing[getResponsiveValue({ value: marginTop, dimensions, theme })],
          marginBottom:
            theme.spacing[getResponsiveValue({ value: marginBottom, dimensions, theme })],
          padding: theme.spacing[getResponsiveValue({ value: padding, dimensions, theme })],
          paddingVertical:
            theme.spacing[getResponsiveValue({ value: paddingVertical, dimensions, theme })],
          paddingHorizontal:
            theme.spacing[getResponsiveValue({ value: paddingHorizontal, dimensions, theme })],
          paddingTop: theme.spacing[getResponsiveValue({ value: paddingTop, dimensions, theme })],
          paddingBottom:
            theme.spacing[getResponsiveValue({ value: paddingBottom, dimensions, theme })],
          paddingLeft: theme.spacing[getResponsiveValue({ value: paddingLeft, dimensions, theme })],
          paddingRight:
            theme.spacing[getResponsiveValue({ value: paddingRight, dimensions, theme })],
          backgroundColor: backgroundColor ? theme.palette.background[backgroundColor] : undefined,
        },
        style,
      ]}
      {...rest}
    />
  )
}
