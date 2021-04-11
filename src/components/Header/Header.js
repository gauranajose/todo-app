import React from 'react';

import classes from './Header.css'
import iconSun from '../../assets/images/icon-sun.svg';
import iconMoon from '../../assets/images/icon-moon.svg'

const header = (props) => (
  <div className={classes.Header}>
    <h2>TODO</h2>
    <img src={props.darkMode ? iconSun : iconMoon} alt='icon-sun' onClick={props.changeDisplay} />
  </div>
);

export default header;