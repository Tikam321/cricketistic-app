import { useEffect, useState } from "react";
import axios from 'axios';
import "../ranking.css"
const Ranking = () => {
    // const [rankingList, setRankingList] = useState([]);
    
    // useEffect(() => {
    //   const getData = async () => {
    //         const options = {
    //             method: 'GET',
    //             url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
    //             headers: {
    //               'X-RapidAPI-Key': '31befe2527mshaddceaf8e352eccp1dcb8fjsn330aab986fc5',
    //               'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    //             }
    //           };
    //         try {
    //             const response = await axios.request(options);
    //             console.log(response.data);
    //             setRankingList(response);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     getData();
    //    getRankingData();
    // }, []);
    // const getRankingData = async ()  => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
    //         headers: {
    //           'X-RapidAPI-Key': '31befe2527mshaddceaf8e352eccp1dcb8fjsn330aab986fc5',
    //           'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    //         }
    //       };
    //     try {
    //         const response = await axios.request(options);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    return (
        <>
            <div className="main-ranking container">
        <div className="card">
            <h2> T20 ranking </h2>
            {/* <hr> */}
            <table>
            <tr>
                <th>POS</th>
                <th>TEAM</th>
                <th>RATING</th>
            </tr>
            <tr>
                <td>1</td>
                <td>india</td>
                <td>234</td>
            </tr>
            <tr>
                <td>2</td>
                <td>austraiia</td>
                <td>230</td>
            </tr><tr>
                <td>3</td>
                <td>sri lnka</td>
                <td>220</td>
            </tr>
            <tr>
                <td>4</td>
                <td>scotland</td>
                <td>198</td>
            </tr><tr>
                <td>5</td>
                <td>nepal</td>
                <td>184</td>
            </tr>
        </table>
        </div>
        <div className="card">
            <h2> ODI ranking </h2>
            {/* <hr> */}
            <table>
            <tr>
                <th>POS</th>
                <th>TEAM</th>
                <th>RATING</th>
            </tr>
            <tr>
                <td>1</td>
                <td>india</td>
                <td>234</td>
            </tr>
            <tr>
                <td>2</td>
                <td>austraiia</td>
                <td>230</td>
            </tr><tr>
                <td>3</td>
                <td>sri lnka</td>
                <td>220</td>
            </tr>
            <tr>
                <td>4</td>
                <td>scotland</td>
                <td>198</td>
            </tr><tr>
                <td>5</td>
                <td>nepal</td>
                <td>184</td>
            </tr>
        </table>
        </div>
    <div className="card">
        <h2> TEST ranking </h2>
        {/* <hr> */}
        <table>
        <tr>
            <th>POS</th>
            <th>TEAM</th>
            <th>RATING</th>
        </tr>
        <tr>
            <td>1</td>
            <td>india</td>
            <td>234</td>
        </tr>
        <tr>
            <td>2</td>
            <td>austraiia</td>
            <td>230</td>
        </tr><tr>
            <td>3</td>
            <td>sri lnka</td>
            <td>220</td>
        </tr>
        <tr>
            <td>4</td>
            <td>scotland</td>
            <td>198</td>
        </tr><tr>
            <td>5</td>
            <td>nepal</td>
            <td>184</td>
        </tr>
    </table>
    </div>
   
</div>
        </>
    );
}
export default Ranking;