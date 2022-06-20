import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { useIntl } from 'react-intl'

import { Text } from 'components'

const Wrapper = styled(View)`
  align-items: center;
  margin-top: ${({theme}) => theme.spacing.xl}px;
  width: 100%;
`

const Title = () => {
  const intl = useIntl()

  return (
    <Wrapper>
      <Text variant='h1' style={{textAlign: 'center'}}>
        {intl.formatMessage({ id: 'homePage.title' })}
      </Text>
      <Text margin={'m'} variant='h4'>
        {intl.formatMessage({ id: 'homePage.description' })}
      </Text>
    </Wrapper>
  )
}

export default Title