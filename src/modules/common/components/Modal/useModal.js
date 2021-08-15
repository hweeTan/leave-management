import { useContext } from 'react'

import ModalContext from './ModalContext'

const useModal = () => useContext(ModalContext)

export default useModal
