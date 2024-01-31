import React, { useEffect, useState, useRef } from "react";
import instance from "../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import "./row.css";

function Row({ title, addr, isLarge }) {
  const [poster, setPoster] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [moviesName, setMoviesname] = useState("");
  const containerRef = useRef(null);
  const youtubePlayerRef = useRef(null);
  const baseImageUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    (async () => {
      try {
        const it = await instance.get(addr);
        const items = it.data.results;
        setPoster(items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [addr]);
  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = direction === "left" ? -450 : 450;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    setScrollPosition(container.scrollLeft);
  };

  const close = () => {
    setMoviesname("");
  };

  const a = (p) => {
    movieTrailer(`${p.name || p.original_title}`)
      .then((e) => {
        const vidId = e?.slice(32);
        setMoviesname(vidId);
      })
      .catch((error) => {
        console.log("Error fetching trailer:", error);
        setMoviesname("no");
      });
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="genres_container">
        <div className="genre_title">{title}</div>
        <div className="movie_container" ref={containerRef}>
          {poster?.map((p) => {
            return (
              <img
                className={`${isLarge ? "backdrop" : "poster"}`}
                key={p.name || p.title}
                src={`${baseImageUrl}${
                  isLarge ? p.poster_path : p.backdrop_path
                }`}
                alt=""
                onClick={() => a(p)}
              />
            );
          })}
        </div>
        <div className="arrow_hide">
          {scrollPosition > 0 && (
            <button
              className={`arrow left ${isLarge && "arrow2"}`}
              onClick={() => handleScroll("left")}
            >
              &lt;
            </button>
          )}
          <button
            className={`arrow right ${isLarge && "arrow2"}`}
            onClick={() => handleScroll("right")}
          >
            &gt;
          </button>
        </div>
        <>
          {moviesName && (
            <div className="w">
              <div className="trailer">
                <YouTube
                  videoId={moviesName}
                  ref={youtubePlayerRef}
                  opts={opts}
                  className="youtube-player"
                />
              </div>
              <div className="letter-x" onClick={close}>
                <ClearRoundedIcon sx={{ color: "white", fontSize: 40 }} />
              </div>
            </div>
          )}

          {moviesName === undefined && (
            <div className="no_trailer">Sorry no-trailer</div>
          )}
        </>
      </div>
    </>
  );
}

export default Row;
