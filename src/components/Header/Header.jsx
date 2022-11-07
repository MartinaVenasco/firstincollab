import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./index.module.scss";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={styles.header}>
      <div className={styles.menuIcon}>
        <span onClick={showMenu} className={styles.menuIconOpen}>
          {/* Trovata l'icona, da sostituire all'emoji, qui la classe è styles.menuIconOpen */}
          🍔
        </span>
      </div>
      <nav className={`${styles.slider} ${menuActive ? styles.active : ""}`}>
        <ul>
          <div className={styles.menuIconClosed}>
            <span onClick={showMenu}>
              {/* Trovata l'icona, da sostituire all'emoji, qui la classe è styles.IconClosed */}
              ✖️
            </span>
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Categories</Link>
          </li>
          <li>
            <Link to="/">Playlist</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
