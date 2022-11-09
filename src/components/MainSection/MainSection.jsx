import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import "./index.css";

const MainSection = () => {
  const [artists, setArtists] = useState({});

  useEffect(() => {
    GET("method=library.", "getartists", "&user=joanofarctan&format=json").then(
      (data) => setArtists((prev) => ({ ...prev, data: data.artists.artist }))
    );
  }, []);

  return (
    <div className="MainSection">
      {artists.data &&
        artists.data.map((data, index) => <p key={index}> {data.name} </p>)}
    </div>
  );
};

export default MainSection;
