import React from 'react';
import {ReactComponent as Movieicon4home} from '../assets/Movie.icon4home.svg';
import {ReactComponent as Trendingicon} from '../assets/Trending.icon.svg';
import {ReactComponent as Movieslisticon} from '../assets/Movies.list.icon.svg';
import {ReactComponent as TVicon} from '../assets/Tv.icon.svg';
import {ReactComponent as Bookmarkicon} from '../assets/Bookmark.icon.svg';
import {ReactComponent as Profileicon} from '../assets/Profile.icon.svg';
import {ReactComponent as Searchicon} from '../assets/Search.icon.svg';



function Home() {
  return (
    <div className='Home'>
      <div className='Nav'>
      <Movieicon4home />
        <div className='Sections'>
            <Trendingicon />
            <Movieslisticon />
            <TVicon />
            <Bookmarkicon />
        </div>
        <Profileicon />
      </div>
      <div className='MoviesContainer'>
        <div className='Search'>
        <Searchicon />
        </div>
        <div className='Trending'>

        </div>
        <div className='Recommendations'>

        </div>
      </div>
    </div>
  )
}

export default Home
