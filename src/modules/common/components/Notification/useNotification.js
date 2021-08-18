import { useContext } from 'react'

import NotificationContext from './NotificationContext'
import Notification from './Notification'

const useNotification = () => {
  const { show, hide } = useContext(NotificationContext)

  const showNotiffication = (variant) => (children) => {
    const currentNode = (
      <Notification variant={variant} onClose={() => hide(currentNode)}>
        {children}
      </Notification>
    )

    show(currentNode)
  }

  return {
    showSuccess: showNotiffication('success'),
    showWarning: showNotiffication('warning'),
  }
}

export default useNotification
