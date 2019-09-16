import React from 'react'

import { Grid, Segment } from 'semantic-ui-react'

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
        <Grid.Column width={4}>
          <Segment>coin list</Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment>chart</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default RootPage
