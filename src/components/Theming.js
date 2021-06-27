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
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
