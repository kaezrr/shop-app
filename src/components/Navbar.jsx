import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">Shop</Link>
      <Link to="cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
