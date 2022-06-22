import styled from 'styled-components'

import { Box } from '../../Box'

const Wrapper = styled(Box)`
  width: 100%;
  aspect-ratio: ${157 / 85};
  max-width: 471px;
  max-height: 255px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.947);
  background-color: white;
  elevation: 30;
`

export default Wrapper
