import { useState } from "react";
import items, { clear } from "../data";
import styles from "../styles/ShopCart.module.css";

function CartContainer() {
  let newArr = [];
  const formatNum = (num) => Math.round(num * 100) / 100;
  for (let item in items) {
    newArr.push({
      id: crypto.randomUUID(),
      item,
      amount: items[item].amount,
      price: items[item].price,
      total: formatNum(items[item].price * items[item].amount),
    });
  }

  const [array, setArray] = useState(newArr);

  if (array.length === 0) return <h1>Your Cart is empty!</h1>;
  return (
    <div className={styles.cart}>
      <div>
        <h1>Your Cart</h1>
        <button
          onClick={() => {
            clear();
            setArray([]);
          }}
        >
          Clear Cart
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Price($)</th>
            <th>Total($)</th>
          </tr>
        </thead>
        <tbody>
          {array.map((e) => (
            <tr key={e.id}>
              <td>{e.item}</td>
              <td>{e.amount}</td>
              <td>{e.price}</td>
              <td>{e.total}</td>
            </tr>
          ))}
          <tr>
            <th>Total Amount (incl. tax)</th>
            <th colSpan={3}>
              {formatNum(array.reduce((acc, curr) => acc + curr.total, 0))}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartContainer;
