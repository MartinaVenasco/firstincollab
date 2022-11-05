import styles from "./index.module.scss";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerEls}>
        <div className={styles.icons}>
          <RiInstagramFill className={styles.icon} />
          <FaFacebookSquare className={styles.icon} />
           <a href="https://github.com/MartinaVenasco/firstincollab"> <BsGithub className={styles.icon} /></a>
        </div>
        <p> All rights reserved </p>
      </div>
    </div>
  );
};
export default Footer;
