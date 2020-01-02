import { combineReducers } from 'redux'

import jokesReducer from './jokes/jokes.reducer'

export default combineReducers({
  data: jokesReducer
})
