import React, { useState } from "react";
import { ReactComponent as Searchicon } from "../assets/Search.icon.svg";
import Dot from "../Movie-cards/Dot.svg";
import Playicon from "../Movie-cards/Shape.svg";

function SearchComponent({ data, filterCategory }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter(
    (movie) =>
      (filterCategory === "All" || movie.category === filterCategory) &&
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="SearchComponent">
      <div className="Search SearchMargin">
        <Searchicon />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="Search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <p className="bookmark filteredcategories">TV Series</p>
      <div className="Recommended-movies">
        {filteredData.map((movie, index) => (
          <div key={movie.id}>
            {/* Your existing code for rendering movie cards */}
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
    </div>
  );
}

export default SearchComponent;
