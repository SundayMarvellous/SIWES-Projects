import React, { useState } from "react";
import { ReactComponent as Movieicon4home } from "../assets/Movie.icon4home.svg";
import { ReactComponent as Trendingicon } from "../assets/Trending.icon.svg";
import { ReactComponent as Movieslisticon } from "../assets/Movies.list.icon.svg";
import { ReactComponent as TVicon } from "../assets/Tv.icon.svg";
import { ReactComponent as Bookmarkicon } from "../assets/Bookmark.icon.svg";
import { ReactComponent as Profileicon } from "../assets/Profile.icon.svg";
import { ReactComponent as Searchicon } from "../assets/Search.icon.svg";
import { useNavigate } from "react-router-dom";
import Trending from "./Trending";
import Recommendations from "./Recommendations";

function Home() {
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
          <span
            className="Formlink"
            onClick={handleToTrendingMovies}
            to="home"
            styles={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    filter:
                      "invert(38%) sepia(42%) saturate(3972%) hue-rotate(336deg) brightness(102%) contrast(97%)",
                  }
                : { color: "#545e6f" }
            }
          >
            <Trendingicon className="Trendingicon nav-icon" />
          </span>
          <span
            className="Formlink"
            onClick={handleToAllMovies}
            to="allmovies"
            styles={({ isActive }) =>
              isActive
                ? {
                    color: "#fff",
                    filter:
                      "invert(38%) sepia(42%) saturate(3972%) hue-rotate(336deg) brightness(102%) contrast(97%)",
                  }
                : { color: "#545e6f" }
            }
          >
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
        <div className="Trending">
          <p className="trend">Trending</p>
          <Trending />
        </div>
        <div className="Recommendations">
          <p className="recom">Recommended for you</p>
          <Recommendations />
        </div>
      </div>
    </div>
  );
}

export default Home;
