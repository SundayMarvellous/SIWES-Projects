import './App.css';
import './components/Login';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import AllMovies from './components/AllMovies';
import TVSeries from './components/TVSeries';
import BookmarkedMovies from './components/BookmarkedMovies';

import {
  BrowserRouter as Router,
  Routes,
  Route,NavLink, Redirect,Navigate
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allmovies" element={<AllMovies />} />
        <Route path="/tvseries" element={<TVSeries />} />
        <Route path="/bookmarked" element={<BookmarkedMovies />} />
      </Routes>
    </Router>
  );
}

export default App;
