import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Search from './components/Search';
import WishList from './components/WishList';


function App() {
  const [value, setValue] = useState("");
  const [result,setResult] = useState([]);
  const [result1, setResult1] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/wishlist">Wish List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/search" element={<Search setValue={setValue} value={value} setResult={setResult} result={result} setResult1={setResult1} result1={result1} />}>
          </Route>
          <Route path="/wishlist" element={<WishList/>}>
          </Route>
          <Route path="/" element={<Home setValue={setValue} value={value}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
