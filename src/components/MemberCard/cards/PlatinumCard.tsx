import React, { useState } from 'react'
import { ImageBackground, LayoutChangeEvent } from 'react-native'
import styled from 'styled-components'
import { useIntl } from 'react-intl'

import { PlatinumCardBackground } from 'assets/images'
import Wrapper from '../components/Wrapper'
import { Box } from '../../Box'
import { Text } from '../../Text'
import Divider from '../components/Divider'
import ScoreBar from '../components/ScoreBar'
import ReadMore from '../components/ReadMore'

const Background = styled(ImageBackground)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.m}px;
`

const Content = styled(Box)`
  flex: 1;
  flex-direction: row;
`

const Heading = styled(Box)`
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
`

const Score = styled(Box)`
  align-items: center;
  flex: 1;
`

const MAX_SCORE_BAR_SIZE = 140

const PlatinumCard = () => {
  const [scoreBarSize, setScoreBarSize] = useState(100)
  const intl = useIntl()

  const onScoreLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    const newScoreBarSize = width - 36
    setScoreBarSize(newScoreBarSize > MAX_SCORE_BAR_SIZE ? MAX_SCORE_BAR_SIZE : newScoreBarSize)
  }

  return (
    <Wrapper>
      <Background source={PlatinumCardBackground} resizeMode='stretch'>
        <Content>
          <Box
            paddingBottom={{ smallPhone: 'xs', phone: 's', tablet: 'm' }}
            paddingHorizontal={{ smallPhone: 'none', phone: 'xs', tablet: 'm' }}
            paddingTop='s'
          >
            <Heading>
              <Text variant='logo'>PDF™</Text>
              <Text
                variant='body4'
                color='secondary'
                fontSize={{ smallPhone: 'body5', phone: 'body5', tablet: 'body4' }}
                textTransform='uppercase'
              >
                {intl.formatMessage({ id: 'memberCard.platinumMember' })}
              </Text>
            </Heading>

            <Box marginTop={{ smallPhone: 'xs', phone: 'xs', tablet: 'm' }}>
              <Text
                variant='h6'
                fontSize={{ smallPhone: 'body3', phone: 'body2', tablet: 'h6' }}
                color='secondary'
                textTransform='uppercase'
              >
                Anna{'\n'}
                Soderlun
              </Text>
            </Box>

            <Box style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Text
                variant='body1'
                color='primary'
                fontSize={{ smallPhone: 'body4', phone: 'body3', tablet: 'body1' }}
              >
                • 10% {intl.formatMessage({ id: 'memberCard.discount' })}
                {'\n'}• 2% {intl.formatMessage({ id: 'memberCard.cashback' })}
              </Text>
            </Box>
          </Box>
          <Divider color='#303030' />
          <Score
            onLayout={onScoreLayout}
            paddingBottom={{ smallPhone: 'xs', phone: 's', tablet: 'm' }}
            paddingTop='s'
          >
            <Box marginTop='m' marginBottom={{ smallPhone: 'none', phone: 'xs', tablet: 'm' }}>
              <Text
                variant='body4'
                color='secondary'
                fontSize={{ smallPhone: 'body5', phone: 'body5', tablet: 'body4' }}
                textTransform='uppercase'
              >
                {intl.formatMessage({ id: 'memberCard.currentScore' })}
              </Text>
            </Box>

            <ScoreBar progress={0.8} size={scoreBarSize} type='platinum' />

            <ReadMore paddingBottom={{ smallPhone: 'xs', phone: 's', tablet: 'm' }}>
              <Text
                variant='body2'
                color='p3'
                fontSize={{ smallPhone: 'body4', phone: 'body3', tablet: 'body2' }}
              >
                {intl.formatMessage({ id: 'memberCard.readMore' })}
              </Text>
            </ReadMore>
          </Score>
        </Content>
      </Background>
    </Wrapper>
  )
}

export default PlatinumCard
