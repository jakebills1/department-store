import React, { Component, Fragment } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar'
import About from './components/About';
import Departments from './components/Departments';
import NoMatch from './components/NoMatch';
import { Route, Switch, } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/departments" component={Departments} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Fragment>


    );
  }
}

export default App;
