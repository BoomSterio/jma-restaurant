import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Box, Button, Text } from 'components'

const Wrapper = styled(Box)`
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  width: 100%;
`

const NextButton = styled(Button)`
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 25px;
  border: 2px solid #979797;
  margin-bottom: 46px;
`

const Title = () => {
  const intl = useIntl()

  return (
    <Wrapper>
      <Text
        variant='h1'
        fontSize={{ smallPhone: 'h3', phone: 'h2', tablet: 'h1' }}
        style={{ textAlign: 'center' }}
      >
        {intl.formatMessage({ id: 'homePage.title' })}
      </Text>
      <Text margin={'m'} variant='h4'>
        {intl.formatMessage({ id: 'homePage.description' })}
      </Text>
      <NextButton onPress={() => {}} hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}>
        <Icon name='arrow-right' size={20} color='#fff' light />
      </NextButton>
    </Wrapper>
  )
}

export default Title
