import { useState, useEffect, useRef } from "react";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";

const MainSection = ({ modalVisibility, movieEntity, ScrollTop }) => {
  const [trackList, setTrackList] = useState([]);

  useEffect(() => {
    GET("method=tag.", "gettoptracks&tag=disco", "&format=json").then((data) =>
      setTrackList((prev) => ({ ...prev, data: data.tracks.track }))
    );
  }, []);

  return (
    <div className={styles.MainSection}>
      {trackList.data &&
        trackList.data.map((data, index) => <p key={index}>{data.name}</p>)}
    </div>
  );
};

export default MainSection;
