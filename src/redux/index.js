import { combineReducers } from 'redux'
import countriesReducer from './reducers/countriesReducer'
import covidReducer from './reducers/covidReducer'
import covidGlobally from './reducers/covidGlobally'

const store = combineReducers({
  countries : countriesReducer,
  covid: covidReducer,
  global: covidGlobally
})

export default store
