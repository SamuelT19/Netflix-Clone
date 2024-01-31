import React, { useEffect, useState } from "react";
import movieReq from "../../utils/request";
import instance from "../../utils/axios";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(movieReq.originals);
        const randomMovie =
          res?.data.results[Math.floor(Math.random() * res.data.results.length)];
        setMovie(randomMovie);
      } catch (e) {
        console.log("error", e);
      }
    })();
  }, []);
  const bannerStyle = {
    
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
let description= `${movie.overview}`
  return (
    <>
      <div className="banner_container">
        <div className="banner_img" style={bannerStyle}>
          <div className="banner_text">
            <div className="banner_title">{movie.name}</div>
            <div className="banner_link">
              <div className="play link">
                <PlayArrowRoundedIcon sx={{ fontSize: 40, color:"black"}} />
                <p>
                 Play
                </p>
              </div>
              <div className="info link">
                <p>More Info</p>
              </div>
            </div>
            <div className="overview">{truncate(description, 150)}</div>
          </div>
          <div className="gradient"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
