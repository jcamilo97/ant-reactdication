import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//routes
import Routes from './router'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <Routes/>
    </Router>,
     document.getElementById('root'));
registerServiceWorker();
