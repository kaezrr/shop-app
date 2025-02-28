import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import items from "../data.js";

function Cart() {
  return (
    <>
      <Navbar />
      <CartContainer data={items} />
    </>
  );
}

export default Cart;
