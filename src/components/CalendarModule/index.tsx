import { NativeModules } from 'react-native'

const { CalendarModule } = NativeModules
interface CalendarInterface {
  createCalendarEvent: (name: string, visitors: number, date: string) => Promise<any>
}

export default CalendarModule as CalendarInterface
