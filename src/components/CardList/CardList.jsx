import styles from "./index.module.scss";
import Card from "../Card";
// import { useSelector } from "react-redux";

const CardList = () => {
  // const { activities } = useSelector((state) => state);

  return (
    <div className={styles.CardList}>
      <div className={styles.FavoritesSublist}>

            <Card cardData={activity} key={index} />

      </div>
    </div>
  );
};

export default CardList;
