import React, { Component, Fragment } from 'react';
import './App.css';
import  Router  from './Router/router';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Fragment>
            <Router/>
        </Fragment>
        </Provider>
    );
  }
}

export default App;
