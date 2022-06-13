import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Screens, signedInRoutes, Route } from 'config/routes'

const Stack = createNativeStackNavigator()

const screenOptions = {
  headerShown: false,
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.Home} screenOptions={screenOptions}>
        {signedInRoutes.map((route: Route) => (
          <Stack.Screen key={route.name} name={route.name} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
