import React from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from 'config/themes'
import Layout from 'containers/Layout'

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout />
    </ThemeProvider>
  )
}

export default App
