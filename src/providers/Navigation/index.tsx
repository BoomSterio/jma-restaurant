import React from 'react'
import styled from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import moment from 'moment'

import { Screens, signedInRoutes, Route } from 'config/routes'
import { useAsyncStorage } from 'hooks'
import { Box, BoxProps, Text } from 'components'
import { ReservationType } from 'screens'

const DrawerMenu = styled(DrawerContentScrollView)`
  background-color: ${({ theme }) => theme.palette.background.app};
`

interface ReservationProps extends BoxProps {
  reservation: ReservationType
}

const Reservation = ({ reservation, ...props }: ReservationProps) => {
  return (
    <Box padding='m' {...props}>
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

  return (
    <DrawerMenu {...props}>
      {storedValue?.map((res: ReservationType) => (
        <Reservation key={res?.id} reservation={res} />
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
