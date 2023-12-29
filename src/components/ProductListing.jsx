import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> //listing cards
      ))}
    </div>
  );
};

export default ProductListing;
