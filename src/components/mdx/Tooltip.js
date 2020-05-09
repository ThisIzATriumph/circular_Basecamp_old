import React, { forwardRef } from 'react'
import { css } from '@emotion/core'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/themes/light.css'

const Tooltip = forwardRef((props, ref) => {
  return (
    <Tippy
      duration="500"
      distance="10"
      theme="light"
      arrow={true}
      interactive={true}
      animation="shift-away"
      content={props.tiptext}
    >
      <div
        css={css({
          display: 'inline-block',
          color: '#53BDC9',
          padding: '0 4px 4px 2px',
          marginRight: '4px',
          borderRadius: '4px',
          lineHeight: '1em',
          transition: 'all 0.4s',
          ':hover, :focus': {
            background: '#53BDC9',
            color: 'white',
          },
        })}
      >
        <span ref={ref}>{props.children ? props.children : '*'}</span>
      </div>
    </Tippy>
  )
})

export default Tooltip

// To use in any MDX file, add 'import Tooltip from '../../../src/components/mdx/Tooltip.js' to the top.

// Then add <Tooltip tiptext="I'm working right?">Hello</Tooltip> anywhere in the body
