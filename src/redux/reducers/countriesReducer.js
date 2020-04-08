import { ALL_COUNTRIES } from '../types'
const initialState = []

const countriesReducer = ( state = initialState, action) => {
  switch (action.type) {
    case ALL_COUNTRIES:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
}

export default countriesReducer