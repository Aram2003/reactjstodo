import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import Other from '../components/Other.js';
import Todo from '../components/Todo.js';
import Header from '../components/Header.js';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/other" component={Other}/>
    <Route path="/todo" component={Todo}/>
    <Route component={NotFound}/>
    </Switch>
  </div>
</BrowserRouter>  
);

export default AppRouter;
