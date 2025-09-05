/**
 * LookImage component for rendering an image look with annotations and a progress bar.
 *
 * @param {Object} props
 * @param {Object} props.look - The look object containing src and annotations.
 * @param {Function} props.onNext - Callback to advance to the next look.
 * @param {boolean} props.isActive - Whether this look is currently active.
 * @param {Function} props.onProductClick - Callback for annotation/product click.
 * @returns {JSX.Element}
 */

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
