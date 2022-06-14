import 'styled-components'

import { GradientsType, PaletteType, SpacingType } from 'config/themes'
import { FontType } from 'config/fonts'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: PaletteType
    spacing: SpacingType
    fonts: FontType
  }
}
