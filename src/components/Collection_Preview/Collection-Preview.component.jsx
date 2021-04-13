import React from "react";
import "./Collection-Preview.styles.scss";
import CollectionItem from "../Collection-Item/Collection-Item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="Collection-Preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="Preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
