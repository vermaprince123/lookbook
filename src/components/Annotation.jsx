import React from "react";
import ProductCard from "./ProductCard";
import "./annotation.css";

function Annotation({ x, y, product }) {
  const handleClick = () => {
    alert(`Go to product: ${product.name}`);
    // Or navigate to Product Detail page
  };

  return (
    <div
      className="annotation-dot"
      style={{ top: `${y}%`, left: `${x}%` }}
      onClick={handleClick}
    />
  );
}

export default Annotation;
