import { ALL_COUNTRIES, LOADING_COUNTRIES, ERROR_COUNTRIES } from '../types'
const initialState = {
  countries : [],
  loading: false,
  error: false
}
const countriesReducer = ( state = initialState, action) => {
  switch (action.type) {
    case LOADING_COUNTRIES:
      return {
        ...state,
        loading: true,
        error: false
      }
    case ALL_COUNTRIES:
      return {
        ...state,
        countries: [
          ...action.payload
        ],
        loading: false,
        error: false
      };
    case ERROR_COUNTRIES:
      return {
        ...state,
        loading: true,
        error: false
      }
    default:
      return state;
  }
}

export default countriesReducer