const basicReducer = (state = 'Initial Text', action) => {
  switch (action.type) {
    case 'BASIC_ACTION': return action.actionPayload
    default: return state
  }
}
export default basicReducer;
