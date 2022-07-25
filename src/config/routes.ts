import { ComponentType } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Home, TableReservation } from 'screens'

export enum Screens {
  home = 'Home',
  tableReservation = 'TableReservation',
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
  {
    name: Screens.tableReservation,
    component: TableReservation,
  },
]

export const signedOutRoutes: Route[] = []
