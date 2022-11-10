import {useEffect } from "react";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";

const MainSection = () => {


  const dispatch = useDispatch();
  const { trackData, artistData } = useSelector((state) => state);

  useEffect(() => {
    GET("method=tag.", "gettoptracks&tag=disco", "&format=json").then((data) =>
    dispatch({ type: 'SET_TRACK_LIST', payload: data.tracks.track }), 
    );

    GET("method=library.", "getartists", "&user=joanofarctan&format=json").then(
      (data) => dispatch({ type: 'SET_ARTIST_LIST',  payload: data.artists.artist }),
     );
  }, [dispatch]);

  return (
    <div className={styles.MainSection}>
      <div>
        <h1>ARTISTS </h1>
        {
          artistData?.artists.map((data, index) => <p key={index}> {data.name} </p>)}
      </div>
      <div>
        <h1>TRACKS </h1>
        {trackData?.trackList?.map((data, index) => (
          <p key={index}>{data.name}</p>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
