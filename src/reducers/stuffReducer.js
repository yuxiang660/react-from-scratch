import actions from '../actions';

const stuffReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GOT_STUFF: return action.data
    default: return state
  }
}

export default stuffReducer;
