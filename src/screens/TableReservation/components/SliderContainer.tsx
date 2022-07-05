import React, { useState } from 'react'
import styled from 'styled-components'
import { Slider } from '@miblanchard/react-native-slider'

import { Box, Text } from 'components'

const ThumbContainer = styled(Box)`
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 36px;
  background: #191919;
  border: 2px solid #cecece;
  elevation: 5;
  border-radius: 23px;
`

const Wrapper = styled(Box)`
  max-width: 343px;
  width: 100%;
  align-items: stretch;
`

const trackStyle = {
  backgroundColor: '#979797',
  height: 1,
}

interface ThumbProps {
  children: React.ReactNode
}

const Thumb = ({ children }: ThumbProps) => {
  return (
    <ThumbContainer>
      <Text variant='h6'>{children}</Text>
    </ThumbContainer>
  )
}

const SliderContainer = () => {
  const [value, setValue] = useState<number | number[]>(2)

  return (
    <Wrapper marginTop='xxl'>
      <Slider
        value={value}
        onValueChange={setValue}
        minimumValue={1}
        maximumValue={5}
        step={1}
        renderThumbComponent={() => <Thumb children={value} />}
        trackStyle={trackStyle}
      />
    </Wrapper>
  )
}

export default SliderContainer
