import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <h1>Pruebas React</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Enterprise</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">AI</a>
          </li>
          <li>
            <a href="">Request a demo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
