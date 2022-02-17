import React from 'react'
import Button from './Button'
import styled from '@emotion/styled'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../Theming'

const DarkMode = styled(FiMoon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const DefaultMode = styled(FiSun)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
})

const ThemeToggler = ({ toggleTheme, themeName }) => {
  const theme = useTheme()
  return (
    <Button
      css={{
        // CSS to position the icons within the containers.
        borderRadius: '50%',
        width: '2.375rem',
        height: '2.375rem',
        padding: 0,
        // This is the position of the icon
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        borderStyle: 'solid',
        borderWidth: '1px',
        color:
          theme.themeName === 'default'
            ? // This is the icon in light mode when normal
              theme.colors.grey
            : // This is the icon in dark mode when normal
              theme.colors.grey,
        // This is the background when not hovered
        background: theme.colors.headerBg,
        '@media (hover: hover)': {
          ':hover': {
            background:
              theme.themeName === 'default'
                ? // This is the background in light mode when hovered
                  theme.colors.headerBg
                : // This is the background in dark mode when hovered
                  theme.colors.headerBg,
          },
        },
      }}
      aria-label={
        themeName === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
      onClick={() => toggleTheme(themeName === 'dark' ? 'default' : 'dark')}
    >
      {themeName === 'dark' ? (
        <DefaultMode title="Switch to light mode" />
      ) : (
        <DarkMode title="Switch to dark mode" />
      )}
    </Button>
  )
}
export default ThemeToggler
