import styles from "./index.module.scss";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerEls}>
        <div className={styles.icons}>
          <TiSocialInstagramCircular className={styles.icon} />
          <FaFacebookSquare className={styles.icon} />
         <AiFillGithub/>
        </div>
        <p> All rights reserved </p>
      </div>
    </div>
  );
};
export default Footer;
