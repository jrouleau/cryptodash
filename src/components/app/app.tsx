import React from 'react'

import { HookRouter, useRedirect, useRoutes } from 'hookrouter'

import DashboardPage from '../pages/dashboard'
import NotFoundPage from '../pages/not-found'

import PageHeader from '../page-header'
import PageFooter from '../page-footer'

import { Container } from 'semantic-ui-react'

/**********************************************************************/

const routes = {
  '/c/:id': ({ id }: HookRouter.QueryParams) => <DashboardPage id={id} />,
}

const App: React.FC = () => {
  useRedirect('/', '/c/BTC:USD')
  const page = useRoutes(routes)

  /* render */
  return (
    <div
      style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
    >
      <PageHeader />
      <Container as="main" style={{ flex: 1 }}>
        {page || <NotFoundPage />}
      </Container>
      <PageFooter />
    </div>
  )
}

export default App
