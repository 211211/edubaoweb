import React, { Fragment, useState, useLayoutEffect } from 'react'
import { ConfigProvider } from 'antd'
import { ModalProvider } from 'styled-react-modal'
import {Helmet} from 'react-helmet'
import { WindowDimensionsProvider, GlobalStyle } from 'components'
import { LanguageProvider, useLanguage } from 'hooks'
import { ThemeProvider, themes } from '../themes/theming'

const Containers = ({ children }: any) => {
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
            {children}
        </ConfigProvider>
    )
}

const DefaultLayout = (props: any) => (
    <Fragment>
        <Helmet>
            <title>EDUBAO</title>
        </Helmet>
        <LanguageProvider>
            <ThemeProvider theme={themes.default}>
                <GlobalStyle />
                <WindowDimensionsProvider>
                    <ModalProvider>
                        <Containers {...props} />
                    </ModalProvider>
                </WindowDimensionsProvider>
            </ThemeProvider>
        </LanguageProvider>
    </Fragment>
)

export default DefaultLayout
