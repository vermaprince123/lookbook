import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Product ID: {productId}</p>
    </div>
  );
}

export default ProductDetail;