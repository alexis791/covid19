import React from 'react'
import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Chart = ({confirmed, deaths}) => {
    return (
      <ResponsiveLine
          data={[
            {
              "id":"muertes",
              "color": "hsl(302, 70%, 50%)",
              "data": deaths
            },{
            "id":"confirmados",
            "color": "blue",
            "data": confirmed
          }
          ]}
          margin={{ top: 10, right: 10, bottom: 70, left: 100 }}
          xScale={{ type: 'time', format:'%Y-%m-%d' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              format:'%b %d',
              tickRotation: -80,
              legend: 'Dia',
              legendOffset: 60,
              legendPosition: 'middle'
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Casos',
              legendOffset: -80,
              legendPosition: 'middle'
          }}
          curve="basis"
          enableArea={true}
          enableSlices="x"
          colors={{ scheme: 'category10' }}
          pointSize={5}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
              {
                  anchor: 'top-left',
                  direction: 'column',
                  justify: false,
                  translateX: 10,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemBackground: 'rgba(0, 0, 0, .03)',
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
      />
    )
  }

export default Chart