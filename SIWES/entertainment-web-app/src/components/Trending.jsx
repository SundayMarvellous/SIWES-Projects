import React from "react";
import Beyondearth from "../Movie-cards/BeyondEarth.svg";
import Bottomgear from "../Movie-cards/BottomGear.svg";
import Dot from "../Movie-cards/Dot.svg";
import year1998 from "../Movie-cards/1998.svg";
import UndiscoveredCities from "../Movie-cards/UndiscoveredCities.svg";
import DarkSideoftheMoon from "../Movie-cards/DarkSideoftheMoon.svg";
import Playicon from "../Movie-cards/Shape.svg";
import Inlinemovieicon from "../Movie-cards/Inline-movie-icon.svg";
import Bookmarkicon from "../Movie-cards/Inline-bookmark-icon.svg";
import Bookmarkcheckedicon from "../Movie-cards/Inline-bookmark-checked-icon.svg";

function Trending() {
  return (
    <div className="Trending-container">
      <div className="Trending-container-images">
        <img src={Beyondearth} className="movie" />
        <div className="container-content">
          <div class="content">
            <img src={Playicon} className="playicon" />
            <div class="text">Play</div>
          </div>
        </div>
        <img
          src={Bookmarkicon}
          className="Trending-container-images-bookmark"
        />
        <div className="Trending-container-images-label">
          <div className="Trending-container-images-label-class">
            <div className="Trending-container-images-label-class-yearCategory">
              <p
                className="Trending-container-images-label-class-yearCategory-year"
                id="movie-year"
              >
                2019
              </p>
              <img src={Dot} />
              <div
                className="Trending-container-images-label-class-yearCategory-category"
                id="movie-category"
              >
                <div className="Trending-container-images-label-class-yearCategory-category-image">
                  <img src={Inlinemovieicon} />
                </div>
                <p>Movie</p>
              </div>
              <div className="Trending-container-images-label-class-yearCategory-mpaa-tab">
                <img src={Dot} />
                <p
                  className="Trending-container-images-label-class-yearCategory-mpaa-tab"
                  id="mpaa"
                >
                  PG
                </p>
              </div>
            </div>
            <p
              className="Trending-container-images-label-class-name"
              id="movie-name"
            >
              Beyond Earth
            </p>
          </div>
          <p className="Trending-container-images-label-mpaa" id="mpaa">
            PG
          </p>
        </div>
      </div>
      <div className="Trending-container-images">
        <img src={Bottomgear} className="movie" />
        <div className="container-content">
          <div class="content">
            <img src={Playicon} className="playicon" />
            <div class="text">Play</div>
          </div>
        </div>
        <img
          src={Bookmarkicon}
          className="Trending-container-images-bookmark"
        />
        <div className="Trending-container-images-label">
          <div className="Trending-container-images-label-class">
            <div className="Trending-container-images-label-class-yearCategory">
              <p
                className="Trending-container-images-label-class-yearCategory-year"
                id="movie-year"
              >
                2021
              </p>
              <img src={Dot} />
              <div
                className="Trending-container-images-label-class-yearCategory-category"
                id="movie-category"
              >
                <div className="Trending-container-images-label-class-yearCategory-category-image">
                  <img src={Inlinemovieicon} />
                </div>
                <p>Movie</p>
              </div>
              <div className="Trending-container-images-label-class-yearCategory-mpaa-tab">
                <img src={Dot} />
                <p
                  className="Trending-container-images-label-class-yearCategory-mpaa-tab"
                  id="mpaa"
                >
                  PG
                </p>
              </div>
            </div>
            <p
              className="Trending-container-images-label-class-name"
              id="movie-name"
            >
              Bottom Gear
            </p>
          </div>
          <p className="Trending-container-images-label-mpaa" id="mpaa">
            PG
          </p>
        </div>
      </div>
      <div className="Trending-container-images">
        <img src={UndiscoveredCities} className="movie" />
        <div className="container-content">
          <div class="content">
            <img src={Playicon} className="playicon" />
            <div class="text">Play</div>
          </div>
        </div>
        <img
          src={Bookmarkicon}
          className="Trending-container-images-bookmark"
        />
        <div className="Trending-container-images-label">
          <div className="Trending-container-images-label-class">
            <div className="Trending-container-images-label-class-yearCategory">
              <p
                className="Trending-container-images-label-class-yearCategory-year"
                id="movie-year"
              >
                2019
              </p>
              <img src={Dot} />
              <div
                className="Trending-container-images-label-class-yearCategory-category"
                id="movie-category"
              >
                <div className="Trending-container-images-label-class-yearCategory-category-image">
                  <img src={Inlinemovieicon} />
                </div>
                <p>TV Series</p>
              </div>
              <div className="Trending-container-images-label-class-yearCategory-mpaa-tab">
                <img src={Dot} />
                <p
                  className="Trending-container-images-label-class-yearCategory-mpaa-tab"
                  id="mpaa"
                >
                  18+
                </p>
              </div>
            </div>
            <p
              className="Trending-container-images-label-class-name"
              id="movie-name"
            >
              Unresolved Cases
            </p>
          </div>
          <p className="Trending-container-images-label-mpaa" id="mpaa">
            18+
          </p>
        </div>
      </div>
      <div className="Trending-container-images">
        <img src={year1998} className="movie" />
        <div className="container-content">
          <div class="content">
            <img src={Playicon} className="playicon" />
            <div class="text">Play</div>
          </div>
        </div>
        <img
          src={Bookmarkicon}
          className="Trending-container-images-bookmark"
        />
        <div className="Trending-container-images-label">
          <div className="Trending-container-images-label-class">
            <div className="Trending-container-images-label-class-yearCategory">
              <p
                className="Trending-container-images-label-class-yearCategory-year"
                id="movie-year"
              >
                2021
              </p>
              <img src={Dot} />
              <div
                className="Trending-container-images-label-class-yearCategory-category"
                id="movie-category"
              >
                <div className="Trending-container-images-label-class-yearCategory-category-image">
                  <img src={Inlinemovieicon} />
                </div>
                <p>Movie</p>
              </div>
              <div className="Trending-container-images-label-class-yearCategory-mpaa-tab">
                <img src={Dot} />
                <p
                  className="Trending-container-images-label-class-yearCategory-mpaa-tab"
                  id="mpaa"
                >
                  18+
                </p>
              </div>
            </div>
            <p
              className="Trending-container-images-label-class-name"
              id="movie-name"
            >
              1998
            </p>
          </div>
          <p className="Trending-container-images-label-mpaa" id="mpaa">
            18+
          </p>
        </div>
      </div>
      <div className="Trending-container-images">
        <img src={DarkSideoftheMoon} className="movie" />
        <div className="container-content">
          <div class="content">
            <img src={Playicon} className="playicon" />
            <div class="text">Play</div>
          </div>
        </div>
        <img
          src={Bookmarkicon}
          className="Trending-container-images-bookmark"
        />
        <div className="Trending-container-images-label">
          <div className="Trending-container-images-label-class">
            <div className="Trending-container-images-label-class-yearCategory">
              <p
                className="Trending-container-images-label-class-yearCategory-year"
                id="movie-year"
              >
                2018
              </p>
              <img src={Dot} />
              <div
                className="Trending-container-images-label-class-yearCategory-category"
                id="movie-category"
              >
                <div className="Trending-container-images-label-class-yearCategory-category-image">
                  <img src={Inlinemovieicon} />
                </div>
                <p>TV Series</p>
              </div>
              <div className="Trending-container-images-label-class-yearCategory-mpaa-tab">
                <img src={Dot} />
                <p
                  className="Trending-container-images-label-class-yearCategory-mpaa-tab"
                  id="mpaa"
                >
                  PG
                </p>
              </div>
            </div>
            <p
              className="Trending-container-images-label-class-name"
              id="movie-name"
            >
              Dark Side of the Moon
            </p>
          </div>
          <p className="Trending-container-images-label-mpaa" id="mpaa">
            PG
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trending;
