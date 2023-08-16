import React from 'react'
import Beyondearth from '../assets/Movie-cards/Beyond-Earth.svg';
import Bottomgear from '../assets/Movie-cards/Bottom Gear.svg';
import Dot from '../assets/Movie-cards/Dot.svg';
import year1998 from '../assets/Movie-cards/1998.svg';
import UndiscoveredCities from '../assets/Movie-cards/Undiscovered Cities.svg';
import DarkSideoftheMoon from '../assets/Movie-cards/Dark Side of the Moon.svg';
import Playicon from '../assets/Movie-cards/Shape.svg';
import Inlinemovieicon from '../assets/Movie-cards/Inline-movie-icon.svg';
import Inlinebookmarkicon from '../assets/Movie-cards/Inline-bookmark-icon.svg';


function Trending() {
  return (
    <div className='Trending-container'>
      <div className='Trending-container-images'>
        <img src={Beyondearth} className='movie'/>
        <div class="content">
          <img src={Playicon} className='playicon'/>
          <div class="text">Play</div>
        </div>
        <img src={Inlinebookmarkicon}  className='Trending-container-images-bookmark'/>
        <div className='Trending-container-images-label'>
          <div className='Trending-container-images-label-class'>
            <div className='Trending-container-images-label-class-yearCategory'>
              <p className='Trending-container-images-label-class-yearCategory-year' id='movie-year'>2019</p>
              <img src={Dot} />
              <div className='Trending-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Trending-container-images-label-class-yearCategory-category-image'><img src={Inlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <div className='Trending-container-images-label-class-yearCategory-mpaa-tab'>
                <img src={Dot} />
                <p className='Trending-container-images-label-class-yearCategory-mpaa-tab' id='mpaa'>PG</p>
              </div>
            </div>
            <p className='Trending-container-images-label-class-name' id='movie-name'>Beyond Earth</p>
          </div>
          <p className='Trending-container-images-label-mpaa' id='mpaa'>PG</p>
        </div>
      </div>
      <div className='Trending-container-images'>
        <img src={Bottomgear} className='movie'/>
        <img src={Inlinebookmarkicon}  className='Trending-container-images-bookmark'/>
        <div className='Trending-container-images-label'>
          <div className='Trending-container-images-label-class'>
            <div className='Trending-container-images-label-class-yearCategory'>
              <p className='Trending-container-images-label-class-yearCategory-year' id='movie-year'>2021</p>
              <img src={Dot} />
              <div className='Trending-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Trending-container-images-label-class-yearCategory-category-image'><img src={Inlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <div className='Trending-container-images-label-class-yearCategory-mpaa-tab'>
                <img src={Dot} />
                <p className='Trending-container-images-label-class-yearCategory-mpaa-tab' id='mpaa'>PG</p>
              </div>
            </div>
            <p className='Trending-container-images-label-class-name' id='movie-name'>Bottom Gear</p>
          </div>
          <p className='Trending-container-images-label-mpaa' id='mpaa'>PG</p>
        </div>
      </div>
      <div className='Trending-container-images'>
        <img src={UndiscoveredCities} className='movie'/>
        <img src={Inlinebookmarkicon}  className='Trending-container-images-bookmark'/>
        <div className='Trending-container-images-label'>
          <div className='Trending-container-images-label-class'>
            <div className='Trending-container-images-label-class-yearCategory'>
              <p className='Trending-container-images-label-class-yearCategory-year' id='movie-year'>2019</p>
              <img src={Dot} />
              <div className='Trending-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Trending-container-images-label-class-yearCategory-category-image'><img src={Inlinemovieicon} /></div>
                <p>TV Series</p>
              </div>
              <div className='Trending-container-images-label-class-yearCategory-mpaa-tab'>
                <img src={Dot} />
                <p className='Trending-container-images-label-class-yearCategory-mpaa-tab' id='mpaa'>18+</p>
              </div>
            </div>
            <p className='Trending-container-images-label-class-name' id='movie-name'>Unresolved Cases</p>
          </div>
          <p className='Trending-container-images-label-mpaa' id='mpaa'>18+</p>
        </div>
      </div>
      <div className='Trending-container-images'>
        <img src={year1998} className='movie' />
        <img src={Inlinebookmarkicon}  className='Trending-container-images-bookmark'/>
        <div className='Trending-container-images-label'>
          <div className='Trending-container-images-label-class'>
            <div className='Trending-container-images-label-class-yearCategory'>
              <p className='Trending-container-images-label-class-yearCategory-year' id='movie-year'>2021</p>
              <img src={Dot} />
              <div className='Trending-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Trending-container-images-label-class-yearCategory-category-image'><img src={Inlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <div className='Trending-container-images-label-class-yearCategory-mpaa-tab'>
                <img src={Dot} />
                <p className='Trending-container-images-label-class-yearCategory-mpaa-tab' id='mpaa'>18+</p>
              </div>
            </div>
            <p className='Trending-container-images-label-class-name' id='movie-name'>1998</p>
          </div>
          <p className='Trending-container-images-label-mpaa' id='mpaa'>18+</p>
        </div>
      </div>
      <div className='Trending-container-images'>
        <img src={DarkSideoftheMoon} className='movie'/>
        <img src={Inlinebookmarkicon}  className='Trending-container-images-bookmark'/>
        <div className='Trending-container-images-label'>
          <div className='Trending-container-images-label-class'>
            <div className='Trending-container-images-label-class-yearCategory'>
              <p className='Trending-container-images-label-class-yearCategory-year' id='movie-year'>2018</p>
              <img src={Dot} />
              <div className='Trending-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Trending-container-images-label-class-yearCategory-category-image'><img src={Inlinemovieicon} /></div>
                <p>TV Series</p>
              </div>
              <div className='Trending-container-images-label-class-yearCategory-mpaa-tab'>
                <img src={Dot} />
                <p className='Trending-container-images-label-class-yearCategory-mpaa-tab' id='mpaa'>PG</p>
              </div>
            </div>
            <p className='Trending-container-images-label-class-name' id='movie-name'>Dark Side of the Moon</p>
          </div>
          <p className='Trending-container-images-label-mpaa' id='mpaa'>PG</p>
        </div>
      </div>
    </div>
  )
}

export default Trending
