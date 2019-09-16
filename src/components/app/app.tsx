import React from 'react'

import { useRoutes } from 'hookrouter'

import RootPage from '../pages/root-page'
import NotFoundPage from '../pages/not-found-page'

import PageHeader from '../page-header'
import PageFooter from '../page-footer'

import { Container } from 'semantic-ui-react'

/**********************************************************************/

const routes = {
  '/': () => <RootPage />,
}

const App: React.FC = () => {
  const routeResult = useRoutes(routes)

  /* render */
  return (
    <div
      style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
    >
      <PageHeader />
      <Container as="main" style={{ flex: 1 }}>
        {routeResult || <NotFoundPage />}
      </Container>
      <PageFooter />
    </div>
  )
}

export default App
