import { Link } from "react-router-dom";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./index.module.scss";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={styles.header}>
      <div className={styles.menuIcon}>
        <CgMenuRight className={styles.menuIconOpen} onClick={showMenu} />
      </div>
      <nav className={`${styles.slider} ${menuActive ? styles.active : ""}`}>
        <ul>
          <div className={styles.menuIconClosed}>
            <AiOutlineClose onClick={showMenu} className={styles.iconClosed} />
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
