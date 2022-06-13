export const sizes = {
  h1: 39.7,
  h2: 29.8,
  h3: 28,
  h4: 26,
  h5: 25,
  h6: 23,

  body1: 22.1,
  body2: 20,
  body3: 17,
  body4: 15,
  body5: 12.7,
}

export const fonts = {
  logo: {fontFamily: 'Rajdhani-Bold', fontSize: sizes.h3, lineHeight: 36, letterSpacing: 0.25},
  
  h1: {fontFamily: 'OpenSans-Bold', fontSize: sizes.h1, lineHeight: 44},
  h2: {fontFamily: 'OpenSans-Italic', fontSize: sizes.h2, lineHeight: 44},
  h3: {fontFamily: 'OpenSans-Bold', fontSize: sizes.h3, lineHeight: 38},
  h4: {fontFamily: 'CrimsonPro-LightItalic', fontSize: sizes.h4, lineHeight: 31},
  h5: {fontFamily: 'OpenSans-Bold', fontSize: sizes.h5, lineHeight: 34},
  h6: {fontFamily: 'OpenSans-Bold', fontSize: sizes.h6, lineHeight: 28},

  body1: {fontFamily: 'OpenSans-Bold', fontSize: sizes.body1, lineHeight: 18},
  body2: {fontFamily: 'CrimsonPro-LightItalic', fontSize: sizes.body2, lineHeight: 24},
  body3: {fontFamily: 'CrimsonPro-LightItalic', fontSize: sizes.body3, lineHeight: 23},
  body4: {fontFamily: 'OpenSans-Bold', fontSize: sizes.body4, lineHeight: 20},
  body5: {fontFamily: 'CrimsonPro-LightItalic', fontSize: sizes.body5, lineHeight: 20},
}

export type FontType = typeof fonts
