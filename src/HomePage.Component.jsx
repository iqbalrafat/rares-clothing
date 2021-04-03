import React from 'react';
import './homepage.styles.scss';
import Directory from './directory.component';

const HomePage=()=>(
  <div className="homepage">
    <h1>Welcome To My Home Page</h1> 
    <Directory />    
  </div>
)
export default HomePage;