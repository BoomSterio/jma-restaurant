import { Dimensions } from 'react-native'
import styled from 'styled-components'

import { Box } from '../../Box'

const width = Dimensions.get('window').width

const Wrapper = styled(Box)`
  width: ${({ theme }) => width - theme.spacing.l * 2}px;
  height: ${({ theme }) => (width - theme.spacing.l * 2) / 1.847}px;
  max-width: 471px;
  max-height: 255px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.947);
  background-color: white;
  elevation: 30;
`

export default Wrapper
