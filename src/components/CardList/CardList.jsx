import styles from "./index.module.scss";
import Card from "../Card";
// import { useSelector } from "react-redux";

const CardList = ({ element, data }) => {
  // const { artistData } = useSelector((state) => state);

  return (
    <div className={styles.CardList}>
      <div className={styles.FavoritesSublist}>
      
        {element === "artists" ?  
       (   data?.map((data, playcount) => (
            <Card element={element} data={data} key={playcount} />)
          )) 
          : 
          ( data?.map((data, playcount) => (
            <Card element={element} data={data} key={playcount} />)))  } 
            
      </div>
    </div>
  );
};

export default CardList;
