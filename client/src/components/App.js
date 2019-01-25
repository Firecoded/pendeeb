import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './app.css';

import AccountRoutes from './account';
import NotFound from './layout/404';
import Nav from './layout/nav';

import Landing from './layout/landing/Landing';

// const Landing = () => <h1>Landing</h1>
const Dashboard = () => <h1>Dashboard</h1>
const AddToCollection = () => <h1>AddToCollection</h1>

class App extends Component {
    
  
  
  render() {
      return (
        <div className="app">
            <Nav/>
            <Switch>  
                {/* <Header/>  */}
                <Route exact path = "/" component = {Landing}/>
                <Route path = "/account" component = {AccountRoutes}/>
                <Route exact path = "/account/dashboard" component = {Dashboard}/>
                <Route path = "/account/dashboard/add" component = {AddToCollection}/>
                <Route component = {NotFound}/>
            </Switch>
        </div>
      );
    }
}

export default App;
