import 'styled-components'

import { GradientsType, PaletteType, SpacingType } from 'config/themes'
import { FontType } from 'config/fonts'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: PaletteType
    gradients: GradientsType
    spacing: SpacingType
    fonts: FontType
  }
}
