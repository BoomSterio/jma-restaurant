import React from "react"
import { Image, View } from "react-native"
import styled from "styled-components"
import LinearGradient from 'react-native-linear-gradient'

import { HomeBackground } from "assets/images"
import { SafeAreaContainer } from "containers"
import { Text } from "components"

const BackgroundImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 512px;
  top: 1px;
  z-index: -10;
  resize-mode: cover;
  align-self: center;
`

const BackgroundGradient = styled(View)`
  position: absolute;
  width: 100%;
  height: 264px;
  top: 257px;
  z-index: -9;
`

export const Home = () => {
  return (
    <SafeAreaContainer>
      <BackgroundImage source={HomeBackground} />
      <BackgroundGradient>
        <LinearGradient colors={['rgba(0, 0, 0, 0.0001)', '#1A1A1A']}/>
      </BackgroundGradient>
      <Text>asdasd</Text>
    </SafeAreaContainer>
  )
}
