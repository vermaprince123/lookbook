import React from "react";
import LookImage from "./LookImage";
import LookVideo from "./LookVideo";

function Look({ look, onNext, isActive, onProductClick }) {
  if (look.type === "image")
    return (
      <LookImage
        look={look}
        onNext={onNext}
        isActive={isActive}
        onProductClick={onProductClick} // Pass down to LookImage
      />
    );
  if (look.type === "video")
    return (
      <LookVideo
        look={look}
        onNext={onNext}
        isActive={isActive}
        onProductClick={onProductClick} // Pass down to LookVideo (if needed)
      />
    );
  return null;
}

export default Look;
