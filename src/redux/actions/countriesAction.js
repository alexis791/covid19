import { ALL_COUNTRIES } from '../types'
import axios from 'axios'

export const getAllCountries = () => {
  return async (dispatch) => {
    const countries = await axios.get('https://covid19.mathdro.id/api/countries/')
      dispatch({
        type: ALL_COUNTRIES,
        payload: countries.data.countries
      })

  }
}