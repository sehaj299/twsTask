

const ProductListing = ({ addToCart, products }) => {
  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  return (
    <div>

      <h2>Product Listing</h2>
      {console.log(products)}
      {products.map((product) => (
        <div key={product.id}>
          <h3>Name: {product.title}</h3>
          <p>Price: ${product.price}</p>
          <button
            onClick={() => handleAddToCart(product.id)}
            disabled={product.inCart}
          >
            {product.inCart ? "In Cart" : "Buy"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
