import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Statistic from '../../components/Statistic'
import Chart from '../../components/Chart'
import { getDataOfCovidGlobally } from '../../redux/actions/covidAction'

const StatisticGlobal = (props) => {
  console.log('Globally', props)
  const { totalConfirmed, totalRecovered, totalDeaths, daily } = props.global

  const percentTotalConfirmed = ( totalConfirmed / totalConfirmed ) * 100
  const percentTotalRecovered = ( totalRecovered / totalConfirmed ) * 100
  const percentTotalDeaths = ( totalDeaths / totalConfirmed ) * 100

  const { getDataOfCovidGlobally } = props

  useEffect( () => {
    getDataOfCovidGlobally()
  }, [])


  return (
  <div>
    <h1 className="Title">Datos Mundiales Diarios</h1>
    <section className="Statistics">      
      <Statistic
        title="Confirmados" 
        percent={percentTotalConfirmed}
        status="Statistic afirmative"
        icon="em em-face_with_thermometer"
        quantity={totalConfirmed}
      />
      <Statistic
        title="Recuperados" 
        percent={percentTotalRecovered}
        status="Statistic recovered"
        icon="em em-upside_down_face"
        quantity={totalRecovered}
      />
      <Statistic
        title="Muertos" 
        percent={percentTotalDeaths}
        status="Statistic deads"
        icon="em em-white_frowning_face"
        quantity={totalDeaths}
      />
    </section>
    <div className="ChartContent">
      <Chart confirmed={daily.confirmed} deaths={daily.deaths} />
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    global: state.global
  }
}

const mapDispatchToProps = {
  getDataOfCovidGlobally
}

export default connect(mapStateToProps,mapDispatchToProps)(StatisticGlobal)