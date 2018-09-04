import React, { Component } from 'react'
import { Login } from '../Components/Login/login';
import { Redirect } from 'react-router-dom'
import Session from '../Config/util';
import { connect } from 'react-redux';
import { authenticating,authenticated  } from '../Reducers/Actions/actions';

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
     setToken(token){
      if( Object.keys(token).length > 0  ){
          this.setState({token : token});
          Session.setToken(token);
          this.props.authenticated(token);
      }     
      
     }  
  
     render() {
      return(   <div>
        {  Object.keys(this.state.token).length > 0 ? <Redirect push to="/search"/> :  <Login token={ (e) => this.setToken(e) }/>  }
         </div>
      );    
  }
}

const mapStateToProps = state => ({
  token : state.auth.access_token,
  isLoggedIn : state.auth.isLoggedIn
});


export default connect(mapStateToProps,{ authenticating,authenticated })(Home);
