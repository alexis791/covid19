import { COVID_INFO } from '../types'

const initialState = {
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
    case COVID_INFO:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}

export default covidReducer
