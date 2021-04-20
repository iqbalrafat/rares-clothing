import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/Header/header.component";
import SignInSignUp from "./pages/Sign-In-Sign-Up/Sign-In-Sign-Up.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
          <Header currentUser={this.state.currentUser} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/SignIn" component={SignInSignUp} />
      </div>
    );
  }
}

export default App;
