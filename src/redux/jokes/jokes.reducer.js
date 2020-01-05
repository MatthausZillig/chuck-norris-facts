const INITIAL_STATE = {
  jokes: []
}

const jokesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_JOKES':
      return {
        ...state,
        jokes: action.payload
      }
    default:
      return state
  }
}

export default jokesReducer
