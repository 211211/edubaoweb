import React, {
    createContext,
    useEffect,
    useContext,
    useState,
    useLayoutEffect
} from 'react'

// tslint:disable-next-line: max-line-length
// https://medium.com/better-programming/react-context-hooks-part-2-ui-language-switch-f4610a21379b
export const LanguageContext = createContext({
    language: 'en-US',
    // tslint:disable-next-line: no-empty
    switchLang: (newLang: string) => { },
    languageData: {},
    // tslint:disable-next-line: no-empty
    updateLanguageData: (data: object) => { },
})

export const LanguageProvider = (props: { children: React.ReactNode }) => {
    // prioritize language from local storage instead of default browser's
    const [language, setLanguage] = useState<string>('')
    const switchLang = (newLanguage: string) => {
        if (newLanguage !== language) {
            setLanguage(newLanguage)
            window.localStorage.setItem('language', newLanguage)
        }
    }

    const [languageData, setLanguageData] = useState({})
    const updateLanguageData = (data: object) => {
        setLanguageData({ ...data })
    }

    useLayoutEffect(() => {
        const localStorageLanguage =
            window.localStorage.getItem('language') || window.navigator.language
        if (localStorageLanguage) {
            setLanguage(localStorageLanguage)
        }
    }, [language])

    useEffect(() => {
        if (typeof window !== `undefined`) {
            setLanguage(
                window.localStorage.getItem('language')
                || window.navigator.language
            )
        }
    }, [])

    return (
        <LanguageContext.Provider
            value={{
                language,
                switchLang,
                languageData,
                updateLanguageData,
            }}
        >
            {props.children}
        </LanguageContext.Provider>
    )
}

// used by: const {language, switchLang, languageData} = useLanguage()
export const useLanguage = () => useContext(LanguageContext)
