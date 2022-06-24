import React from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'

const Line = styled(Box)`
  width: 2px;
  height: 100%;
  opacity: 0.18;
`

interface DividerProps {
  color: string
}

export default ({ color }: DividerProps) => <Line style={{ backgroundColor: color }} />
