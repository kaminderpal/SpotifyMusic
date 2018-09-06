import React from 'react'
import { Redirect, Route } from 'react-router-dom';

import Session from '../Config/util';

const PrivateRoute = ( { component: Component, ...rest } ) => {
     return <Route {...rest} render={props => (
          Session.getToken() !== null ? ( 
          <Component {...props} /> ) :
          <Redirect to={{
               pathname : "/",
               state : { from: props.location }
          }} />
     ) } />
}

export default PrivateRoute
