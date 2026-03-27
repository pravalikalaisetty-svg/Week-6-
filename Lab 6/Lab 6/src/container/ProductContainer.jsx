import { useEffect, useState, useRef } from "react";
import ProductList from "../components/ProductList";
import SkeletonLoader from "../components/SkeletonLoader";
import { getCache, setCache, getFetchInfo } from "../utils/cache";

const API_URL = "https://dummyjson.com/products";

function ProductContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const requestIdRef = useRef(0);

  const fetchProducts = async () => {

    const cache = getCache();

    if (cache) {
      console.log("Using cached data");
      setProducts(cache);
      setLoading(false);
      return;
    }

    const requestId = ++requestIdRef.current;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      // Race condition protection
      if (requestId !== requestIdRef.current) {
        return;
      }

      setProducts(data.products);
      setCache(data.products);

      console.log(getFetchInfo());

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return <ProductList products={products} />;
}

export default ProductContainer;