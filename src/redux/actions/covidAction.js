import axios from 'axios'
import { COVID_INFO, COVID_INFO_GLOBALLY } from '../types'

export const getDataOfCovid = (country) => {
  console.log(country)
  return async (dispatch) => {
    const covidInfo = axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
    const countryInfo = axios.get(`https://restcountries.eu/rest/v2/alpha/${country}`)

    const data = await Promise.all([covidInfo, countryInfo])
    console.log(data)
    const response = { 
      name: data[1].data.name,
      area: data[1].data.area,
      population: data[1].data.population,
      flag: data[1].data.flag,
      confirmed: data[0].data.confirmed.value,
      recovered: data[0].data.recovered.value,
      deaths: data[0].data.deaths.value,
      lastUpdate: data[0].data.lastUpdate
    }
    dispatch({
      type: COVID_INFO,
      payload: response
    })
  }
}

export const getDataOfCovidGlobally = () => {
    return async (dispatch) => {
      const covidGeneralInfo = axios.get(`https://covid19.mathdro.id/api`)
      const covidDailyInfo = await axios.get(`https://covid19.mathdro.id/api/daily`)

      // let fechas = covidDailyInfo.data.map( data => {
      //   return data.reportDate
      // })

      // let promesas = []

      // covidDailyInfo.data.map( data => {
      //   promesas.push(axios.get(`https://covid19.mathdro.id/api/daily/${data.reportDate}`))
      // })

      // const datos = await Promise.all(promesas)

      // const newDatos = datos.map( ({data}) => (
      //   [
      //     ...data
      //   ]
      // ))

      // const mexico = newDatos.flat(1).filter( country => {
      //   return country.countryRegion === 'Mexico'
      // })

      

      const data = await Promise.all([covidDailyInfo, covidGeneralInfo])
      let dataSetConfirmed = []
      let dataSetDeaths = []

      data[0].data.map( day => {
        dataSetConfirmed.push({
          x: day.reportDate,
          y: day.confirmed.total
        })
        dataSetDeaths.push({
          x: day.reportDate,
          y: day.deaths.total
        })
      })
        
      const response = {
        totalConfirmed: data[1].data.confirmed.value,
        totalRecovered: data[1].data.recovered.value,
        totalDeaths: data[1].data.deaths.value,
        daily: {confirmed: dataSetConfirmed, deaths: dataSetDeaths }
      }
      
      dispatch({
        type: COVID_INFO_GLOBALLY,
        payload: response
      })
    }
}

