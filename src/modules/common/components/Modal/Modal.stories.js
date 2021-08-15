import React, { useState } from 'react'

import GlobalStyle from '../GlobalStyle'
import Button from '../Button'
import Modal from './Modal'
import { ModalProvider } from './ModalContext'
import useModal from './useModal'

export default {
  title: 'Example/Modal',
  component: Modal,
}

const ModalUser = () => {
  const [count, setCount] = useState(0)

  const { showModal, hideModal, hideAllModals } = useModal()

  const showSecondModal = () =>
    showModal(() => (
      <Modal title='Second modal'>
        Testing Subsequent modal.
        <Modal.Actions>
          <Button onClick={hideModal} variant='secondary' label='Cancel' />
          <Button variant='danger' onClick={hideAllModals} label='OK' />
        </Modal.Actions>
      </Modal>
    ))

  const showFirstModal = () =>
    showModal(() => (
      <Modal title='First modal'>
        Testing dynamic state of parent component in modal.
        <br />
        The current count is: {count}
        <br />
        <br />
        <br />
        <strong>Long content:</strong>
        <br />
        <br />
        You may have seen many articles saying “you shouldn’t use setState,” and
        the docs are claiming “refs are bad”… That is so contradictory. It’s
        hard to understand how to “get it right” and even what are the criteria
        for choosing. How the hell are you supposed to make forms? After all,
        forms are central to many web apps out there. And yet, form handling in
        React seems to be a bit of a… corner stone? Fear no more. Let me show
        you the differences between the approaches, as well as when you should
        use each.
        <br />
        <br />
        You may have seen many articles saying “you shouldn’t use setState,” and
        the docs are claiming “refs are bad”… That is so contradictory. It’s
        hard to understand how to “get it right” and even what are the criteria
        for choosing. How the hell are you supposed to make forms? After all,
        forms are central to many web apps out there. And yet, form handling in
        React seems to be a bit of a… corner stone? Fear no more. Let me show
        you the differences between the approaches, as well as when you should
        use each.
        <br />
        <br />
        You may have seen many articles saying “you shouldn’t use setState,” and
        the docs are claiming “refs are bad”… That is so contradictory. It’s
        hard to understand how to “get it right” and even what are the criteria
        for choosing. How the hell are you supposed to make forms? After all,
        forms are central to many web apps out there. And yet, form handling in
        React seems to be a bit of a… corner stone? Fear no more. Let me show
        you the differences between the approaches, as well as when you should
        use each.
        <Modal.Actions>
          <Button onClick={hideModal} variant='secondary' label='Cancel' />
          <Button onClick={showSecondModal} label='Next modal' />
        </Modal.Actions>
      </Modal>
    ))

  return (
    <>
      <button onClick={showFirstModal}>show</button>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </>
  )
}

const Template = () => {
  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        <ModalUser />
      </ModalProvider>
    </>
  )
}

export const Default = Template.bind({})
