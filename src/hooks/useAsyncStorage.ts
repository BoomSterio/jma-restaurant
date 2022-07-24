import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type StorageState = {
  storedValue: any
  setValue: React.Dispatch<React.SetStateAction<any>>
}

export const useAsyncStorage = (key: string, initialValue: any): StorageState => {
  const [storedValue, setStoredValue] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        const item = await AsyncStorage.getItem(key)
        const value = item ? JSON.parse(item) : initialValue
        setStoredValue(value)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [key, initialValue])

  const setValue = async (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return { storedValue, setValue }
}
