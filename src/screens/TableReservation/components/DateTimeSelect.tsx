import React from 'react'
import DatePicker from 'react-native-date-picker'

import { useLocale } from 'providers/Locale'
import { darkTheme } from 'config/themes'

interface DateTimeProps {
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
  minimumDate: Date
}

const DateTimeSelect = ({ date, setDate, minimumDate }: DateTimeProps) => {
  const { locale } = useLocale()

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      mode='datetime'
      locale={locale}
      textColor={darkTheme.palette.text.primary}
      androidVariant='nativeAndroid'
      minimumDate={minimumDate}
      minuteInterval={10}
    />
  )
}

export default DateTimeSelect
