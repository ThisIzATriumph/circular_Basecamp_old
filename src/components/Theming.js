import { createTheming } from '@callstack/react-theme-provider'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.orange,
      text: colors.lightGrey,
      bodyBg: colors.white,
      headerBg: colors.darkGrey,
      sidebarBg: colors.lightgrey,
      link: colors.orange,
      ...colors,
    },
  },

  themeDark: {
    themeName: 'themeDark',
    colors: {
      primary: colors.red,
      text: colors.red,
      bodyBg: colors.red,
      headerBg: colors.red,
      sidebarBg: colors.red,
      link: colors.red,
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
