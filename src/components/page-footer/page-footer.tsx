import React from 'react'

import { Container } from 'semantic-ui-react'

/**********************************************************************/

const PageFooter: React.FC = () => {
  /* render */
  return (
    <Container
      as="footer"
      style={{ marginTop: '1rem', marginBottom: '1rem' }}
      textAlign="center"
    >
      <p style={{ color: '#999' }}>
        Copyright &copy; 2019 Jonathan Rouleau
        <br />
        Cryptocurrency data provided by{' '}
        <a href="https://www.cryptocompare.com/">CryptoCompare</a>
      </p>
    </Container>
  )
}

export default PageFooter
