import { useEffect } from 'react'
import styled from 'styled-components'

import { Warning, CheckCircle, Cross } from '../Icons'
import { typography, colors } from '../../utils/styles'

const VARIANT_MAPPING = {
  success: {
    background: colors.greenLight,
    border: colors.green,
    icon: <CheckCircle color={colors.green} />,
  },
  warning: {
    background: colors.yellowLight,
    border: colors.yellow,
    icon: <Warning color={colors.yellow} />,
  },
}

const Wrapper = styled.div`
  display: flex;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0px 1px 4px rgba(205, 207, 209, 0.5);
  animation: in 0.2s ease-out;

  div {
    ${typography.size.small}
    color: ${colors.grey1};
    margin: 0 0.5rem;
  }

  ${({ variant }) => {
    const { background, border } = VARIANT_MAPPING[variant]

    return `
      border-color: ${border};
      background-color: ${background};
    `
  }}

  @keyframes in {
    0% {
      opacity: 0;
      transform: translateX(100%)
    }
    100% {
      opacity: 1;
      transform: translateX(0)
    }
  }
`

const CloseButton = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;

  :hover {
    opacity: 0.5;
  }
`

const Notification = ({ variant, children, onClose }) => {
  const { icon } = VARIANT_MAPPING[variant]

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [onClose])

  return (
    <Wrapper variant={variant}>
      {icon}
      <div style={{ flex: 1 }}>{children}</div>
      <CloseButton onClick={onClose}>
        <Cross color={colors.gray1} />
      </CloseButton>
    </Wrapper>
  )
}

export default Notification
