import React from 'react'

import { Segment } from 'semantic-ui-react'

import Chart from '../chart'
import Favourites from '../favourites'

/**********************************************************************/

const DashboardPage: React.FC<{ selectedCoin: string }> = ({
  selectedCoin,
}) => {
  /* render */
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Favourites selected={selectedCoin} />
      <Segment>
        <Chart pair={[selectedCoin, 'USD']} />
      </Segment>
    </div>
  )
}

export default DashboardPage
