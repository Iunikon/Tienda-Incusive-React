import React from 'react';
import Item from "./Item";

const ItemList = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2> {}
      <Item />
    </div>
  );
};

export default ItemList;
