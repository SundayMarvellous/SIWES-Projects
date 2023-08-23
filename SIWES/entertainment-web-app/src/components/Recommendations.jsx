import React, { useState } from "react";
import Dot from "../Movie-cards/Dot.svg";
import Playicon from "../Movie-cards/Shape.svg";
import data from "./data";

function Recommendations() {
  const [movies, setMovies] = useState({});

  // import React from 'react';

  // {  data.map((movie)=> {
  //   setMovies(movie)
  // })}

  return (
    <div className="Recommended-movies">
      {data.map((movie, index) => (
        <div>
          {movie.name}
          <div className="Recommended-container-images">
            <img src={movie.Image} />
            <div className="container-content">
              <div class="content">
                <img src={Playicon} className="playicon" />
                <div class="text">Play</div>
              </div>
            </div>
            <img
              src={movie.bookmark}
              className="Recommended-container-images-bookmark"
            />
            <div className="Recommended-container-images-label">
              <div className="Recommended-container-images-label-class">
                <div className="Recommended-container-images-label-class-yearCategory">
                  <p
                    className="Recommended-container-images-label-class-yearCategory-year"
                    id="movie-year"
                  >
                    {movie.year}
                  </p>
                  <img src={Dot} />
                  <div
                    className="Recommended-container-images-label-class-yearCategory-category"
                    id="movie-category"
                  >
                    <div className="Recommended-container-images-label-class-yearCategory-category-image">
                      <img src={movie.categoryicon} />
                    </div>
                    <p>{movie.category}</p>
                  </div>
                  <img src={Dot} />
                  <p
                    className="Recommended-container-images-label-mpaa"
                    id="mpaa"
                  >
                    {movie.MPAA}
                  </p>
                </div>
                <p
                  className="Recommended-container-images-label-class-name"
                  id="movie-name"
                >
                  {movie.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recommendations;
