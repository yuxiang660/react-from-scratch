import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
const Menu = props => <AppBar
  title="Our project"
  onTitleClick={props.goHome}
  iconElementRight={<FlatButton label="Show stuff" />}
  onRightIconButtonClick={props.onClick}
/>
Menu.propTypes = {
  goHome: PropTypes.func.isRequired
}
Menu.defaultProps = {
  goHome: () => console.log('going home')
}
export default Menu;
