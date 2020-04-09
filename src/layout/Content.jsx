import React, { useEffect } from 'react'
import Select from '../components/Select'
import Chart from '../components/Chart'
import Flag from '../components/Flag'
import Statistic from '../components/Statistic'

import { connect } from 'react-redux'
import { getDataOfCovidGlobally } from '../redux/actions/covidAction'


const Content = (props) => {
  const { flag, confirmed, recovered, deaths, lastUpdate} = props.covid
  const { totalConfirmed, totalRecovered, totalDeaths, daily } = props.covid.globally
  console.log('DAILY----->',JSON.daily)
  const { getDataOfCovidGlobally } = props

  const percentConfirmed = (confirmed / confirmed ) * 100  
  const percentRecovered = (recovered / confirmed ) * 100 
  const percentDeaths = (deaths / confirmed ) * 100
  const percentTotalConfirmed = ( totalConfirmed / totalConfirmed ) * 100
  const percentTotalRecovered = ( totalRecovered / totalConfirmed ) * 100
  const percentTotalDeaths = ( totalDeaths / totalConfirmed ) * 100


  useEffect( () => {
    getDataOfCovidGlobally()
  }, [])

  return (
    <div className="Info">
      <div className="Info__Content">
      <section className="Country">
        <div className="Country__Info">
          <Select />
  <p className="Update">Ultima Actualización <b>{lastUpdate}</b></p>
        </div>
        <Flag direction={flag} />
      </section>
      <section className="Statistics">
        <Statistic
          title="Confirmados" 
          percent={percentConfirmed}
          status="Statistic afirmative"
          quantity={confirmed}
        />
        <Statistic
          title="Recuperados" 
          percent={percentRecovered}
          status="Statistic recovered"
          icon="em em-upside_down_face"
          quantity={recovered}
        />
        <Statistic
          title="Muertos" 
          percent={percentDeaths}
          status="Statistic deads"
          icon="em em-white_frowning_face"
          quantity={deaths}
        />
      </section>
      <p className="Title">Datos Mundiales Diarios</p>
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
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log(state.covid)
  return {
    covid: state.covid
  }
}

const mapDispatchToProps = {
  getDataOfCovidGlobally
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)