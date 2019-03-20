import React, { Component, Fragment } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar'
import About from './components/About';
import Departments from './components/Departments';
import NoMatch from './components/NoMatch';
import AddItem from './components/AddItem';
import ViewDepartment from './components/ViewDepartment';
import EditDepartment from './components/EditDepartment';
import EditItem from './components/EditItem';
import { Route, Switch, } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/departments" component={Departments} />
            <Route exact path="/departments/:id" component={ViewDepartment} />
            <Route exact path="/departments/:id/edit" component={EditDepartment} />
            <Route exact path="/departments/:id/items" component={AddItem} />
            <Route exact path="/departments/:id/items/:item_id" component={EditItem} />
            <Route component={NoMatch} />
          </Switch>
        </AppContainer>
      </Fragment>
    );
  }
}

const AppContainer = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  background: linear-gradient( to bottom right, teal, black);
`

export default App;
