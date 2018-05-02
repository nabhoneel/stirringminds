import React from 'react';

import classes from './About.css';

const about = (props) => {
  let cards = props.whatWeDo.map((item, index) => {
    return (
      <div key={index} className="col-sm-4">
        <div key={index} className={classes.Card}>
          <span className={classes.Logo}><i className={item.icon}></i></span>
          <h2 className={classes.CardName}>
            {item.name}
          </h2>
          <p className={classes.CardBody}>
            {item.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.Section + " section"}>
      <div className="container">
        <div className="row">
          <div className={classes.Heading + " col-sm-12"}>
            <h1>What we do</h1>
            <h4>Stirring Minds maintains a portfolio spanning multiple sectors. Disruptive technology is our unifying theme.</h4>
          </div>
          {cards}
        </div>
      </div>
    </div>
  );
}

export default about;
