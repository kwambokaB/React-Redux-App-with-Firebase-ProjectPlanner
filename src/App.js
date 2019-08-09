import React, { Component} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/dashboard'
import projectDetails from './components/projects/projectDetails';
import signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';
import createProject from './components/projects/createProject';

class App extends Component{


  render(){
    return(
      <BrowserRouter>
      <div className="App">
       <Navbar />
       <Switch>
         <Route exact path ="/" component={Dashboard} />
         <Route path ="/project/:id" component ={projectDetails}/>
         <Route path="/signin" component={signIn} />
         <Route path="/signup" component={signUp} />
         <Route path="/create" component={createProject} />
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
