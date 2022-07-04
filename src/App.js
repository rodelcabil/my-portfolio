import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import About from './LandingPage/About/about';
import Contact from './LandingPage/Contact/contact';

import Home from './LandingPage/Home/home';
import Navbar from './LandingPage/Navbar/navbar';
import WorksPage from './LandingPage/Works/works';
import ScrollToTop from './scrollToTop';

function App() {
  return (
    <Router>
        <Navbar/>
        <GlobalStyle />
        <ScrollToTop/>
        <Switch>
          <Route  path="/" component={Home} exact/>
          <Route  path="/works" component={WorksPage} />
          <Route  path="/contact" component={Contact} />
           <Route  path="/about" component={About} />
        </Switch>
        
    </Router>
  );

}

export default App;
