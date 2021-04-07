import React from 'react';

const CollectionPreview=({title,items})=>(
  <div className="Collection-Preview">
    <h1 className="title">{title.toUpperCase()}</h1>
      <div className="Preview"> 
         {items.map(item =>(<div>item.name</div>))}
      </div>
  </div>
);

export default CollectionPreview;