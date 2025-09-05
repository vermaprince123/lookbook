/**
 * Look component for rendering either an image or video look.
 * Delegates rendering to LookImage or LookVideo based on look type.
 *
 * @param {Object} props
 * @param {Object} props.look - The look object containing type, src, and annotations.
 * @param {Function} props.onNext - Callback to advance to the next look.
 * @param {boolean} props.isActive - Whether this look is currently active.
 * @param {Function} props.onProductClick - Callback for annotation/product click.
 * @returns {JSX.Element|null}
 */

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
