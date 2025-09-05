/**
 * Annotation component for rendering a clickable annotation dot on a look.
 *
 * @param {Object} props
 * @param {number} props.x - The x position (percentage) of the annotation.
 * @param {number} props.y - The y position (percentage) of the annotation.
 * @param {Object} props.product - The product object associated with the annotation.
 * @param {Function} [props.onClick] - Callback for annotation/product click.
 * @returns {JSX.Element}
 */

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
