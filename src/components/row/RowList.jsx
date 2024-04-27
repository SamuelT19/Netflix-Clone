import React, { Suspense, lazy } from "react";
import request from "../../utils/request";
import LoadingSpinner from "../LoadingSpinner";

const Row = lazy(()=>import('./Row'))

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
          <Suspense key={index} fallback={<LoadingSpinner />}>
            <Row
              key={index}
              title={row.title}
              addr={row.addr}
              isLarge={row.isLarge}
            />
          </Suspense>
        ))}
      </div>
    </>
  );
}

export default RowList;
