import React from 'react'

import { useRoutes } from 'hookrouter'

import RootPage from '../pages/root-page'

import PageHeader from '../page-header'
import PageFooter from '../page-footer'

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
      <main style={{ flex: 1 }}>{routeResult}</main>
      <PageFooter />
    </div>
  )
}

export default App
