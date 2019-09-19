import React from 'react'

import { Grid, Segment } from 'semantic-ui-react'

import Chart from '../chart'

/**********************************************************************/

const RootPage: React.FC = () => {
  /* render */
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Segment>favourites</Segment>
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

export default RootPage
