import { combineReducers } from 'redux'
import countriesReducer from './reducers/countriesReducer'
import covidReducer from './reducers/covidReducer'

const store = combineReducers({
  countries : countriesReducer,
  covid: covidReducer
})

export default store
