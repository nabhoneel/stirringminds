import React from 'react';

import classes from './CEO.css';
import ceoImage from '../../../assets/img/pranav_bhatia.png';

const stats = (props) => {
  let items = [...props.stats].map((item, index) => {
    return (
      <div key={index} className={classes.StatsCol + " col-sm-6"}>
        <div className={classes.Stats}>
          <div className={classes.Icon}><i className={item.icon}></i></div>
          <div className={classes.Number}>{item.number}</div>
          <div className={classes.Attribute}>{item.attribute}</div>
        </div>
      </div>
    );
  });

  return (
    <div className = {classes.Section + ' section'}>
      <div className = {classes.Container + ' container'}>
        <div className = {classes.Row + ' row'}>
          <div className={classes.Col + ' col-lg-4'}>
            <div className={classes.CEOQuote}>
              <blockquote>
                I started Stirring Minds as a platform to allow me and others associated to give back to the community, which in return enables us to grow further each day, in ways more than one<br /><br /><span>~ Pranav Bhatia, Founder</span>
              </blockquote>
            </div>
          </div>
          <div className={classes.CEOContainer + " col-lg-3"}>
            <div className={classes.CEOPhoto}><img src={ceoImage} /></div>
          </div>
          <div className={classes.StatsSection + " col-lg-5"}>
            <div className={classes.StatsRow + " row"}>
              {items}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stats;
