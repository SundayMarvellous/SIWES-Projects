import './App.css';
import Navbar from './components/Navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import about from './components/about';


function App() {
  return (
    <> <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
      </Route>
    </Routes>
  </BrowserRouter>
    
    </>
  );
}

export default App;
