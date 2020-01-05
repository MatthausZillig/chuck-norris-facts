const INITIAL_STATE = {
  categoryJokes: []
}

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categoryJokes: action.payload
      }
    default:
      return state
  }
}

export default categoriesReducer
