import React, { Component } from 'react'
import { Login } from '../Components/Login/login';
import { withRouter } from 'react-router-dom'
import Session from '../Config/util';
import { connect } from 'react-redux';
import { authenticating,authenticated  } from '../Reducers/Actions/actions';
import PropTypes from 'prop-types';

export class Home extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          token : {}
       }
     }
     componentDidMount(){
          this.props.authenticating();
     }
     /**
      * Set Token in Session  storage
      * Authenticate the user token 
      * @param {*} token 
      */
     setToken(token){
      if( Object.keys(token).length > 0  ){
          this.setState({token : token});
          Session.setToken(token);
          this.props.authenticated(token);
          this.props.history.push("/search");
      }     
     }  
  
     render() {
      return(   
        <div>
            <Login token={ (e) => this.setToken(e) }/> 
         </div>
      );    
  }
}
Home.propTypes ={
  token : PropTypes.object.isRequired,
  isLoggedIn : PropTypes.bool
}
const mapStateToProps = state => ({
  token : !state.auth.access_token ? {}: state.auth.access_token , 
  isLoggedIn : state.auth.isLoggedIn
});


export default withRouter( connect(mapStateToProps,{ authenticating,authenticated })(Home) );
