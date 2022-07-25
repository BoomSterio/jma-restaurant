import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface StorageState<T> {
  storedValue: T
  setValue: React.Dispatch<React.SetStateAction<T>>
}

export function useAsyncStorage<T>(key: string, initialValue: T): StorageState<T> {
  const [storedValue, setStoredValue] = useState(initialValue)

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
