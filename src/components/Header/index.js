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
              <path d="M128.51,34a9.82,9.82,0,0,1,.26,3.49q0,78.38,0,156.75a16.42,16.42,0,0,1-.76,5.42c-7.94,23.6-10.41,47.81-8.26,72.57,1.85,21.19,7,41.51,16.79,60.42,19.47,37.49,50.09,61.25,90.65,72.25a161.54,161.54,0,0,0,55.64,4.78c24.05-2,45.54-11,64.66-25.51,18.61-14.16,32.12-32.13,39.5-54.5,0-.1.07-.19.11-.29.6-1.5.37-3.64,1.75-4.42,1.17-.67,3-.25,4.51-.25H503.78a11.58,11.58,0,0,1,3.8.24c.13,3.06-.8,6-1.49,8.92Q482.17,435.11,389.88,483.08A247.23,247.23,0,0,1,313.65,508,313.42,313.42,0,0,1,251,511.32c-21.31-.93-42.33-3.63-62.92-9.27C115,482.05,43.51,428.86,15.59,334A273.28,273.28,0,0,1,5,274.06C2.4,233,8.11,193.12,23.58,154.86,44.06,104.23,77.43,64.45,124.27,36.14c1.13-.68,2.29-1.33,3.45-2A3.23,3.23,0,0,1,128.51,34Z" />
              <path d="M506.83,198.72c0-.1,0-.2-.05-.3a260.2,260.2,0,0,0-16.41-60.13q-29.1-71-96.87-107C357,11.85,317.93,2.55,276.87.74a319.06,319.06,0,0,0-63.59,3,260.54,260.54,0,0,0-39,9.22c-1.7.54-2.33,1.39-2.11,3.08a18.35,18.35,0,0,1,0,2.46c.11,39.46-.1,78.92.15,118.39.19,30.77,0,61.54,0,92.32q0,60.12,0,120.24c0,3.95-.3,3.48,3.41,3.48q59.19,0,118.37,0a101,101,0,0,0,10.71-.55c27.46-2.94,52.47-25.67,51.94-58.32-.14-9.3,0-18.61,0-27.91,0-12.47.06-25,0-37.42-.08-13.79-4.36-26.11-13.38-36.63-11.41-13.31-26-20.28-43.44-20.8-13.58-.41-27.18-.14-40.78-.09-5.7,0-11.06,1.66-16.27,3.9a69.18,69.18,0,0,0-21.37,14.62c-1.66,1.63-3.39,3.17-5.55,5.19-.08-1.21-.13-1.6-.13-2q0-40.5,0-81c0-2.4,0-2.44,2.36-3.17a148,148,0,0,1,33.31-6.41c15.57-1.2,31-.79,46.34,2.64,26.81,6,49.34,19.13,66.69,40.67,12.6,15.66,20.51,33.54,24.74,53.12.78,3.6.53,3,3.38,3q55.81,0,111.63,0C507.26,201.85,507.26,201.83,506.83,198.72ZM217.9,243.67c10.36-8.95,20.63-18,30.94-27,1.08-.94,2.2-1.82,3.31-2.72a12.93,12.93,0,0,1,7.58-2.92c2.55-.16,5.1-.35,7.65-.34,9.91,0,19.82,0,29.73,0a15.92,15.92,0,0,1,12.32,5.16,13.35,13.35,0,0,1,3.8,9.4c0,24.73-.11,49.46,0,74.19.05,8.21-7.66,14.91-14.9,14.86-13.28-.08-26.56,0-39.84,0H219.61c-.62,0-1.23,0-1.84,0-1.37.13-2.19-.28-2-1.84a10.1,10.1,0,0,0,0-1.23c0-20.95,0-41.9,0-62.84A5.56,5.56,0,0,1,217.9,243.67Z" />
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
                  color: ${theme.colors.lightOrange};
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
