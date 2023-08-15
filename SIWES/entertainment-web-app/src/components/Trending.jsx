import React from 'react'
import Beyondearth from '../assets/Movie-cards/Beyond-Earth.svg';
import Bottomgear from '../assets/Movie-cards/Bottom Gear.svg';
import Dot from '../assets/Movie-cards/Dot.svg';
import Inlinemovieicon from '../assets/Movie-cards/Inline-movie-icon.svg';
import Inlinebookmarkicon from '../assets/Movie-cards/Inline-bookmark-icon.svg';


function Trending() {
  return (
    <div className='Trending-container'>
      <div className='Trending-container-images'>
        <img src={Beyondearth} />
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
            </div>
            <p className='Trending-container-images-label-class-name' id='movie-name'>Beyond Earth</p>
          </div>
          <p className='Trending-container-images-label-mpaa' id='mpaa'>PG</p>
        </div>
      </div>
      <div className='Trending-container-images'>
        <img src={Bottomgear} />
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
            </div>
            <p className='Trending-container-images-label-class-name' id='movie-name'>Bottom Gear</p>
          </div>
          <p className='Trending-container-images-label-mpaa' id='mpaa'>PG</p>
        </div>
      </div>
    </div>
  )
}

export default Trending
