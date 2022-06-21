import 'styled-components'

import { BreakpointsType, PaletteType, SpacingType } from 'config/themes'
import { FontType } from 'config/fonts'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: PaletteType
    spacing: SpacingType
    breakpoints: BreakpointsType
    fonts: FontType
  }
}
