import React from 'react'
import './homepage.styles.scss'
import MenuItem from './menu-item.component'

const HomePage=()=>(
  <div className="homepage">
    <h1>Welcome To My Home Page</h1>
    
    <div className="directory-menu">
     
       <MenuItem title="Hats" />
       <MenuItem title="Jackets" />
       <MenuItem title="Shoes" />
       <MenuItem title="Women" />
       <MenuItem title="Men" />     
     
    </div>
  </div>
)
export default HomePage;