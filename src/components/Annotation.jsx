import React from "react";
import ProductCard from "./ProductCard";
import "./annotation.css";

function Annotation({ x, y, product, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(product.id);
    } else {
      alert(`Go to product: ${product.name}`);
    }
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
