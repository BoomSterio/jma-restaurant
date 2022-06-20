import { Dimensions, View } from 'react-native'
import styled from 'styled-components'

const width = Dimensions.get('window').width

const Wrapper = styled(View)`
  width: ${({ theme }) => width - theme.spacing.l * 2}px;
  height: ${({ theme }) => (width - theme.spacing.l * 2) / 1.847}px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.947);
  background-color: white;
  elevation: 30;
`

export default Wrapper
