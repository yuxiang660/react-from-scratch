import { connect } from 'react-redux';
import actions from '../actions/';
import TheComponent from '../components/Menu';
const mapStateToProps = (state, ownProps) => {
  return {
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: actions.GET_STUFF })
    }
  }
}
const Menu = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheComponent)
export default Menu;