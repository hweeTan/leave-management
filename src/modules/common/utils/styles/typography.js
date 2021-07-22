import 'typeface-source-sans-pro'
import { css } from 'styled-components'

const typography = {
  family: {
    base: css`
      font-family: 'Source Sans Pro', sans-serif;
    `,
  },
  size: {
    large: css`
      font-size: 1.5rem;
      line-height: 2rem;
    `,
    medium: css`
      font-size: 1.125rem;
      line-height: 1.625rem;
    `,
    small: css`
      font-size: 1rem;
      line-height: 1.5rem;
    `,
    xsmall: css`
      font-size: 0.875rem;
      line-height: 1.125rem;
    `,
  },
  weight: {
    normal: css`
      font-weight: 400;
    `,
    semibold: css`
      font-weight: 600;
    `,
  },
}

export default typography
