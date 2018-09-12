import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NotFound from './components/error/NotFound';
import Menu from './components/menu/Menu';
import routes from './routes';

//finish 75

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            {/* <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} /> */}
            {this.showRoutesMenu(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showRoutesMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.main}
          />
        );
      });
    }
    return result;
  }
}

export default App;
