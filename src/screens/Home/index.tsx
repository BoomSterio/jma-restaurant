import React from 'react'

import { SafeAreaContainer } from 'containers'

import Background from './components/Background'
import Header from './components/Header'
import Title from './components/Title'

export const Home = () => {
  return (
    <SafeAreaContainer>
      <Background />
      <Header />
      <Title />
    </SafeAreaContainer>
  )
}
