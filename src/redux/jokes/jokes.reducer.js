const INITIAL_STATE = {
  categoryJokes: []
}

const jokesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_JOKE':
      return {
        ...state,
        categoryJokes: action.payload
      }
    default:
      return state
  }
}

export default jokesReducer
