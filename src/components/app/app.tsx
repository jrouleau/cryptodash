import React from 'react'

import { useRoutes } from 'hookrouter'

import RootPage from '../pages/root-page'

/**********************************************************************/

const routes = {
  '/': () => <RootPage />,
}

const App: React.FC = () => {
  const routeResult = useRoutes(routes)

  /* render */
  return routeResult
}

export default App
