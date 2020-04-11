import { 
  COVID_INFO_GLOBALLY,
  LOADING_COVID_INFO_GLOBALLY,
  ERROR_COVID_INFO_GLOBALLY
} from '../types'

  const initialState = {
    loading: false,
    error: false,
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
      case LOADING_COVID_INFO_GLOBALLY: 
      return{
        ...state,
        loading: true,
        error: false
      }

      case COVID_INFO_GLOBALLY:
        return {
          ...state,
          ...action.payload,
          loading: false,
          error: false
        }

      case ERROR_COVID_INFO_GLOBALLY: 
      return {
        ...state,
        loading: false,
        error: true
      }
    
      default:
        return state;
    }
  }

  export default covidGlobally
 