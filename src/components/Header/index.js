import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import { bpMaxSM } from '../../lib/breakpoints'
import MobileMenu from './MobileMenu'
import Links from './Links'
import { fonts } from '../../lib/typography'
import Container from '../Container'

const Header = () => {
  const theme = useTheme()
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding-top: 20px;
        font-family: ${fonts.walsheim};
        background: ${theme.colors.headerBg};
        margin: 0 auto;
        justify-content: center;
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
              color: ${theme.colors.grey};
              &:hover {
                color: ${theme.colors.primary};
                text-decoration: none;
                transition: 0.5s;
              }
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="26"
              viewBox="0 0 93 88"
              css={css`
                margin-top: 0.4em;
                fill: ${theme.colors.darkGrey};
                transition: 550ms;
                opacity: 30%;
                &:hover {
                  transform: scale(1.05);
                  opacity: 100%;
                }
              `}
            >
              <path d="M256,47.26C141.33,47.26,48.38,140.72,48.38,256c10.95,276.9,404.33,276.82,415.24,0C463.62,140.72,370.67,47.26,256,47.26Zm-44.31,73.18c32.61-10.1,70.25-9.2,102.36,2.44,40.4,14.42,67.94,47,76.6,88.9.75,3.39,1.34,6.81,1.82,10.26.13.89-.15,1.06-1,1.06q-30.84,0-61.67,0c-.83,0-1.07-.3-1.23-1-6.84-34.93-36.91-55.66-71.84-53.23a82.17,82.17,0,0,0-21.65,3.82,1.09,1.09,0,0,0-.92,1.25c.09,15.14-.12,30.28.09,45.42,7-7,15.09-13.16,25.44-12.94,6,.12,12.07,0,18.11,0,17.14-.65,33.24,13.37,32.95,30.89.16,12.36.14,24.72,0,37.08-.16,19-16.66,31.47-34,30.9q-32.45,0-64.91,0c-1.15,0-1.35-.36-1.34-1.41q0-58.06,0-116.14,0-32.82,0-65.63C210.53,121.18,210.72,120.75,211.69,120.44ZM392.79,291c-9.93,55.31-57.46,93.58-112.21,99.33-53.39,6.3-107.68-12.72-138.11-58.57-42.95-64.4-25.17-161.9,44.29-200,.34,29.16,0,58.46.13,87.67,0,1.95-.84,3.65-1.37,5.43a95.91,95.91,0,0,0-3.63,35.33c3,45.29,37.66,77.15,83.08,76,25.74-.07,50.57-15.6,60.7-39.41a42.28,42.28,0,0,0,2.11-6.1c.19-.73.55-.91,1.26-.91q31.44,0,62.87,0C392.92,289.86,393,290.15,392.79,291Z" />
            </svg>
          </Link>
          <div
            css={css`
              font-size: 0.8em;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.grey};
                margin-left: 16px;
                margin-right: 16px;
                :hover {
                  color: ${theme.colors.orange};
                  transition: 0.5s;
                }
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                ${bpMaxSM} {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
