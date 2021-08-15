import styled from 'styled-components'

import { Cross } from '../Icons'
import Flexbox from '../Flexbox'
import { colors, typography } from '../../utils/styles'
import useModal from './useModal'

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  overflow: auto;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const StyledModal = styled.div`
  position: relative;
  margin: 5rem auto;
  background-color: ${colors.white};
  border-radius: 0.25rem;
  width: 32rem;
`

const Title = styled.div`
  ${typography.size.large}
  ${typography.weight.semibold}
  color: ${colors.gray1};
`

const CloseButton = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background-color: ${colors.gray4};
  }
`

const Content = styled.div`
  padding: 0 1.5rem 1.5rem;
  ${typography.size.small};
  color: ${colors.gray1};
`

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5rem;
`

const Modal = ({ children, title }) => {
  const { hideModal } = useModal()

  return (
    <Container>
      <Backdrop onClick={hideModal} />
      <StyledModal>
        <Flexbox
          alignItems='center'
          justifyContent='space-between'
          style={{ padding: '1.5rem' }}
        >
          <Title>{title}</Title>

          <CloseButton onClick={hideModal}>
            <Cross color={colors.gray1} />
          </CloseButton>
        </Flexbox>
        <Content>{children}</Content>
      </StyledModal>
    </Container>
  )
}

Modal.Actions = Actions

export default Modal
