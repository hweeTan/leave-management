import { useState, useEffect } from 'react'

const createDataHook = (data) => () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timeout)
  })

  return { loading, data: loading ? undefined : data }
}

export default createDataHook
