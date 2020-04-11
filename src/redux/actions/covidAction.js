import axios from 'axios'
import { 
  COVID_INFO,
  COVID_INFO_GLOBALLY,
  LOADING_COVID_INFO,
  ERROR_COVID_INFO,
  LOADING_COVID_INFO_GLOBALLY,
  ERROR_COVID_INFO_GLOBALLY
 } from '../types'

export const getDataOfCovid = (country) => {
  return async (dispatch) => {
    const covidInfo =  axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
    const countryInfo =  axios.get(`https://restcountries.eu/rest/v2/alpha/${country}`)

    try {
      dispatch({
        type: LOADING_COVID_INFO
      })

      const data = await Promise.all([covidInfo, countryInfo])

      const response = { 
        name: data[1].data.translations.es,
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
      
    } catch (error) {
      dispatch({
        type: ERROR_COVID_INFO,
        error: error.message 
      })
    }

   
  }
}

export const getDataOfCovidGlobally = () => {
    return async (dispatch) => {

      dispatch({
        type: LOADING_COVID_INFO_GLOBALLY
      })

      const covidGeneralInfo = axios.get(`https://covid19.mathdro.id/api`)
      const covidDailyInfo = axios.get(`https://covid19.mathdro.id/api/daily`)

      try {

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
        
      } catch (error) {

        dispatch({
          type: ERROR_COVID_INFO_GLOBALLY,
          error: error.message
        })

      }
      
      
    }
}

