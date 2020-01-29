import actions from '../actions'

const basicReducer = (state = 'Initial Text', action) => {
  switch (action.type) {
    case actions.BASIC_ACTION: return action.actionPayload
    default: return state
  }
}
export default basicReducer;
