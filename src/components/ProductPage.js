import NavBar from "./NavBar";
import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(false);
  const [productId, setProductId] = useState("w3245");
  const [singleProduct, setSingleProduct] = useState(null);

  const productsUrl =
    "https://86ypveeq84.execute-api.eu-central-1.amazonaws.com/production/products/";

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await fetch(productsUrl);
        if (!result.ok) {
          console.log("result:", result);
          throw Error("Fetch data error: " + result.statusText);
        }
        const data = await result.json();
        setProducts(data);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        console.log("error:", err);
        setError("Ooops!! Could not fetch data...");
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const singleProductUrl = productsUrl + productId;

    const getSingleProduct = async () => {
      try {
        const result = await fetch(singleProductUrl);
        if (!result.ok) {
          console.log("result:", result);
          throw Error("Fetch data error: " + result.statusText);
        }
        const data = await result.json();
        setSingleProduct(data);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        console.log("error:", err);
        setError("Ooops!! Could not fetch data...");
      }
    };
    getSingleProduct();
  }, [productId]);

  const clickLink = (id) => {
    setProductId(id);
  };

  return (
    <div className="row no-gutters">
      {error && <div className="error">{error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      <NavBar clickLink={clickLink} products={products} />
      <div className="col-12 col-lg-6 order-first order-lg-last images">
        <ImageSection product={singleProduct} />
      </div>
      <div className="col-12 col-lg-6 order-last order-lg-first content">
        <ContentSection product={singleProduct} />
      </div>
    </div>
  );
};

export default ProductPage;
