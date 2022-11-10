import styles from "./index.module.scss";
import Card from "../Card";

const CardList = () => {


  return (
    <div className={styles.CardList}>
      <div className={styles.FavoritesSublist}>

            <Card cardData={activity} key={index} />

      </div>
    </div>
  );
};

export default CardList;
