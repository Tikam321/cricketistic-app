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
import SignUpPage from './pages/Login/SignUpPage';
import LoginPage from './pages/Login/LoginPage';

function App() {
  // const navigate = useNavigate();
  // navigate("/");
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/scoreBoard" element={<Currentscore/>}/>
      <Route path="/news" element={<CricketNews/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>

    </Routes>
    </>
  );
}

export default App;
