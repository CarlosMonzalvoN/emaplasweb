import React , { Component } from 'react';
import './App.css'

import NavBar from "./components/Navegation"
import Footer from "./components/Footer"
import Products from './pages/Products';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
          <ScrollToTop />
            <div>
              <NavBar />
              <Redirect
              from="home"
              to="/" />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
