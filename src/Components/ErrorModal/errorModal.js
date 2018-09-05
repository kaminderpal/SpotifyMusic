import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min';

export class ErrorModal extends Component {
  
  componentDidMount(){
    M.Modal.init(document.querySelectorAll('.modal'), { dismissible : false }); 
    var instance = M.Modal.getInstance(document.getElementById('errorModal'));
    instance.open();
  }
  render() {
    return (
      <div id="errorModal" className="modal">
          <div className="modal-content">
               <h4>Session Expired</h4>
               <p>Spotify Session expired because of implicit grant flow authorization.</p>
          </div>
          <div className="modal-footer">
               <NavLink to="/" className="modal-close waves-effect waves-green btn-flat">OK</NavLink>
          </div>
       </div>
    )
  }
}

export default ErrorModal
