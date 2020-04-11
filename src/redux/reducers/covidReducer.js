import { COVID_INFO, LOADING_COVID_INFO, ERROR_COVID_INFO } from '../types'

const initialState = {
  loading: true,
  error: false,
  name: '',
  area: 0,
  population: 0,
  flag:'',
  confirmed: 0,
  recovered: 0,
  deaths: 0
}

const covidReducer = (state=initialState, action) => {
  switch (action.type) {
    case LOADING_COVID_INFO:
      return {
        ...state,
        loading: true,
        error: false
      }
    case COVID_INFO:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: false
      }

    case ERROR_COVID_INFO:
      return{
        ...state,
        loading: false,
        error: true
      }

    default:
      return state;
  }
}

export default covidReducer
