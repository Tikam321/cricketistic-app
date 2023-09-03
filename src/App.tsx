import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router';
import Home from './Container/home';
import Ranking from './Container/Ranking';
import { BrowserRouter} from 'react-router-dom';
import Currentscore from './Container/CurrentScore';
import NavBar from './Container/NavBar';
import CricketNews from './Container/cricketNews';

function App() {
  // const navigate = useNavigate();
  // navigate("/");
  return (
    <>
    <h1> this is first Commit</h1>
    <h1> this is second Commit</h1>
    <NavBar/>
    <h1>the reset --hard changes to this current commit</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/scoreBoard" element={<Currentscore/>}/>
      <Route path="/news" element={<CricketNews/>}/>
    </Routes>
    </>
  );
}

export default App;
