import { ALL_COUNTRIES, LOADING_COUNTRIES, ERROR_COUNTRIES } from '../types'
import axios from 'axios'

export const getAllCountries = () => {
  return async (dispatch) => {

    try {
      dispatch({
        type: LOADING_COUNTRIES
      })
      const countries = await axios.get('https://covid19.mathdro.id/api/countries/')
      dispatch({
        type: ALL_COUNTRIES,
        payload: countries.data.countries
      })
    } catch (error) {
      dispatch({
        type: ERROR_COUNTRIES,
        error: error.message
      })
    }

  }
}