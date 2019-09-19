import React, { useEffect } from 'react'

import * as Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

import cc from '../../cryptocompare'

/**********************************************************************/

const Chart: React.FC = () => {
  const [data, setData] = React.useState()

  const fsym = 'BTC'
  const tsym = 'USD'

  useEffect(() => {
    cc.histoDay(fsym, tsym, {
      limit: 'none',
    }).then((d) => {
      const chartData = d.map(({ time, open, high, low, close }) => [
        time * 1000,
        open,
        high,
        low,
        close,
      ])

      setData(chartData)
    })
  }, [fsym, tsym])

  const chartOpts: Highcharts.Options = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: `${fsym}/${tsym}`,
    },

    chart: {
      animation: false,
    },

    credits: { enabled: false },

    series: [
      {
        type: 'candlestick',
        name: `${fsym}/${tsym}`,
        data,
      },
    ],
  }

  /* render */
  return (
    <>
      <HighchartsReact
        options={chartOpts}
        highcharts={Highcharts}
        immutable={true}
        constructorType={'stockChart'}
      />
    </>
  )
}

export default Chart
