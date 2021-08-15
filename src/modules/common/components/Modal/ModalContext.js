import { createContext, useState } from 'react'
import { createPortal } from 'react-dom'

const ModalContext = createContext({})

const push = (item) => (array) => [...array, item]
const pop = (array) => array.slice(0, array.length - 1)

const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([])

  const showModal = (modal) => setModals(push(modal))
  const hideModal = () => setModals(pop)
  const hideAllModals = () => setModals([])

  const CurrentModal = modals[modals.length - 1]

  return (
    <ModalContext.Provider value={{ showModal, hideModal, hideAllModals }}>
      {children}
      {!!modals.length && createPortal(<CurrentModal />, document.body)}
    </ModalContext.Provider>
  )
}

export { ModalProvider }

export default ModalContext
