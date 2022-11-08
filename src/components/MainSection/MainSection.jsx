import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import "./index.css";

const MainSection = () => {
  const [topTracks, setToptracks] = useState({});

  useEffect(() => {
    GET("method=tag.", "gettoptracks&tag=disco", "&format=json").then((data) =>
    setToptracks((prev) => ({ ...prev, data: data.tracks.track})));
  }, []);


  return (
    <div className="MainSection">
      {topTracks.data && topTracks.data.map((data, index) => <p key={index}> {data.name} </p>)}
    </div>
  );
};

export default MainSection;
