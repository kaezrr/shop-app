import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="">Shop</a>
      <a href="">Cart</a>
    </nav>
  );
}

export default Navbar;
