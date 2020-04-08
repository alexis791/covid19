import axios from 'axios'
import { COVID_INFO, COVID_INFO_GLOBALLY } from '../types'

export const getDataOfCovid = (country) => {
  console.log(country)
  return async (dispatch) => {
    const covidInfo = axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
    const countryInfo = axios.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)

    const data = await Promise.all([covidInfo, countryInfo])

    const response = { 
      population: data[1].data[0].population,
      flag: data[1].data[0].flag,
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
      const covidDailyInfo = axios.get(`https://covid19.mathdro.id/api/daily`)

      const data = await Promise.all([covidDailyInfo, covidGeneralInfo])
      let dataSetConfirmed = []
      let dataSetDeaths = []

      console.log(data[0].data)

      data[0].data.map( day => {
        dataSetConfirmed.push({
          x: new Date(day.reportDate),
          y: day.confirmed.total
        })
        dataSetDeaths.push({
          x: new Date(day.reportDate),
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

