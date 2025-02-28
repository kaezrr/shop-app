import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/ShopContainer.module.css";
import items from "../data";

function Card({ name, price, imgUrl, rating }) {
  const [amount, setAmount] = useState(0);

  const setInput = (e) => {
    setAmount(e.target.value);
  };

  const incrAmount = () => {
    setAmount(amount + 1);
  };

  const decrAmount = () => {
    setAmount(Math.max(amount - 1, 0));
  };

  const addCart = () => {
    if (amount <= 0) {
      delete items[name];
      return;
    }
    items[name] = {
      price,
      amount,
    };
    setAmount(0);
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
        <input type="text" value={amount} onChange={setInput} />
        <button onClick={incrAmount}>+</button>
        <button onClick={decrAmount}>-</button>
      </div>
      <button onClick={addCart}>Add To Cart</button>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imgUrl: PropTypes.string,
  rating: PropTypes.object,
};

export default Card;
