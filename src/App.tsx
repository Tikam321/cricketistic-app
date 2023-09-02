import '../src/assets/css/App.css';
import { Route, Routes } from 'react-router';
import Home from './Container/home';
import Ranking from './Container/Ranking';
import Currentscore from './Container/CurrentScore';
import NavBar from './Container/NavBar';
import CricketNews from './Container/cricketNews';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/Login/SignUpPage';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/scoreBoard" element={<Currentscore/>}/>
      <Route path="/news" element={<CricketNews/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>}/>
    </Routes>
    </>
  );
}

export default App;
