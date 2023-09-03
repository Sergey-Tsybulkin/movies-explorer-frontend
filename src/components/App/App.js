import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="page">
      <section className="page__content">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/signup">
            <Header />
            <Register />
            <Footer />
          </Route>
          <Route path="/signin">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
