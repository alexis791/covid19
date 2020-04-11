import { COVID_INFO_GLOBALLY } from '../types'

  const initialState = {
    totalConfirmed: 0,
    totalRecoverds: 0,
    totalDeaths: 0,
    daily: {
      confirmed: [{x:"2020-01-20", y:0}],
      deaths: [{x:"2020-01-20", y:0}]
    }
  }

  const covidGlobally = (state=initialState, action) => {
    switch (action.type) {
      case COVID_INFO_GLOBALLY:
        return {
          ...state,
          ...action.payload
        }
    
      default:
        return state;
    }
  }

  export default covidGlobally
 