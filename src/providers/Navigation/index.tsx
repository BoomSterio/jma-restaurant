import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Screens, signedInRoutes, Route, NavigationProps } from 'config/routes'
import { useAsyncStorage } from 'hooks'
import { Box, BoxProps, Text, Divider, Button } from 'components'
import { ReservationType } from 'screens'
import { ReservationIcon } from 'assets/icons'

const DrawerMenu = styled(DrawerContentScrollView)`
  padding: ${({ theme }) => theme.spacing.s}px;
  background-color: ${({ theme }) => theme.palette.background.app};
`

const Actions = styled(Box)`
  flex-direction: row;
  align-items: center;
`

interface ReservationProps extends BoxProps {
  reservation: ReservationType
}

const Reservation = ({ reservation, ...props }: ReservationProps) => {
  return (
    <Box padding='s' {...props}>
      <Box marginBottom='s' style={{ flexDirection: 'row' }}>
        <Text variant='body1'>
          {reservation.name}, {reservation.visitors}
        </Text>
      </Box>
      <Text variant='body2'>{moment(reservation.date).format('DD/MM/YYYY HH:mm')}</Text>
    </Box>
  )
}

const screenOptions = {
  headerShown: false,
}

function CustomDrawerContent(props: any) {
  const { storedValue } = useAsyncStorage<ReservationType[]>('@reservations', [])
  const { navigate } = useNavigation<NavigationProps>()

  const handleReserve = () => {
    navigate(Screens.tableReservation)
  }

  return (
    <DrawerMenu {...props}>
      <Actions marginBottom='m'>
        <Button
          padding='s'
          onPress={handleReserve}
          hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
        >
          <Image style={{ width: 36, height: 36 }} resizeMode='contain' source={ReservationIcon} />
        </Button>
        <Divider color={'#979797'} marginHorizontal='s' />
        <Button
          padding='s'
          onPress={() => {}}
          hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
        >
          <Icon name='sign-out' color='#fff' size={36} />
        </Button>
      </Actions>
      {storedValue?.map((res: ReservationType) => (
        <React.Fragment key={res?.id}>
          <Divider orientation='horizontal' color={'#979797'} />
          <Reservation reservation={res} />
        </React.Fragment>
      ))}
    </DrawerMenu>
  )
}

const Drawer = createDrawerNavigator()

export const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={Screens.home}
        screenOptions={screenOptions}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {signedInRoutes.map((route: Route) => (
          <Drawer.Screen key={route.name} name={route.name} component={route.component} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
