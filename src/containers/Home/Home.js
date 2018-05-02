import React, { Component } from 'react';

import classes from './Home.css';
import Aux from '../../hoc/Aux';
import Navbar from '../Navbar/Navbar';
import Header from '../../components/Sections/Header/Header';
import About from '../../components/Sections/About/About';

class Home extends Component {
  pageItems = {
    navItems: [
      {name: 'About', link: '#'},
      {name: 'Facilities', link: '#'},
      {name: 'Pricing', link: '#'},
      {name: 'Subscribe', link: '#'},
      {name: 'Courses', link: '#'},
      {name: 'Contact', link: '#'}
    ],
    whatWeDo: [
      {
        name: 'Incubation',
        icon: 'fab fa-fort-awesome',
        description: 'Call us the boarding school for the stirred ones. We want to catch them young, raise them, mentor them and make them ready for the market'
      },
      {
        name: 'Coworking',
        icon: 'fas fa-users',
        description: 'Our hubs are designed for creatives, freelancers, independents and startups to be an inspiring environment to work and collaborate.'
      },
      {
        name: 'Startup course',
        icon: 'far fa-newspaper',
        description: 'Given that we have successfully founded and grown some of the leading education ventures of the country, we are  now working along with govt, universities and private players to foster startup education for young minds.'
      },
      {
        name: 'Technology',
        icon: 'fas fa-tachometer-alt',
        description: 'We’ve done it for years, best products, biggest brands. Our tech venture has offices in US, UK and India and is serving clients across the globe.'
      },
      {
        name: 'Growth hacking',
        icon: 'fas fa-chart-line',
        description: 'We jumpstart startups by helping them achieve their growth milestones. Our experts work along with you at every step'
      },
      {
        name: 'Investments',
        icon: 'far fa-money-bill-alt',
        description: 'We invest our own money as well as work along with a network of few hundred angels and VC’s to get you the capital you need.'}
    ]
  }

  render() {
    return (
      <Aux>
        <Navbar navItems = {this.pageItems.navItems}/>
        <Header />
        <About whatWeDo = {this.pageItems.whatWeDo}/>
      </Aux>
    );
  }
}

export default Home;
