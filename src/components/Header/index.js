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
              width="40"
              height="40"
              viewBox="0 0 512 512"
              css={css`
                margin-top: 0.4em;
                fill: ${theme.colors.grey};
                transition: 550ms;
                opacity: 30%;
                &:hover {
                  color: ${theme.colors.lightOrange};
                  transform: scale(1.05);
                  opacity: 100%;
                }
              `}
            >
              <path d="M220.82,2.45c-0.32,169.16-0.63,338.35-0.93,507.58C-71.6,453.2-75.3,49.3,220.82,2.45z" />
              <path d="M280.77,512c0.68-170.59-0.35-340.04,0.45-510.63C588.99,38.93,592.68,467.69,280.77,512z M407.01,437.38c0.11,0.12,0.23,0.25,0.35,0.38c134.65-112.03,105.47-337.72-56.71-407.84c-6.63-2.16-48.02-19.74-47.74-11.75c-0.48,43.54,0.37,156.85,0.17,169.97c-0.36,3.06,3.44,4.11,5.66,4.51c47.35,12.21,87.42,47.33,108.52,90.78C439.81,332.51,435.52,391.58,407.01,437.38z" />
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
