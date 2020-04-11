import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllCountries } from '../../redux/actions/countriesAction'
import { getDataOfCovid } from '../../redux/actions/covidAction'

const Select = (props) => {
  console.log('SELECT', props)
  const {countries,
    getAllCountries,
    getDataOfCovid
  } = props

  useEffect( () => {
    getAllCountries()
    getDataOfCovid('mex')
  },[])

  const handleCountry = (event) => {
    getDataOfCovid(event.target.value)
  }

  return (
    <select className="Select"
    onChange={handleCountry}>
      <option value="">Seleccione un pais</option>
    {
      countries.map((country, key) => (
      <option key={key} value={country.iso3}>{ country.name }</option>
      ))
    }
    </select>
  )
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries
  }
}

const mapDispatchToProps = {
  getAllCountries,
  getDataOfCovid
}

export default connect(mapStateToProps, mapDispatchToProps)(Select)