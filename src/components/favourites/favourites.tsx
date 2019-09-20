import React from 'react'

import { A } from 'hookrouter'

/**********************************************************************/

const Favourites: React.FC = () => {
  const favourites = [
    ['BTC', 'USD'],
    ['ETH', 'USD'],
    ['XRP', 'USD'],
    ['LTC', 'USD'],
    ['DASH', 'USD'],
    ['XMR', 'USD'],
    ['MCO', 'USD'],
  ]

  /* render */
  return (
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      {favourites.map((f) => (
        <li key={f.join(':')} style={{ display: 'inline' }}>
          <A href={`/c/${f.join(':')}`} style={{ padding: 8 }}>
            {f.join('/')}
          </A>
        </li>
      ))}
    </ul>
  )
}

export default Favourites
