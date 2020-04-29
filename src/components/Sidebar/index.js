import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import { bpMaxSM, bpMaxMD, bpMinLG } from '../../lib/breakpoints'
import Links from './Links'
import { fonts } from '../../lib/typography'
import Container from '../Container'

// Learning how to build this here: https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp

const Sidebar = () => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: flex;
        flex-shrink: 0;
        left: 0;
        position: fixed;
        height: 100%;
        overflow: hidden;
        padding: 0;
        ${bpMaxMD} {
          width: 180px;
        }
        ${bpMinLG} {
          width: 220px;
        }
        ${bpMaxMD} {
          display: none;
          visibility: hidden;
        }
      `}
    >
      {/* Navbar */}
      <nav
        css={css`
          position: absolute;
          align-items: right;
          float: right;
          border-right: 1px solid ${theme.colors.grey};
          font-family: ${fonts.walsheim};
          padding: 0 16px;
          a {
            color: ${theme.colors.grey};
            display: flex;
            text-decoration: none;
            flex-direction: column;
            text-align: right;
            font-size: 0.8em;
            :hover {
              color: ${theme.colors.orange};
              transition: 0.5s;
            }
          }
        `}
      >
        <Links />
      </nav>
    </div>
  )
}

export default Sidebar
