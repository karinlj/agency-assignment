import { useState, useEffect } from "react";

const Navlinks = ({ clickLink }) => {
  const [products, setProducts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productId, setproductId] = useState("w3245");

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

  return (
    <>
      <div className="nav_links">
        <ul>
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {products &&
            products.map((item) => {
              return (
                <li key={item.productId} className="link_item">
                  <span onClick={clickLink} className="link">
                    {item.productName}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
export default Navlinks;
