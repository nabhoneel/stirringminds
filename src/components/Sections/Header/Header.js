import React from 'react';

import classes from './Header.css';
import Logo from '../../Logo/Logo';
import CafePhoto from '../../../assets/img/cafe.jpg';
import MeetingPhoto from '../../../assets/img/StirringMinds-Coworking-Gurgaon.jpg';

const header = () => {
  return (
    <div className={classes.Section + " section"}>
      <div className={classes.Container + " container"}>
        <div className={classes.Row + " row"}>

          <div className={classes.topHeading + " col-md-12"}>
            <div className={classes.heading}><Logo /></div>
            <div className={classes.subheading}>Cowork, Create, Conquer.<br /></div>
          </div>

          <div className="col-md-6">
            <div className={classes.customCard}>
              <div className={classes.customCardImage}><img src={CafePhoto} /></div>
              <div className={classes.customCardBody}>
                <h2 className={classes.customCardHeader}>Co-work</h2>
                Our hubs are designed for creatives, freelancers, independents and startups to be an inspiring environment to work and collaborate.
                <a className={ ' ' + classes.CustomCardButton + " btn btn-info"}>Co-working plans</a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className={classes.customCard}>
              <div className={classes.customCardImage}><img src={MeetingPhoto} /></div>
              <div className={classes.customCardBody}>
                <h2 className={classes.customCardHeader}>Startup Courses</h2>
                Having successfully funder education intitiatives, we are now working along with govt, universities and private players to foster startup education for young minds.
                <a className={ ' ' + classes.CustomCardButton + " btn btn-info"}>Courses</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default header;
