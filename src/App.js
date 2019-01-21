import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navigation/navBar.js';
import HomePage from './pages/Home/Home.js';
import ApplicationPage from './pages/Application/Application.js';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <main>
            <Switch>
              <Redirect path="/" to="/Home" exact />
              <Route path="/Home" component={HomePage} />
              <Route path="/Application" component={ApplicationPage} />
              {/* <Route path="/contactDetails/:id" component={ContactDetails} />
            <Route path="/contactEdit/:id?" component={ContactEdit} /> */}
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
