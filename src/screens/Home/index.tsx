import React from 'react'

import { SafeAreaContainer } from 'containers'
import { Text } from 'components'

import Background from './components/Background'
import Header from './components/Header'

export const Home = () => {
  return (
    <SafeAreaContainer>
      <Background />
      <Header />
    </SafeAreaContainer>
  )
}
