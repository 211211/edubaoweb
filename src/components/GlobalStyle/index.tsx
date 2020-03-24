import { createGlobalStyle } from 'styled-components'

import { boxShadow } from 'themes'

const GlobalStyle = createGlobalStyle`
  background-color: '#f9faff';
  .ant-popover.sub-menu {
    .ant-popover-content {
      > .ant-popover-arrow {
        top: 7px;
      }
    }
    .ant-popover-inner {
      box-shadow: ${boxShadow.card};
      border-radius: 16px;
    }
    .ant-popover-inner-content{
      padding: 16px 24px;
    }
  }
`

export default GlobalStyle
