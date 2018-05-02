import React from 'react';

import icon from '../../assets/img/StirringMinds-logo.png';
import classes from './Logo.css';

const logo = () => (
  <span className={classes.Logo}><img src={icon} alt="Stirring Minds Logo" /></span>
);

export default logo;
