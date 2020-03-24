import {createTheming, ThemingType} from '@callstack/react-theme-provider'

export const themes: {[key: string]: ITheme} = {
  default: {
    // blue
    primaryColor: '#FFA72A',
    accentColor: '#458622',
    backgroundColor: '#FFC777',
    textColor: '#504f4d',
    secondaryColor: '#7F5315',
  },
  white: {
    primaryColor: '#FFA72A',
    accentColor: '#458622',
    backgroundColor: '#504f4d',
    textColor: '#FFC777',
    secondaryColor: '#252525',
  },
}

const {ThemeProvider, withTheme}: ThemingType<ITheme> = createTheming(
  themes.default,
)

export {ThemeProvider, withTheme}
