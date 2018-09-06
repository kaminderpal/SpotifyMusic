import React, { Component, Fragment } from 'react'
import {Route,Switch} from 'react-router-dom';
import Home from '../Containers/home';
import Search from '../Containers/search';
import PrivateRoute from './privateRoute';
import Album from '../Containers/album'
export class Router extends Component {
  render() {
    return (
      <Fragment>
           <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/search" component={Search} />
                <PrivateRoute path ="/album/:name/:id" component={Album}/>
           </Switch>
      </Fragment>
    )
  }
}

export default Router
