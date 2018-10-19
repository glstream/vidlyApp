import React, { Component } from 'react';
import { Route,Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies';
import NavBar from './components/navBar';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import './App.css';


class App extends Component {
  render() {
    return (
     <div>
      <main className="container" >
      <NavBar />
      <Switch>
      <Route path="/movies/:id" component={MovieForm}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Redirect exact from="/" to='/movies' />
      <Redirect to='/not-found' />
      </Switch>
      </main>
      </div>

    );
  }
}

export default App;
