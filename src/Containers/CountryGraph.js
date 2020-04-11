import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCovidDataInCountry } from '../redux/actions/covidAction'

import Chart from '../components/Chart'

const CountryGraph = (props) => {
  const { confirmed, deaths } = props.covidInTheCountry
  const { getCovidDataInCountry } = props

  useEffect( () => {
    getCovidDataInCountry('Mexico')
  }, [])

  return(
    <div>
      <h1>Datos de Pais</h1>
      <Chart confirmed={confirmed} deaths={deaths} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  covidInTheCountry : state.covidInTheCountry
})

const mapDispatchToProps = {
  getCovidDataInCountry
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryGraph)