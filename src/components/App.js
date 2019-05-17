import React from 'react';
import {  
Grommet, 
ResponsiveContext,
} from 'grommet';
import Navigation from './Navigation';
import Line from './Line';
import TopBanner from './TopBanner';
import Intro from './Intro';
import Neuroscience from './Neuroscience';
import Web from './Web';
import Editorial from './Editorial';
import Footer from './Footer';

// import { BrowserRouter as Router, Route } from "react-router-dom";


const theme = {
  global: {
    colors: {
      lightBlue: 'rgb(180,218,229)',
      lavender: 'rgb(197,205,230)',
      banner: '#b2a297',
      peach: '#d0bbad',
      bodyText: 'rgb(115,115,115)',
      control: 'white',
    },
    font: {
      family: 'Open Sans',
      size: '14px',
      height: '20px',
      weight: '300'
    },
  },
};

class App extends React.Component {

  render() {
    return (
        <Grommet theme={theme} full>
          <Navigation />
          <TopBanner />
          <Intro />
          <Line />
          <Neuroscience />
          <Web />
          <Editorial />
          <Footer />
        </Grommet>
    );
  }
}
export default App;
