import React from 'react'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native'

import { Box } from 'components'
import { BlurOval } from 'assets/images'

const Container = styled(Box)`
  position: absolute;
  height: 154px;
  left: 9%;
  right: 9%;
  top: 194px;
  opacity: 0.79;
`

const BackgroundGradient1 = styled(Box)`
  position: absolute;
  width: 100%;
  height: 358px;
  left: 0px;
  top: 154px;
`

const BackgroundGradient2 = styled(Box)`
  position: absolute;
  width: 100%;
  height: 286px;
  left: 0px;
  top: 226px;
`

const Background = () => {
  return (
    <>
      <BackgroundGradient1>
        <LinearGradient
          locations={[0, 1]}
          colors={['rgba(0, 0, 0, 0.0001)', '#1E1E1E']}
          style={{ flex: 1 }}
        />
      </BackgroundGradient1>
      <BackgroundGradient2>
        <LinearGradient
          locations={[0, 1]}
          colors={['rgba(0, 0, 0, 0.0001)', '#1E1E1E']}
          style={{ flex: 1 }}
        />
      </BackgroundGradient2>
      <Container>
        <Image
          source={BlurOval}
          style={{
            flex: 1,
            alignSelf: 'stretch',
            width: undefined,
            height: undefined,
          }}
        />
      </Container>
    </>
  )
}

export default Background
