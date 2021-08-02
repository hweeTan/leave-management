import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { typography } from '../../utils/styles'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    ${typography.family.base}
    ${typography.weight.normal}
  }

  body {
    margin: 0;
  }
`

export default GlobalStyle
