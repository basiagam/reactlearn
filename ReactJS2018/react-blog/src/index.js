import React from 'react';
import ReactDOM from 'react-dom';


import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import SingleArticle from './SingleArticle';

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
            <Route path="/login" component={Login} />
            <Route path="/article/:slug" component={SingleArticle} />
            <Route path="/articles/create" component={CreateArticle} />
            <Footer />
        </div>  
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
