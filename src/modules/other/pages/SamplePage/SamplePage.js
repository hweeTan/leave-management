import React from 'react'
import { useLocation } from 'react-router-dom'

import Page from 'modules/common/components/Page'

const SameplePage = () => {
  const { pathname } = useLocation()

  return <Page.Content>pathname: {pathname}</Page.Content>
}

export default SameplePage
