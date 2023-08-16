import React from 'react';
import TheGreatLands from '../assets/Movie-cards/The Great Lands.svg';
import TheDiary from '../assets/Movie-cards/The Diary.svg';
import Dot from '../assets/Movie-cards/Dot.svg';
import Onehundredandtwelve from '../assets/Movie-cards/112.svg';
import Asiain24Days from '../assets/Movie-cards/Asia in 24 Days.svg';
import AutosporttheSeries from '../assets/Movie-cards/Autosport the Series.svg';
import BelowEcho from '../assets/Movie-cards/Below Echo.svg';
import CommunityofOurs from '../assets/Movie-cards/Community of Ours.svg';
import Darker from '../assets/Movie-cards/Darker.svg';
import Dogs from '../assets/Movie-cards/Dogs.svg';
import DuringtheHunt from '../assets/Movie-cards/During the Hunt.svg';
import EarthsUntouched from '../assets/Movie-cards/Earths Untouched.svg';
import LoneHeart from '../assets/Movie-cards/Lone Heart.svg';
import MissionSaturn from '../assets/Movie-cards/Mission; Saturn.svg';
import NoLandBeyond from '../assets/Movie-cards/No Land Beyond.svg';
import Offthetrack from '../assets/Movie-cards/Off the Track.svg';
import ProductionLine from '../assets/Movie-cards/Production Line.svg';
import Relentless from '../assets/Movie-cards/Relentless.svg';
import SameAnswer2 from '../assets/Movie-cards/Same Answer II.svg';
import TheHeiress from '../assets/Movie-cards/The Heiress.svg';
import TheRockies from '../assets/Movie-cards/The Rockies.svg';
import TheTastyTour from '../assets/Movie-cards/The Tasty Tour.svg';
import UnresolvedCases from '../assets/Movie-cards/Unresolved Cases.svg';
import VanLife from '../assets/Movie-cards/Van Life.svg';
import WhisperingHill from '../assets/Movie-cards/Whispering Hill.svg';
import RInlinemovieicon from '../assets/Movie-cards/R-Inline-movie-icon.svg';
import Inlinebookmarkicon from '../assets/Movie-cards/Inline-bookmark-icon.svg';
import Inlinebookmarkcheckedicon from '../assets/Movie-cards/Inline-bookmark-checked-icon.svg';
import InlineTVSeriesicon from '../assets/Movie-cards/Inline-TV-icon.svg';


function Recommendations() {
  return (
    <div className='Recommended-movies'>
       <div className='Recommended-container-images'>
        <img src={TheGreatLands} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2019</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>E</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>The Great Lands</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={TheDiary} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2019</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>TV Series</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>The Diary</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={EarthsUntouched} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2017</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>18+</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Earth's Untouched</p>
          </div>
        </div>
      </div> 
      <div className='Recommended-container-images'>
        <img src={NoLandBeyond} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2019</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>E</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>No Land Beyond</p>
          </div>
        </div>
      </div> 
      <div className='Recommended-container-images'>
        <img src={DuringtheHunt} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2016</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>TV Series</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>During the Hunt</p>
          </div>
        </div>
      </div> 
      <div className='Recommended-container-images'>
        <img src={AutosporttheSeries} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2016</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>18+</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Autosport the Series</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={SameAnswer2} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2017</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>E</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Same Answer II</p>
          </div>
        </div>
      </div> 
      <div className='Recommended-container-images'>
        <img src={BelowEcho} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2016</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Below Echo</p>
          </div>
        </div>
      </div> 
      <div className='Recommended-container-images'>
        <img src={TheRockies} />
        <img src={Inlinebookmarkcheckedicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2015</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>TV Series</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>E</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>The Rockies</p>
          </div>
        </div>
      </div> 
      <div className='Recommended-container-images'>
        <img src={Relentless} />
        <img src={Inlinebookmarkcheckedicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2017</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Relentless</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={CommunityofOurs} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2018</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>TV Series</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>18+</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Community of Ours</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={VanLife} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2015</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Van Life</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={TheHeiress} />
        <img src={Inlinebookmarkcheckedicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2021</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>The Heiress</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={Offthetrack} />
        <img src={Inlinebookmarkcheckedicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2017</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>18+</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Off the Track</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={WhisperingHill} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2017</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>E</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Whispering Hill</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={Onehundredandtwelve} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2013</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>TV Series</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>112</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={LoneHeart} />
        <img src={Inlinebookmarkcheckedicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2017</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>E</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Lone Heart</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={ProductionLine} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2018</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>TV Series</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Production Line</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={Dogs} />
        <img src={Inlinebookmarkcheckedicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2016</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>TV Series</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>E</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Dogs</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={Asiain24Days} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2020</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>TV Series</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Asia in 24 Days</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={TheTastyTour} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2016</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>TV Series</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>The Tasty Tour</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={Darker} />
        <img src={Inlinebookmarkcheckedicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2017</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>18+</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Darker</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={UnresolvedCases} />
        <img src={Inlinebookmarkicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2018</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={InlineTVSeriesicon} /></div>
                <p>TV Series</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>18+</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Unresolved Cases</p>
          </div>
        </div>
      </div>
      <div className='Recommended-container-images'>
        <img src={MissionSaturn} />
        <img src={Inlinebookmarkcheckedicon}  className='Recommended-container-images-bookmark'/>
        <div className='Recommended-container-images-label'>
          <div className='Recommended-container-images-label-class'>
            <div className='Recommended-container-images-label-class-yearCategory'>
              <p className='Recommended-container-images-label-class-yearCategory-year' id='movie-year'>2017</p>
              <img src={Dot} />
              <div className='Recommended-container-images-label-class-yearCategory-category' id='movie-category'>
                <div className='Recommended-container-images-label-class-yearCategory-category-image'><img src={RInlinemovieicon} /></div>
                <p>Movie</p>
              </div>
              <img src={Dot} />
              <p className='Recommended-container-images-label-mpaa' id='mpaa'>PG</p>
            </div>
            <p className='Recommended-container-images-label-class-name' id='movie-name'>Mission: Saturn</p>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Recommendations
