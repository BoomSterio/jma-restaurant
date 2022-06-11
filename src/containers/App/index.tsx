import React from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from 'config/themes'
import { fonts } from 'config/fonts'
import Layout from 'containers/Layout'

const App = () => {
  return (
    <ThemeProvider theme={{...darkTheme, fonts}}>
      <Layout />
    </ThemeProvider>
  )
}

export default App
