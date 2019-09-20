import React from 'react'

import * as Highcharts from 'highcharts/highstock'

import cc from '../../cryptocompare'

/**********************************************************************/

const chartOptions: Highcharts.Options = {
  chart: { animation: false },
  credits: { enabled: false },
  rangeSelector: { selected: 1 },
  scrollbar: { enabled: false },
}

const createChart = (ref: HTMLElement | null, pair: [string, string]) => {
  if (!ref) return

  const [fsym, tsym] = pair
  const name = `${fsym}/${tsym}`

  Highcharts.stockChart(ref, chartOptions, (chart: Highcharts.Chart) => {
    chart.showLoading()
    chart.setTitle({ text: name })

    cc.histoDay(fsym, tsym, { limit: 'none' }).then((data) => {
      if (
        !chart.title ||
        !chart.title.element ||
        chart.title.element.textContent !== name
      )
        return

      const series: Highcharts.SeriesCandlestickOptions = {
        type: 'candlestick',
        name,
        data: data.map(({ time, open, high, low, close }) => [
          time * 1000,
          open,
          high,
          low,
          close,
        ]),
      }

      chart.hideLoading()
      chart.addSeries(series)
    })
  })
}

const Chart: React.FC = () => {
  const pair: [string, string] = ['BTC', 'USD']

  const chartRef = React.useCallback(
    (node: HTMLElement | null) => createChart(node, pair),
    [pair],
  )

  /* render */
  return <div ref={chartRef} style={{ flex: 1 }} />
}

export default Chart
