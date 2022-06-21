import { View } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

import Wrapper from '../components/Wrapper'
import { Box } from '../../Box'
import { Text } from '../../Text'

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

const CardInfo = styled(Box)`
  padding-left: 19px;
`

const Score = styled(Box)`
  align-items: center;
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing.m * 2}px;
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
          <CardInfo
            paddingBottom={{ smallPhone: 's', phone: 'm', tablet: 'xxl' }}
            paddingTop='m'
            paddingRight='m'
          >
            <Heading>
              <Text variant='logo'>PDF™</Text>
              <Text
                variant='body4'
                color='p2'
                fontSize={{ smallPhone: 'body5', phone: 'body5', tablet: 'body4' }}
                textTransform='uppercase'
              >
                Gold Member
              </Text>
            </Heading>
            <Box marginTop={{ smallPhone: 'xs', phone: 'xs', tablet: 'm' }}>
              <Text
                variant='h6'
                fontSize={{ smallPhone: 'body3', phone: 'body2', tablet: 'h6' }}
                textTransform='uppercase'
              >
                Anna{'\n'}
                Soderlun
              </Text>
            </Box>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Text
                variant='body1'
                color='p2'
                fontSize={{ smallPhone: 'body4', phone: 'body3', tablet: 'body1' }}
              >
                • 10% rabatt{'\n'}• 2% cashback
              </Text>
            </View>
          </CardInfo>
          <Divider />
          <Score paddingBottom={{ smallPhone: 's', phone: 'm', tablet: 'xxl' }} paddingTop='m'>
            <Text
              variant='body4'
              color='p2'
              fontSize={{ smallPhone: 'body5', phone: 'body5', tablet: 'body4' }}
              textTransform='uppercase'
            >
              Nuvarande poäng
            </Text>
          </Score>
        </Content>
      </LinearGradient>
    </Wrapper>
  )
}

export default GoldCard
