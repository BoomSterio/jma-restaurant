import { ComponentType } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Home } from 'screens'

export enum Screens {
  home = 'Home',
}

type StackParamList = {
  [key: string]: undefined
}

export type NavigationProps = NativeStackNavigationProp<StackParamList>

export interface Route {
  name: string
  component: ComponentType
}

export const signedInRoutes: Route[] = [
  {
    name: Screens.home,
    component: Home,
  },
]

export const signedOutRoutes: Route[] = []
