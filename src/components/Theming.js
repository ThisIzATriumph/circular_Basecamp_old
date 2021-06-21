import { createTheming } from '@callstack/react-theme-provider'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.teal,
      text: colors.black,
      bodyBg: colors.white,
      headerBg: colors.white,
      sidebarBg: colors.lightgrey,
      link: colors.teal,
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
