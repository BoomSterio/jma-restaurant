import React from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components'

import { Box, Text } from 'components'

const Wrapper = styled(Box)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

const Item = styled(Box)`
  flex: 0.33;
  align-items: center;
`

interface TimeProps {
  key?: string
  time: string
}

const Time = ({ time }: TimeProps) => (
  <Item paddingVertical='xs'>
    <Text variant='h3' letterSpacing={0.95}>
      {time}
    </Text>
  </Item>
)

const mockTimeOptions = [
  { key: 'item1', time: '15:00' },
  { key: 'item2', time: '15:30' },
  { key: 'item3', time: '17:00' },
  { key: 'item4', time: '15:30' },
]

const TimeSelect = () => {
  const renderItem = ({ item }: { item: TimeProps }) => <Time time={item.time} />

  return (
    <Wrapper marginTop='xxl'>
      <FlatList
        data={mockTimeOptions}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={{ alignItems: 'stretch' }}
        style={{ width: '100%' }}
      />
    </Wrapper>
  )
}

export default TimeSelect
