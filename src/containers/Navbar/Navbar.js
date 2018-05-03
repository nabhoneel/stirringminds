import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';

import classes from './Navbar.css';
import Aux from '../../hoc/Aux';
import Logo from '../../components/Logo/Logo';
import menuIcon from '../../assets/img/menu.png';

class Navbar extends Component {
  render() {
    let navItems = [...this.props.navItems];

    let HBMenuItems = navItems.map((navItem, index) => {
      return (
        <a key={'HBM' + index} id={navItem.name} className={'menu-item ' + classes.NavItem} href={navItem.link}>
          {navItem.name}
        </a>
      );
    });

    let styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: 'white',
        borderRadius: '5px',
        height: '25%',
        boxShadow: '#673AB7 0px 0px 5px -0.5px',
        background: '#ffffff'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        height: '-webkit-fill-available'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }

    return (
      <Aux>
        <Menu styles={styles} right className="HBM">
          {HBMenuItems}
        </Menu>
      </Aux>
    );
  }
}

export default Navbar;
