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
              <path
                d="M464.84,7.27q-1,531.69-1.94,1063.6C-147.91,951.78-155.65,105.44,464.84,7.27Z"
                transform="translate(-2.13 -4.99)"
              />
              <path
                d="M590.46,1075c1.42-357.45-.73-712.54.94-1070C1236.31,83.71,1244.05,982.16,590.46,1075ZM855,918.64c.24.26.48.53.73.79,282.15-234.75,221-707.67-118.83-854.61C723,60.3,636.27,23.46,636.87,40.2c-1,91.23.78,328.67.36,356.17-.76,6.42,7.2,8.61,11.86,9.46C748.3,431.41,832.27,505,876.48,596.05,923.73,698.89,914.73,822.67,855,918.64Z"
                transform="translate(-2.13 -4.99)"
              />
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
