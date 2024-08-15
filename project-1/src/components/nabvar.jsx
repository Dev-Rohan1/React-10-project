import { TiThMenu } from "react-icons/ti";

import styles from "../styles/Navbar.module.css";

const Nabvar = () => {
  return (
    <header>
      <nav className={styles.navBar}>
        <h1 className={styles.logo}>
          <a href="#">Learn With Rohan</a>
        </h1>
        <ul className={styles.menu}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <span className={styles.responsive}>
          <TiThMenu />
        </span>
      </nav>
    </header>
  );
};

export default Nabvar;
