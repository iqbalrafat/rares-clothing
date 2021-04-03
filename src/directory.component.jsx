import React from 'react';
import './directory.styles.scss';
import MenuItem from './menu-item.component';

const Directory=()=>(
 <div className="directory-menu">
  <MenuItem title='Hats'/>
  <MenuItem title="Jackets" />
  <MenuItem title="Shoes" />
  <MenuItem title="Women" />
  <MenuItem title="Men" />
 </div> 
)
 export default Directory;