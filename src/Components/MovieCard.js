import React from "react";
import RateMovie from "./RateMovie";

const MovieCard = ({ movie: { title, description, posterurl,rate } }) => {
  return (
    <div className="container">
      <div>
        <img src={posterurl} alt="Poster Movie" style={{ width: "200px", height: "250px" }} />
      </div>
      <div className="moviedetails">
        <h2>{title}</h2>
        <RateMovie rate={rate} />
        <p >{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;