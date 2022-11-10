import { memo } from "react";
import styles from "./index.module.scss";

const Card = ({ artistData }) => {
  const { name, image } = artistData;

  // const router = useRouter();

  const imagev = image[1][`#text`];
  // const imgurl = console.log (Object.values(imagev[1]))
  // const handleActivityClick = () => {
  //   router.push({
  //     pathname: `/../activity/[uuid]`,
  //     query: { uuid: uuid },
  //   });
  // };

  return (
    <div className={styles.CardContainer}>
      {/* {router.pathname !== "/mytrip" ? (
        <span onClick={handleOnDeleteBtn} className={styles.DeleteFavorite}>
          x
        </span>
      ) : null} */}
      <div className={styles.Card}>
        <div className={styles.imgContainer}>
          <div className={styles.overlayimg} />
          <img src={imagev} alt="img" />
        </div>
        <div className={styles.all_text_container}>
          <div className={styles.MainText}>
            <h1
              // onClick={handleActivityClick}
              className={styles.CardTitle}
            >
              {name}
            </h1>
          </div>
          {/* {router.pathname !== "/mytrip" ? (
            <div className={styles.CartItem}>
              <h1 className={styles.retailprice}>
                {retail_price.formatted_value}
              </h1>
              <p
                className={styles.addCart}
                //  onClick={handleOnAddCartClick}
              >
                {" "}
                add to cart{" "}
              </p>
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
