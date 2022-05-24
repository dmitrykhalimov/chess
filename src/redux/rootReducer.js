const initalState = {
  highlightedCell: ''
};

export default function rootReducer(state = initalState, action) {
  switch(action.type) {
    case 'SELECT_CELL':
      console.log(action.payload)
      return {
        highlightedCell: action.payload,
      }
    default: 
      return state
  }
}