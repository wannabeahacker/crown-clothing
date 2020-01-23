import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component.jsx";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title"> {title.toUpperCase()} </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemCollection }) => (
            <CollectionItem key={id} {...otherItemCollection} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
