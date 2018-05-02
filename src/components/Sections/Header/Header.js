import React from 'react';

import classes from './Header.css';
import Logo from '../../Logo/Logo';

const header = () => {
  return (
    <div className={classes.background}>
      <div className={classes.Section + " section"}>
        <div className={classes.Container + " container"}>
          <div className={classes.Row + " row"}>

            <div className={classes.topHeading + " col-md-12"}>
              <div className={classes.heading}><Logo /></div>
              <div className={classes.subheading}>Cowork, Create, Conquer.</div>
            </div>

            <div className="col-md-6">
              <div className={classes.customCard}>
                <h2 className={classes.customCardHeader}><i className={classes.Icon + " fas fa-people-carry"}></i>Co-work</h2>
                <div className={classes.customCardBody}>
                  Our hubs are designed for creatives, freelancers, independents and startups to be an inspiring environment to work and collaborate.
                </div>
                <a className={ ' ' + classes.CustomCardButton + " btn btn-info"}>Co-working plans</a>
              </div>
            </div>

            <div className="col-md-6">
              <div className={classes.customCard}>
                <h2 className={classes.customCardHeader}><i className={classes.Icon + " fas fa-folder-open"}></i>Startup Courses</h2>
                <div className={classes.customCardBody}>
                  Having successfully funder education intitiatives, we are now working along with govt, universities and private players to foster startup education for young minds.
                </div>
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
