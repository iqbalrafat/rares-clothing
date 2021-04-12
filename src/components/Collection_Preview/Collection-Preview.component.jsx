import React from 'react';
import './Collection-Preview.styles.scss'

const CollectionPreview=({title,items})=>(
  <div className="Collection-Preview">
    <h1 className="title">{title.toUpperCase()}</h1>
      <div className="Preview"> 
         {
           items
           .filter((item,idx)=>idx< 4)
           .map(item =>(
           <div key={item.id}>{item.name}</div>
           ))}
      </div>
  </div>
);

export default CollectionPreview;