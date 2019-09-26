import React from 'react'

import { Grid } from 'semantic-ui-react'

import Chart from '../chart'
import Favourites from '../favourites'

/**********************************************************************/

const DashboardPage: React.FC<{ id: string }> = ({ id }) => {
  const [fsym, tsym] = id.split(':')
  const pair: [string, string] = [fsym, tsym]

  /* render */
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Favourites />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Chart pair={pair} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default DashboardPage
