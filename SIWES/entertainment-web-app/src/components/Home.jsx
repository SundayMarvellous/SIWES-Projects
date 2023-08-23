import React, { useState } from "react";
import { ReactComponent as Movieicon4home } from "../assets/Movie.icon4home.svg";
import { ReactComponent as Trendingicon } from "../assets/Trending.icon.svg";
import { ReactComponent as Movieslisticon } from "../assets/Movies.list.icon.svg";
import { ReactComponent as TVicon } from "../assets/Tv.icon.svg";
import { ReactComponent as Bookmarkicon } from "../assets/Bookmark.icon.svg";
import { ReactComponent as Profileicon } from "../assets/Profile.icon.svg";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import Trending from "./Trending";
import Recommendations from "./Recommendations";
import data from "./data";

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

  // State to manage search results
  const [searchResults, setSearchResults] = useState([]);

  // Callback for handling search
  const handleSearch = (query, filteredData) => {
    // Update the search results based on the filtered data
    setSearchResults(filteredData);
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
          <Search data={data} onSearch={handleSearch} />
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
