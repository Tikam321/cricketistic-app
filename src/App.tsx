import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Container/home';
import Ranking from './Container/Ranking';
import Currentscore from './Container/CurrentScore';
import NavBar from './Container/NavBar';
import CricketNews from './Container/cricketNews';

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
    </Routes>
    </>
  );
}

export default App;
