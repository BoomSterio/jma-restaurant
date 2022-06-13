import React from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

import { HomeBackground } from 'assets/images'

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

const BackgroundLine = styled(View)`
  position: absolute;
  width: 520px;
  height: 10px;
  left: 0px;
  top: 441px;
  z-index: -8;
`

const BackgroundMask1 = styled(View)`
  position: absolute;
  width: 520px;
  height: 358px;
  left: 0px;
  top: 154px;
  z-index: -9;

  mix-blend-mode: normal;
  opacity: 0.21;
`

const BackgroundMask2 = styled(View)`
  position: absolute;
  width: 518.99px;
  height: 286px;
  left: 0px;
  top: 226px;
  z-index: -9;
`

const Background = () => {
  return (
    <>
      <BackgroundImage source={HomeBackground} />
      <BackgroundGradient>
        <LinearGradient
          locations={[0, 1]}
          colors={['rgba(0, 0, 0, 0.0001)', '#1E1E1E']}
          style={{ flex: 1 }}
        />
      </BackgroundGradient>
      <BackgroundLine>
        <LinearGradient
          start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 0.5 }}
          colors={['rgba(204, 146, 93, 1)', 'rgba(112, 77, 52, 1)']}
          style={{ flex: 1 }}
        />
      </BackgroundLine>
      <BackgroundMask1>
        <LinearGradient colors={['rgba(0, 0, 0, 0.0001)', '#1E1E1E']} style={{ flex: 1 }} />
      </BackgroundMask1>
      <BackgroundMask2>
        <LinearGradient colors={['rgba(0, 0, 0, 0.0001)', '#1E1E1E']} style={{ flex: 1 }} />
      </BackgroundMask2>
    </>
  )
}

export default Background