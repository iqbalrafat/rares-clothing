import React from 'react';
import './menu-item.styles.scss';

//we can use prop to replace hard coaded title etc or we can refactor just the title etc that we need.
const MenuItem=({title, imageUrl,size})=>(
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>   
      <span className="subtitle">SHOP NOW</span>
    </div>  
  </div>    
);
export default MenuItem;