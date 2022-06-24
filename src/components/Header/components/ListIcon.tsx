import React from 'react'
import styled from 'styled-components'

import { Box } from 'components/Box'

const Wrapper = styled(Box)`
  align-items: flex-end;
  justify-content: space-between;

  width: 38px;
  height: 26px;
`

const Line = styled(Box)`
  width: 100%;
  height: 4.27px;
  background: ${({ theme }) => theme.palette.common.white};
`

const ListIcon = () => {
  return (
    <Wrapper marginLeft={{ smallPhone: 'xs', phone: 's', tablet: 'l' }}>
      <Line />
      <Line />
      <Line style={{ width: 22 }} />
    </Wrapper>
  )
}

export default ListIcon
