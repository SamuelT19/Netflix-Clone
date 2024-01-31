import React from "react";
import Row from "./Row";
import request from "../../utils/request";


function RowList() {
  const rows = [
    { title: "ORIGINALS", addr: request.originals ,isLarge:true},
    { title: "Trending", addr: request.trending },
    { title: "Adventure Movies", addr: request.adventureMovies },
    { title: "Family Movies", addr: request.familyMovies },
    { title: "Action Movies", addr: request.actionMovies },
    { title: "Comedy Movies", addr: request.comedyMovies },
    { title: "Tv Movies", addr: request.tvMovie },
  ];

  return (
    <>
      <div className="main_container">
        {rows.map((row, index) => (
          <Row key={index} title={row.title} addr={row.addr} isLarge={row.isLarge}/>
        ))}
      </div>
    </>
  );
}

export default RowList;
