import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.scss";

const MainSection = () => {
  const dispatch = useDispatch();
  const { trackData } = useSelector((state) => state);

  // const [trackList, setTrackList] = useState([]);
  // const [artists, setArtists] = useState({});

  useEffect(() => {
    GET("method=tag.", "gettoptracks&tag=disco", "&format=json").then((data) =>
      dispatch({ type: "SET_TRACK_LIST", payload: data.tracks.track })
    );

    // GET("method=library.", "getartists", "&user=joanofarctan&format=json").then(
    //   (data) => setArtists((prev) => ({ ...prev, data: data.artists.artist }))
    // );
  }, [dispatch]);

  return (
    <div className={styles.MainSection}>
      {/* <div>
        <h1>ARTISTS </h1>
        {artists.data &&
          artists.data.map((data, index) => <p key={index}> {data.name} </p>)}
      </div> */}
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
