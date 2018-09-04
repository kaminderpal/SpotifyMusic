import React,{Component} from 'react'
import './login.css';
import API from '../../Config/api';

export class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       error : "",
    }
  }
  getSearchQuery(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var idx = sURLVariables[i].indexOf('=');
        var sParameterName = sURLVariables[i].slice( 0, idx );
        var sParameterValue = sURLVariables[i].slice( idx+1, sURLVariables[i].length );

        if (sParameterName === sParam) 
        {
            return sParameterValue;
        }
    }
    return "";
  }
  
  componentDidMount() {
    this.setState({error:this.getSearchQuery("error")});
    this.props.token( this.getHashParams() );
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  render() {
    return (
      <div className='container login-container'>
          <div className='row valign-wrapper'>
               <div className='col s12'>
                    <div className='card p-2 center'>
                         <div>
                              <h3>Musically</h3>
                         </div>
                         <div className='p-2'>
                             <a href={API.URL_SPOTIFY_AUTH}  className='waves-effect waves-light btn'>
                              Connect With Spotify
                              </a>
                         </div>
                         { !this.state.error.length  ? null :  
                                                                <div className='red-text'> 
                                                                    <h6>Access-denied</h6> 
                                                                </div>
                         }
                    </div>
               </div>
          </div>
     </div>
    )
  }
}
export default Login;
