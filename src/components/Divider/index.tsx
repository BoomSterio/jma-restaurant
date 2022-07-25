import React from 'react'
import styled from 'styled-components'
import { Box, BoxProps } from 'components/Box'

const Line = styled(Box)<LineProps>`
  ${({ orientation }) =>
    orientation === 'vertical' ? 'width: 2px;height: 100%;' : 'width: 100%;height: 2px;'}

  opacity: 0.18;
`

type Orientation = 'vertical' | 'horizontal'

interface LineProps extends BoxProps {
  orientation?: Orientation
}

interface DividerProps extends LineProps {
  color: string
}

export const Divider = ({ color, orientation = 'vertical', ...props }: DividerProps) => (
  <Line style={{ backgroundColor: color }} orientation={orientation} {...props} />
)
