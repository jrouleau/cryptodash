import React from 'react'

import { Grid } from 'semantic-ui-react'

import Chart from '../chart'
import Favourites from '../favourites'

/**********************************************************************/

const DashboardPage: React.FC<{ selectedCoin: string }> = ({
  selectedCoin,
}) => {
  /* render */
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Favourites selected={selectedCoin} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Chart pair={[selectedCoin, 'USD']} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default DashboardPage
