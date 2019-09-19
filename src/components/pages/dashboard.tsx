import React from 'react'

import { Grid, Segment } from 'semantic-ui-react'

import Chart from '../chart'
import Favourites from '../favourites'

/**********************************************************************/

const DashboardPage: React.FC = () => {
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
            <Chart />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default DashboardPage
