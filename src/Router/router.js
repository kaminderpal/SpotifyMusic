import React, { Component, Fragment } from 'react'
import {Route,Switch,withRouter} from 'react-router-dom';
import Home from '../Containers/home';
import Search from '../Containers/search';
import PrivateRoute from './privateRoute';
import Album from '../Containers/album'
import LogoutButton from '../Components/Logout/logout'
import { logout } from '../Reducers/Actions/utilActions'
import { connect } from 'react-redux'
import Session from '../Config/util';
import NoMatch from '../Components/NoMatch/noMatch';

export class Router extends Component {

  logout(e){
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
    Session.clearToken();
  }

  render() {
    return (
      <Fragment>
          {  this.props.location.pathname !== "/" ?  <LogoutButton onClick={ (e) => this.logout(e) } /> : null }
           <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/search" component={Search} />
                <PrivateRoute path ="/album/:name/:id" component={Album}/>
                <Route component={NoMatch} />
           </Switch>
      </Fragment>
    )
  }
}

export default withRouter( connect(null,{logout})(Router) );
