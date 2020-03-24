import React, { useState, useLayoutEffect } from 'react'
import { ConfigProvider } from 'antd'
import { ModalProvider } from 'styled-react-modal'
import { WindowDimensionsProvider, GlobalStyle } from './components'
import { LanguageProvider, useLanguage } from 'hooks'
import { ThemeProvider, themes } from './themes/theming'
import {
  LandingPage,
  ArrivalPage,
  PackagePage,
  BuyPackagePage,
  SignUpPage,
} from 'containers'

const Containers = () => {
  const { language = 'en-US' } = useLanguage()
  const [locale, setLocale] = useState<any>({})

  useLayoutEffect(() => {
    // https://ant.design/docs/react/i18n

    try {
      // tslint:disable-next-line: max-line-length
      setLocale(require(`antd/es/locale/${language.replace('-', '_')}`).default)
    } catch (error) {
      // tslint:disable-next-line: max-line-length
      console.error('Ant Design does not support your language: ', language, error)
      // tslint:disable-next-line: no-submodule-imports
      setLocale(require(`antd/es/locale/en_US`).default)
    }
  }, [language])

  // tslint:disable-next-line: no-console
  console.info({ locale })
  return (
    <ConfigProvider locale={locale}>
      <LandingPage />
      <ArrivalPage />
      <PackagePage />
      <BuyPackagePage />
      <SignUpPage />
    </ConfigProvider>
  )
}

const App = () => {
  const [theme] = useState<ITheme>(themes.default)

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WindowDimensionsProvider>
          <ModalProvider>
            <Containers />
          </ModalProvider>
        </WindowDimensionsProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
