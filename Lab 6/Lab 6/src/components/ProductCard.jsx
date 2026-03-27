function ProductCard({ product }) {

  return (
    <div style={{
      border:"1px solid #ccc",
      borderRadius:"10px",
      padding:"15px",
      textAlign:"center"
    }}>

      <img 
        src={product.thumbnail}
        width="120"
      />

      <h3>{product.title}</h3>

      <p>{product.brand}</p>

      <h4>${product.price}</h4>

    </div>
  );

}

export default ProductCard;