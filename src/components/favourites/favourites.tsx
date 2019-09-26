import React from 'react'

import { navigate } from 'hookrouter'

import { Button, Grid, Image } from 'semantic-ui-react'

/**********************************************************************/

const Favourites: React.FC = () => {
  const selected = 'BTC'
  const favourites = [
    { Symbol: 'BTC', ImageUrl: '/media/19633/btc.png' },
    { Symbol: 'ETH', ImageUrl: '/media/20646/eth_logo.png' },
    { Symbol: 'XRP', ImageUrl: '/media/34477776/xrp.png' },
    { Symbol: 'LTC', ImageUrl: '/media/35309662/ltc.png' },
    { Symbol: 'DASH', ImageUrl: '/media/33842920/dash.png' },
    { Symbol: 'XMR', ImageUrl: '/media/19969/xmr.png' },
    { Symbol: 'MCO', ImageUrl: '/media/34478435/mco.png' },
  ]

  /* render */
  return (
    <Grid columns="8" doubling spacing="">
      {favourites.map((f) => {
        const isActive = f.Symbol === selected
        return (
          <Grid.Column key={f.Symbol} textAlign="center" verticalAlign="middle">
            <Button
              active={isActive}
              color={isActive ? 'green' : 'blue'}
              fluid
              onClick={() => navigate(`/c/${f.Symbol}`)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                circular
                src={`https://www.cryptocompare.com${f.ImageUrl}`}
                style={{
                  marginLeft: '-1rem',
                  marginRight: '1rem',
                  width: '2rem',
                  height: '2rem',
                  backgroundColor: '#fff',
                }}
              />
              <span>{f.Symbol}</span>
            </Button>
          </Grid.Column>
        )
      })}
    </Grid>
  )
}

export default Favourites
