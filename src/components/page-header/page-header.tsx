import React from 'react'

import { Container, Menu } from 'semantic-ui-react'

/**********************************************************************/

const PageHeader: React.FC = () => {
  /* render */
  return (
    <Container as="header" style={{ marginBottom: '2rem' }}>
      <Menu size="huge" secondary>
        <Menu.Item header as="h1">
          CryptoDash
        </Menu.Item>
      </Menu>
    </Container>
  )
}

export default PageHeader
