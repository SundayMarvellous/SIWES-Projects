import React, { useEffect, useState } from "react";
import SearchComponent from "./Search4tvseries";
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

function AllMovies() {
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
  const [movies, setMovies] = useState({});
  //   checkCategory(movies){movies} use filter to get it
  useEffect(() => {
    console.log(data);
    // const data2 = { ...data };
    // console.log(data2);
  });
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
        <SearchComponent data={data} filterCategory="TV Series" />
        <div className="Bookmark trend">
          <div className="Recommended-movies">
            {data
              .filter((movie) => movie.category === "TV Series") // Filter movies only
              .map((movie, index) => (
                <div key={movie.id}></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllMovies;
