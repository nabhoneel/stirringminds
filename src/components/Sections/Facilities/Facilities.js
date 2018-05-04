import React from 'react';

import classes from './Facilities.css';

const facilities = (props) => {
  return (
    <div className={classes.Section + ' section'}>
      <div className = {classes.Container + ' container'}>
        <h1>We make sure your startup is at the right place</h1>
        <div className={classes.Slider + ' slick-slider'}>
          {props.items.map((item, index) => {
            return (
              <div className={classes.Facility} key={index}>
                <span className={classes.Icon}><i className={item.icon}></i></span>
                <h3 className={classes.Name}>{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default facilities;
