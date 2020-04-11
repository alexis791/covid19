import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllCountries } from '../../redux/actions/countriesAction'
import { getDataOfCovid } from '../../redux/actions/covidAction'
import { LoaderSmall } from '../../components/Loaders'

const Select = (props) => {
  const {
    getAllCountries,
    getDataOfCovid,
    lastUpdate
  } = props

  const { loading, error, countries } = props.countries

  useEffect( () => {
    getAllCountries()
    getDataOfCovid('mex')
  },[])

  const handleCountry = (event) => {
    getDataOfCovid(event.target.value)
  }

  return (
    <>
    { loading ?
       <LoaderSmall />
      : (
        <>
        <select className="Select"
        onChange={handleCountry}>
          <option value="">Seleccione un pais</option>
        {
          countries.map((country, key) => (
          <option key={key} value={country.iso3}>{ country.name }</option>
          ))
        }
        </select>
        <p className="Update">Ultima Actualización <b>{lastUpdate}</b></p>
        </>
      )}
    </>
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