import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GlobalStyle from 'modules/common/components/GlobalStyle'
import { ModalProvider } from 'modules/common/components/Modal'
import Header from 'modules/common/components/Header'
import SideBar from 'modules/common/components/SideBar'
import Page from 'modules/common/components/Page'
import routes, { mainRoutes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ModalProvider>
        <Header fixed />
        <Page>
          <SideBar fixed>
            {mainRoutes.map(({ path, icon, activeIcon, label }) => (
              <SideBar.RouterItem
                key={path}
                label={label}
                href={path}
                Icon={icon}
                ActiveIcon={activeIcon}
              />
            ))}
          </SideBar>
          <Switch>
            {routes.map(({ ContentComponent, path, exact }) => (
              <Route
                path={path}
                exact={exact}
                key={path}
                component={ContentComponent}
              />
            ))}
            <Route path='*'>
              <Page.Content>404 Not Found</Page.Content>
            </Route>
          </Switch>
        </Page>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App
