import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
const App = props => <div>
  <RaisedButton label={props.buttonText} onClick={props.onClick} />
</div>
App.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
App.defaultProps = {
  buttonText: 'Default-Text',
  onClick: () => console.log('default click action')
}
export default App;