import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component'

function App() {
  return (
    <Switch>
      <Header/>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/shop" component={ShopPage} />    
    </Switch>       
  );
}
export default App;
