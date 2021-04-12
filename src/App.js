import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component'
import SignInSignUp from './pages/Sign-In-Sign-Up/Sign-In-Sign-Up.component'

function App() {
  return (
    <div>  
      <Header/>
      <Switch>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} /> 
        <Route exact path="/SignIn" component={SignInSignUp}/>  
      </Switch> 
    </div>
   );
}
export default App;
