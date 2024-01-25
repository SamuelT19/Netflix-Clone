import React, { useEffect, useState } from "react";
import movieReq from "../../utils/request";
import instance from "../../utils/axios";
import { ClassSharp } from "@mui/icons-material";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(movieReq.originals);
        // console.log(res.data)
        const randomMovie =
          res.data.results[Math.floor(Math.random() * res.data.results.length)];
        console.log(randomMovie);
        setMovie(randomMovie);
      } catch (e) {
        console.log("error", e);
      }
    })();
  }, []);
  const bannerStyle = {
    
    backgroundSize: `cover`,
    backgroundPosition: `initial`,
    backgroundRepeat: `no-repeat`,
    backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`
  };
  let a = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  console.log(a);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
let description= `${movie.overview}`
  return (
    <>
      <div className="banner_container">
        <div className="banner_img" style={bannerStyle}>
          <div className="banner_text">
            <div className="name">{movie.name}</div>
            <div className="banner_link">
              <div className="play link"><p>Play</p></div>
              <div className="list link"><p>List</p></div>
            </div>
            <div className="overview">{truncate(description,150)}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
