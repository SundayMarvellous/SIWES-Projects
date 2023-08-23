import React from "react";
import { ReactComponent as Movieicon4home } from "../assets/Movie.icon4home.svg";
import { ReactComponent as Trendingicon } from "../assets/Trending.icon.svg";
import { ReactComponent as Movieslisticon } from "../assets/Movies.list.icon.svg";
import { ReactComponent as TVicon } from "../assets/Tv.icon.svg";
import { ReactComponent as Bookmarkicon } from "../assets/Bookmark.icon.svg";
import { ReactComponent as Profileicon } from "../assets/Profile.icon.svg";
import { ReactComponent as Searchicon } from "../assets/Search.icon.svg";
import { useNavigate } from "react-router-dom";
import Dot from "../Movie-cards/Dot.svg";
import Playicon from "../Movie-cards/Shape.svg";
import data from "./data";

function Bookmark() {
  const navigate = useNavigate();
  const handleToTrendingMovies = () => {
    navigate("/home");
  };
  const handleToAllMovies = () => {
    navigate("/allmovies");
  };
  const handleToTVSeries = () => {
    navigate("/tvseries");
  };
  const handleToBookmarkedMovies = () => {
    navigate("/bookmarked");
  };
  return (
    <div className="Home">
      <div className="Nav">
        <Movieicon4home />
        <div className="Sections">
          <span className="Formlink" onClick={handleToTrendingMovies}>
            <Trendingicon className="Trendingicon nav-icon" />
          </span>
          <span className="Formlink" onClick={handleToAllMovies}>
            <Movieslisticon className="Movieslisticon nav-icon" />
          </span>
          <span className="Formlink" onClick={handleToTVSeries}>
            <TVicon className="TVicon nav-icon" />
          </span>
          <span className="Formlink" onClick={handleToBookmarkedMovies}>
            <Bookmarkicon className="Bookmarkicon nav-icon" />
          </span>
        </div>
        <Profileicon />
      </div>
      <div className="MoviesContainer">
        <div className="Search">
          <Searchicon />
          <input
            type="text"
            placeholder="Search for movies or TV series"
            className="Search-input"
          />
        </div>
        <div className="Bookmark trend">
          <p className="bookmark filteredcategories">Bookmarked Movies</p>
          <div className="Recommended-movies">
            {data
              .filter(
                (movie) =>
                  movie.bookmark ===
                    "../assets/Inline-bookmark-checked-icon.svg" &&
                  movie.category === "Movie"
              ) // Filter movies only
              .map((movie, index) => (
                <div key={movie.id}>
                  {/* <p className="god">{movie.Image} </p> */}
                  <div className="Recommended-container-images">
                    <img src={movie.Image} />
                    <div className="container-content">
                      <div class="content">
                        <img src={Playicon} className="playicon" />
                        <div class="text">Play</div>
                      </div>
                    </div>
                    <img
                      src={Bookmarkicon}
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
          <p className="bookmark filteredcategories">Bookmarked TV Series</p>
          <div className="Recommended-movies">
            {data
              .filter(
                (movie) =>
                  movie.bookmark ===
                    "../assets/Inline-bookmark-checked-icon.svg" &&
                  movie.category === "TV Series"
              ) // Filter movies only
              .map((movie, index) => (
                <div key={movie.id}>
                  {/* <p className="god">{movie.Image} </p> */}
                  <div className="Recommended-container-images">
                    <img src={movie.Image} />
                    <div className="container-content">
                      <div class="content">
                        <img src={Playicon} className="playicon" />
                        <div class="text">Play</div>
                      </div>
                    </div>
                    <img
                      src={Bookmarkicon}
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
      </div>
    </div>
  );
}

export default Bookmark;
