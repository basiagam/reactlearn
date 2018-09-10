import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './components/Welcome';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Navbar from './components/Navbar';

const Homepage = () => {
    return <h1>This is the homepage.</h1>
};

const About = () => {
    return <h1>This is the about page.</h1>
};

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navbar />
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Homepage} />
        </div>  
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
