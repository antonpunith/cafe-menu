import React, { Component, useState } from "react";
// styles
import "./App.css";
// data
import productData from "./products.json";
// components
import { ProductListing } from "./components/ProductListing";
import { Tags } from "./components/Tags";

const App = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTags = (tagName) => {
    return () => {
      setSelectedTag(tagName);
    };
  };

  const { products, ingredients } = productData;

  return (
    <div className="container">
      <h1>Products</h1>
      <Tags
        tags={ingredients}
        selectedTag={selectedTag}
        handleTags={handleTags}
      />
      <ProductListing products={products} selectedTag={selectedTag} />
    </div>
  );
};

export default App;
