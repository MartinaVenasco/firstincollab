import styles from "./index.module.scss";
import Card from "../Card";
import { useSelector } from "react-redux";

const CardList = () => {
  const { artistData } = useSelector((state) => state);

  return (
    <div className={styles.CardList}>
      <div className={styles.FavoritesSublist}>
      {artistData?.artists.map((artistData, playcount) => (
       <Card artistData={artistData} key={playcount}/>
        ))}
           

      </div>
    </div>
  );
};

export default CardList;
