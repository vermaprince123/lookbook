import React from "react";
import Annotation from "./Annotation";
import ProgressBar from "./ProgressBar";

function LookImage({ look, onNext, isActive, onProductClick }) {
  return (
    <div className="look-image-container">
      <img src={look.src} alt="look" className="look-image" />
      {look.annotations.map((ann, idx) => (
        <Annotation
          key={idx}
          x={ann.x}
          y={ann.y}
          product={ann.product}
          onClick={() => onProductClick && onProductClick(ann.product.id)}
        />
      ))}

      {isActive && <ProgressBar duration={5000} onComplete={onNext} />}
    </div>
  );
}

export default LookImage;
