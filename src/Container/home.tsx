import '../assets/css/global.css';
import CurrentScore from "./CurrentScore";
import Ranking from "./Ranking";
const Home = () => {
    return (
      <>
      <div className="container">
      <h2>
        this is home page of CRICKPEDIA.
      </h2>
      <Ranking />
      <CurrentScore />
      </div>
      </>
    );
}

export default Home;