import React from 'react';

import classes from './About.css';
import Aux from '../../../hoc/Aux';

const about = (props) => {
  let cards = props.whatWeDo.map((item, index) => {
    let localStyle = {
      borderTop: '3px solid ' + item.topColor,
      backgroundColor: item.topColor
    }
    return (
      <div key={index} className="col-md-4">
        <div key={index} className={classes.Card}>
          <div className={classes.CardHeader} style={localStyle}>
            <span className={classes.Logo}><i className={item.icon}></i></span>
            <h2 className={classes.CardName}>
              {item.name}
            </h2>
          </div>
          <p className={classes.CardBody}>
            {item.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <Aux>
      <div className={classes.Section + " section"}>
        <div className={classes.Container + " container"}>
          <div className="row">
            <div className={classes.Heading + " col-sm-12"}>
              <h1>What we do</h1>
              <h4>Stirring Minds maintains a portfolio spanning multiple sectors. Disruptive technology is our unifying theme.</h4>
            </div>
            {cards}
          </div>
        </div>
      </div>
    </Aux>
  );
}

export default about;
