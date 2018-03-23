import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import Todo from '../components/Todo.js';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Switch>
    <Route path="/" component={Home} exact={true}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/todo" component={Todo}/>
    <Route component={NotFound}/>
    </Switch>
  </div>
</BrowserRouter>  
);

export default AppRouter;
