
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>ID: {product.id}</p>
    </div>
  );
}

export default ProductCard;
