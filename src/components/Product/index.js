import React, { useState } from "react";

import "./styles.css";

const Product = ({product: { name, price, summary }}) => {
  const [showDescription, setDescription] = useState(false);
  const toggleDescription = () => {
    setDescription(!showDescription);
  };
  return (
    <div className="product">
      <div className="product_header">
        <h2>{name}</h2>
        <div>
          <button onClick={toggleDescription}>
            {showDescription ? "-" : "+"}
          </button>
        </div>
      </div>
      <strong>${price}</strong>
      <div>{showDescription && <p>{summary}</p>}</div>
    </div>
  );
};


export { Product };
