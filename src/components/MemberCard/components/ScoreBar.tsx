import React, { useMemo } from 'react'
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg'
import Animated, { interpolate } from 'react-native-reanimated'
import styled from 'styled-components'

import { Text } from 'components/Text'
import { Box } from 'components/Box'
import { MemberCardType } from '..'

interface ScoreBarProps {
  progress: number
  size: number
  type: MemberCardType
}

interface ScorePointsProps {
  size: number
}

type GradientType = {
  [key in MemberCardType]: Array<{ offset: string; stopColor: string }>
}

const PATH_GRADIENT: GradientType = {
  gold: [
    {
      offset: '0',
      stopColor: '#FFFFFF',
    },
    {
      offset: '0.01',
      stopColor: '#F0E8E2',
    },
    {
      offset: '0.5',
      stopColor: '#FFD300',
    },
  ],
  platinum: [
    {
      offset: '0',
      stopColor: '#FFFFFF',
    },
    {
      offset: '0.01',
      stopColor: '#F0E8E2',
    },
    {
      offset: '0.5',
      stopColor: '#4DB512',
    },
  ],
}

const ScorePoints = styled(Box)`
  position: absolute;
  top: ${({ size }: ScorePointsProps) => size / 2.5}px;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const AnimatedPath = Animated.createAnimatedComponent(Path)

const ScoreBar = ({ progress, size, type }: ScoreBarProps) => {
  const values = useMemo(() => {
    const strokeWidth = size / 14
    const { PI, cos, sin } = Math
    const r = (size - strokeWidth) / 2
    const cx = size / 2
    const cy = size / 2
    const A = PI + PI * 0.4
    const startAngle = PI + PI * 0.2
    const endAngle = 2 * PI - PI * 0.2
    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
    const x1 = cx - r * cos(startAngle)
    const y1 = -r * sin(startAngle) + cy
    const x2 = cx - r * cos(endAngle)
    const y2 = -r * sin(endAngle) + cy
    const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`
    return { d, r, A, strokeWidth }
  }, [size])
  const { d, r, A, strokeWidth } = values

  const circumference = r * A
  const α = interpolate(progress, [0, 1], [0, A])
  const strokeDashoffset = r * α

  const fontSize = size < 120 ? 'body4' : 'body3'
  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id='grad' x1='0' y1='0' x2='100%' y2='0'>
          {PATH_GRADIENT[type].map(({ offset, stopColor }, i) => (
            <Stop key={i} offset={offset} stopColor={stopColor} />
          ))}
        </LinearGradient>
        <LinearGradient id='back-grad' x1='100%' y1='0' x2='0' y2='0'>
          <Stop offset='0' stopColor='#BCBCBC' />
          <Stop offset='0.5' stopColor='#9A9A9A' />
        </LinearGradient>
      </Defs>
      <Path
        stroke='url(#grad)'
        fill='none'
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ d, strokeWidth }}
      />
      <AnimatedPath
        stroke='url(#back-grad)'
        fill='none'
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ d, strokeDashoffset, strokeWidth }}
      />
      <ScorePoints size={size}>
        <Text variant='h6' fontSize={fontSize} style={{ letterSpacing: 1.64 }}>
          800/1000
        </Text>
      </ScorePoints>
    </Svg>
  )
}

export default ScoreBar
