import { useState, useEffect } from "react";
import styles from "../styles/ShopContainer.module.css";
import getProducts from "../fetcher.js";
import Card from "./Card";

function ShopContainter() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading!</h1>;
  if (error) return <h1>Error in fetching data! Please try again.</h1>;

  return (
    <main className={styles.shop}>
      {data.map((e) => (
        <Card
          key={e.id}
          name={e.title}
          price={e.price}
          imgUrl={e.image}
          rating={e.rating}
        />
      ))}
    </main>
  );
}

export default ShopContainter;
