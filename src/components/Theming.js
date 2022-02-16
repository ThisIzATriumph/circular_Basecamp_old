import { createTheming } from '@callstack/react-theme-provider'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.orange,
      secondary: colors.pink,
      text: colors.lightGrey,
      bodyBg: colors.white,
      headerBg: colors.white,
      sidebarBg: colors.white,
      link: colors.orange,
      ...colors,
    },
  },

  dark: {
    themeName: 'dark',
    colors: {
      primary: colors.orange,
      secondary: colors.pink,
      text: colors.lightGrey,
      bodyBg: colors.darkGrey,
      headerBg: colors.darkGrey,
      sidebarBg: colors.lightGrey,
      link: colors.orange,
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
