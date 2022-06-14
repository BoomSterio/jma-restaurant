import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import { Text } from 'components'

const Wrapper = styled(View)`
  align-items: center;
  margin-top: ${({theme}) => theme.spacing.xl}px;
  width: 100%;
`

const Title = () => {
  return (
    <Wrapper>
      <Text variant='h1' style={{textAlign: 'center'}}>
        Stockholm's best dining experiences
      </Text>
      <Text margin={'m'} variant='h4'>
        Lorem ipsum dolor sit amet
      </Text>
    </Wrapper>
  )
}

export default Title