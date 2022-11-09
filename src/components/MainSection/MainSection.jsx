import { useState, useEffect, useRef } from "react";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";

const MainSection = ({ modalVisibility, movieEntity, ScrollTop }) => {
  const [trackList, setTrackList] = useState([]);
 const [artists, setArtists] = useState({});
 
  useEffect(() => {
    GET("method=tag.", "gettoptracks&tag=disco", "&format=json").then((data) =>
      setTrackList((prev) => ({ ...prev, data: data.tracks.track })));

    GET("method=library.", "getartists", "&user=joanofarctan&format=json").then(
      (data) => setArtists((prev) => ({ ...prev, data: data.artists.artist }))
    );
  }, []);

  return (

    <div className={styles.MainSection}>
    <div>
      {artists.data &&
        artists.data.map((data, index) => <p key={index}> {data.name} </p>)}
        </div>
            <div>
      {trackList.data &&
        trackList.data.map((data, index) => <p key={index}>{data.name}</p>)}
    </div>
</div>
  );
};

export default MainSection;
