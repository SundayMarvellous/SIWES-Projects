import React from "react";
import SearchComponent from "./Search4bookmark";
import { ReactComponent as Movieicon4home } from "../assets/Movie.icon4home.svg";
import { ReactComponent as Trendingicon } from "../assets/Trending.icon.svg";
import { ReactComponent as Movieslisticon } from "../assets/Movies.list.icon.svg";
import { ReactComponent as TVicon } from "../assets/Tv.icon.svg";
import { ReactComponent as Bookmarkicon } from "../assets/Bookmark.icon.svg";
import { ReactComponent as Profileicon } from "../assets/Profile.icon.svg";
import { ReactComponent as Searchicon } from "../assets/Search.icon.svg";
import { useNavigate } from "react-router-dom";
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
        <SearchComponent data={data} filterCategory="Movie" />
        <SearchComponent data={data} filterCategory="TV Series" />
      </div>
    </div>
    // </div>
  );
}

export default Bookmark;
