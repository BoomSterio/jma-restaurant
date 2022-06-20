import { View } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'


import Wrapper from '../components/Wrapper'
import { Text } from 'components'

const UpperLine = styled(View)`
  height: 2px;
  margin-right: ${({ theme }) => theme.spacing.l}px;
  opacity: 0.2;
`

const Divider = styled(View)`
  background-color: #979797;
  width: 2px;
  height: 100%;
  opacity: 0.18;
`

const Content = styled(View)`
  flex: 1;
  flex-direction: row;
`

const CardInfo = styled(View)`
  padding-left: 19px;
  padding-top: 16px;
  padding-bottom: ${({theme}) => theme.spacing.xxl}px;
`

const Heading = styled(View)`
  flex-direction: row;
  align-items: flex-end;
`

const GoldCard = () => {
  return (
    <Wrapper>
      <LinearGradient colors={['#393939', '#2A2A2A']} style={{ flex: 1 }}>
        <UpperLine>
          <LinearGradient
            colors={[
              'rgba(57, 57, 57, 1)',
              'rgba(200, 200, 200, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(181, 181, 181, 1)',
              'rgba(56, 56, 56, 1)',
            ]}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            style={{ flex: 1 }}
          />
        </UpperLine>
        <Content>
          <CardInfo>
            <Heading>
              <Text variant='logo'>
                PDF™
              </Text>
              <Text variant='body4' color='p2'>
                GOLD MEMBER
              </Text>
            </Heading>
          </CardInfo>
          <Divider />
        </Content>
      </LinearGradient>
    </Wrapper>
  )
}

export default GoldCard
