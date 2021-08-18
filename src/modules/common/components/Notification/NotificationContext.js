import styled from 'styled-components'
import { createContext, useState } from 'react'
import { createPortal } from 'react-dom'

const Wrapper = styled.div`
  position: fixed;
  top: 5rem;
  right: 1.5rem;
  width: 27rem;
  z-index: 1001;
`

const NotificationContext = createContext({})

const push = (item) => (array) => [...array, item]
const splice = (element) => (array) => {
  const index = array.indexOf(element)

  if (index === -1) {
    return array
  }

  const newArray = [...array]
  newArray.splice(index, 1)

  return newArray
}

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const show = (element) => setNotifications(push(element))
  const hide = (element) => setNotifications(splice(element))

  return (
    <NotificationContext.Provider value={{ show, hide }}>
      {children}
      {!!notifications.length &&
        createPortal(<Wrapper>{notifications}</Wrapper>, document.body)}
    </NotificationContext.Provider>
  )
}

export { NotificationProvider }

export default NotificationContext
