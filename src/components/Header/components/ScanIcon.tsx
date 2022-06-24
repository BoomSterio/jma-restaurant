import { View } from 'react-native'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled(View)`
  align-items: center;
  justify-content: center;

  width: 27px;
  height: 27px;
  background: #d8d8d8;
  border: 0.605px solid #979797;
  border-radius: 5.3422px;
  margin: 7px;
`

const Rectangle = styled(View)`
  box-sizing: border-box;
  width: 20.2px;
  height: 20.2px;
  background: black;
  border-radius: 2.63451px;
`

const VerticalStick = styled(View)`
  position: absolute;
  width: 5.3px;
  height: 28px;
  left: 10.2px;
  top: -1px;
  background: black;
`

const HorizontalStick = styled(View)`
  position: absolute;
  width: 28px;
  height: 5.3px;
  left: -1px;
  top: 10.2px;
  background: black;
`

const ScanIcon = () => {
  return (
    <Wrapper>
      <Rectangle />
      <VerticalStick />
      <HorizontalStick />
    </Wrapper>
  )
}

export default ScanIcon
