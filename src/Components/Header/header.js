import React from 'react'
import {NavLink} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min';
import Logout from '../Logout/logout';

const Header = (props) => {
  return (
     <div className="row mt-3">
          <form className="col s12">
               <div className="row">
                    <div className="input-field col s12">
                         {/* <i className="material-icons prefix">search</i> */}
                         <input id="icon_prefix" 
                                type="text" 
                                disabled={ props.disabled }
                                className={ `validate ` + props.classname } 
                                value = { props.value }
                                onChange={ event => props.onSearch(event)}
                                />
                                { !props.disabled ? <label htmlFor="icon_prefix">Search Artists</label> : null }
                         
                    </div>
               </div>
          </form>
     </div>
  )
}

export default Header
