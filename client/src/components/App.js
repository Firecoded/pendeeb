import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './app.css';

const Landing = () => <h1>Landing</h1>
const Dashboard = () => <h1>Dashboard</h1>
const AddToCollection = () => <h1>AddToCollection</h1>

class App extends Component {
    
  
  
  render() {
      return (
        <div className="App">
            <BrowserRouter>
                <div>
                    {/* <Header/>  */}
                    <Route exact path = "/" component = {Landing}/>
                    <Route exact path = "/dashboard" component = {Dashboard}/>
                    <Route path = "/dashboard/add" component = {AddToCollection}/>
                </div>
            </BrowserRouter>
        </div>
      );
    }
}

export default App;
