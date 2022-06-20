import React, { useState, useEffect, FunctionComponent } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IntlProvider } from 'react-intl'
import type { OnErrorFn } from '@formatjs/intl'
import locales, { defaultLocale, localesLanguages } from 'config/locales'

import Context from './Context'

interface LocaleProps {
  persistKey?: string
  children: React.ReactNode
}

const Provider: FunctionComponent<LocaleProps> = ({ children, persistKey = '@locale' }) => {
  const [locale, setLocale] = useState<localesLanguages>(defaultLocale)

  const handleIntlProviderError: OnErrorFn = (err) => {
    console.log('IntlProvider Error: >', err)
  }

  useEffect(() => {
    const getLocale = async () => {
      try {
        const persistLocale = await AsyncStorage.getItem(persistKey)
        const persistValue =
          (persistLocale &&
            persistLocale in localesLanguages &&
            (persistLocale as localesLanguages)) ||
          defaultLocale

        setLocale(persistValue)
      } catch (error) {
        console.warn(error)
      }
    }
    getLocale()
  }, [])

  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem(persistKey, locale)
      } catch (error) {
        console.warn(error)
      }
    }
    storeData()
  }, [locale, persistKey])

  return (
    <Context.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={locales[locale]}
        onError={handleIntlProviderError}
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export default Provider
