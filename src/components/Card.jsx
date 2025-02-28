import { useState } from "react";
import styles from "../styles/ShopContainer.module.css";

function Card({ name, price, imgUrl, rating }) {
  const [amount, setAmount] = useState(0);

  const setInput = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={styles.card}>
      <img src={imgUrl} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.rating}>
        <h3>${price}</h3>
        <p>
          <span>
            <img src="star.svg" alt="rating" />
          </span>
          {rating.rate} ({rating.count})
        </p>
      </div>
      <div className={styles.amount}>
        <input type="text" defaultValue={amount} onChange={setInput} />
        <button>+</button>
        <button>-</button>
      </div>
      <button className={styles.cart}>Add To Cart</button>
    </div>
  );
}

export default Card;
