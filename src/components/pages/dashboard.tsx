import React from 'react'

import { navigate } from 'hookrouter'

import { Grid, Segment } from 'semantic-ui-react'

import Chart from '../chart'
import Favourites from '../favourites'

/**********************************************************************/

const DashboardPage: React.FC<{ id?: string }> = ({ id }) => {
  const [fsym, tsym] = id ? id.split(':') : []
  const pair: [string, string] = [fsym, tsym]

  if (!fsym || !tsym) navigate('/c/BTC:USD', true)

  /* render */
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Favourites />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Chart pair={pair} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default DashboardPage
