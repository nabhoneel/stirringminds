import React, { Component } from 'react';

import classes from './Home.css';
import Aux from '../../hoc/Aux';
import Navbar from '../Navbar/Navbar';
import Header from '../../components/Sections/Header/Header';
import About from '../../components/Sections/About/About';
import CEO from '../../components/Sections/CEO/CEO';
import Facilities from '../../components/Sections/Facilities/Facilities';
import WhoWeAre from '../../components/Sections/WhoWeAre/WhoWeAre';

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
        topColor: '#8BC34A',
        icon: 'fab fa-fort-awesome',
        description: 'Call us the boarding school for the stirred ones. We want to catch them young, raise them, mentor them and make them ready for the market'
      },
      {
        name: 'Coworking',
        topColor: '#E04919',
        icon: 'fas fa-users',
        description: 'Our hubs are designed for creatives, freelancers, independents and startups to be an inspiring environment to work and collaborate.'
      },
      {
        name: 'Startup course',
        topColor: '#607D8B',
        icon: 'far fa-newspaper',
        description: 'Given that we have successfully founded and grown some of the leading education ventures of the country, we are  now working along with govt, universities and private players to foster startup education for young minds.'
      },
      {
        name: 'Technology',
        topColor: '#00BCD4',
        icon: 'fas fa-tachometer-alt',
        description: 'We’ve done it for years, best products, biggest brands. Our tech venture has offices in US, UK and India and is serving clients across the globe.'
      },
      {
        name: 'Growth hacking',
        topColor: '#FF9800',
        icon: 'fas fa-chart-line',
        description: 'We jumpstart startups by helping them achieve their growth milestones. Our experts work along with you at every step'
      },
      {
        name: 'Investments',
        topColor: '#9C27B0',
        icon: 'far fa-money-bill-alt',
        description: 'We invest our own money as well as work along with a network of few hundred angels and VC’s to get you the capital you need.'}
    ],
    stats: [
      {
        attribute: 'Startups',
        number: '210',
        icon: 'far fa-building',
      },
      {
        attribute: 'Events',
        number: '360',
        icon: 'far fa-calendar-alt',
      },
      {
        attribute: 'Startups Funded',
        number: '7/10',
        icon: 'far fa-money-bill-alt',
      },
      {
        attribute: 'Mentors',
        number: '450',
        icon: 'far fa-compass',
      }
    ],
    facilities: [
      {name: 'High speed WiFi', icon: 'fas fa-wifi'},
      {name: 'Mentorship', icon: 'fas fa-info-circle'},
      {name: 'X-Box Kinect', icon: 'fas fa-gamepad'},
      {name: 'Rooftop cafe', icon: 'fas fa-coffee'},
      {name: 'Lockers', icon: 'fas fa-unlock-alt'},
      {name: 'Conference Rooms', icon: 'fas fa-users'},
      {name: 'Power backup', icon: 'fas fa-battery-full'},
      {name: '24/7 Working', icon: 'far fa-clock'},
      {name: 'Printing/Scanning', icon: 'fas fa-print'},
      {name: 'Warehousing', icon: 'fas fa-warehouse'},
      {name: 'Inhouse Courier', icon: 'fas fa-envelope'},
      {name: 'IT/HR/Admin', icon: 'fas fa-sitemap'}
    ]
  }

  render() {
    return (
      <Aux>
        <Navbar navItems = {this.pageItems.navItems} />
        <Header />
        <About whatWeDo = {this.pageItems.whatWeDo} />
        <Facilities items = {this.pageItems.facilities} />
        <CEO stats = {this.pageItems.stats} />
        <WhoWeAre />
      </Aux>
    );
  }
}

export default Home;
