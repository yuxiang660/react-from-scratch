import { connect } from 'react-redux'
import actions from '../actions'
import TheComponent from '../components/App';

const mapStateToProps = (stateFromCombineReducers, ownProps) => {
  return {
    buttonText: stateFromCombineReducers.stateFromReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: actions.BASIC_ACTION, actionPayload: 'new text' })
    }
  }
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent)

export default App;
