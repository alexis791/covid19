import { COVID_INFO, COVID_INFO_GLOBALLY } from '../types'

const initialState = {
  population: 0,
  flag:'',
  confirmed: 0,
  recovered: 0,
  deaths: 0,
  globally: {
    totalConfirmed: 0,
    totalRecoverds: 0,
    totalDeaths: 0,
    daily: {
      confirmed: [{x:"2020-01-20", y:0}],
      deaths: [{x:"2020-01-20", y:0}]
    }
  }
}

const covidReducer = (state=initialState, action) => {
  switch (action.type) {
    case COVID_INFO:
      return {
        ...state,
        ...action.payload
      }

    case COVID_INFO_GLOBALLY:
      return {
        ...state,
        globally:{
          ...action.payload
        }
      }
  
    default:
      return state;
  }
}

export default covidReducer
