import React from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from 'config/themes'
import { fonts } from 'config/fonts'
import Layout from 'containers/Layout'
import LocaleProvider from 'providers/Locale'

const App = () => {
  return (
    <ThemeProvider theme={{...darkTheme, fonts}}>
      <LocaleProvider>
        <Layout />
      </LocaleProvider>
    </ThemeProvider>
  )
}

export default App
