export const colors = {
  white: '#FFFFFF',
  black: '#1E1E1E',

  red: '#DD4747',
  green: '#24BE52',
  light: '#F8F8F8',
  lightGrey: '#BEBEBE',
  grey: '#9C9C9C',
  darkGrey: '#434343',
  dark: '#404040',
}

export const darkTheme = {
  palette: {
    text: {
      primary: colors.white,
      secondary: colors.dark,
      p1: colors.darkGrey,
      p2: colors.grey,
      p3: colors.lightGrey,
      p4: colors.light,
    },
    background: {
      success: colors.green,
      error: colors.red,
      app: colors.black,
      default: colors.darkGrey,
    },
    common: {
      white: colors.white,
      black: colors.black,
    },
  },
  breakpoints: {
    smallPhone: 0,
    phone: 321,
    tablet: 768,
  },
  spacing: {
    none: undefined,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 28,
    xxl: 40,
  },
}

export type PaletteType = typeof darkTheme.palette
export type SpacingType = typeof darkTheme.spacing
export type BreakpointsType = typeof darkTheme.breakpoints
export type TextColorType = typeof darkTheme.palette.text
export type BackgroundColorType = typeof darkTheme.palette.background
