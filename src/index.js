import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const app = (
     <BrowserRouter>
          <App/>
     </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
