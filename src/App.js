import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GlobalStyle from 'modules/common/components/GlobalStyle'
import Header from 'modules/common/components/Header'
import SideBar from 'modules/common/components/SideBar'
import Page from 'modules/common/components/Page'
import routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header fixed />
      <Page>
        <SideBar fixed>
          {routes.map(({ path, icon, activeIcon, label }) => (
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
          {routes.map(({ ContentComponent, path }) => (
            <Route path={path} exact key={path} component={ContentComponent} />
          ))}
          <Route path='*'>
            <Page.Content>404 Not Found</Page.Content>
          </Route>
        </Switch>
      </Page>
    </BrowserRouter>
  )
}

export default App
