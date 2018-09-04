import React, { Component, Fragment } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from '../Containers/home';
import Search from '../Containers/search';
import PrivateRoute from './privateRoute';

export class Router extends Component {
  render() {
    return (
      <Fragment>
           <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/search" component={Search} />
           </Switch>
      </Fragment>
    )
  }
}

export default Router
