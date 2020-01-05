import { combineReducers } from 'redux'

import categoriesReducer from './categories/categories.reducer'
import jokesReducer from './jokes/jokes.reducer'

export default combineReducers({
  categoriesReducer,
  jokesReducer
})
