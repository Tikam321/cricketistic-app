import { useEffect, useReducer, useRef, useState } from "react";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import '../assets/css/ranking.css';
import { getOdiRankinglist, getT20RankingList, getTestRankinglist } from "../store/actions/rankingActions";
import { RootState } from "../store/reducer/rootReducer";
import rankingReducer from '../store/reducer/rankingReducer';
import { rankingFormat } from '../helper/rankingHelper';

export interface rankingObjectType {
    countryName: string,
    rankingPoints: number,
    id: number,
    position: number
}

const rankingData: rankingObjectType[] = [{  
        countryName: "India",
        rankingPoints: 1,
        id: 1,
        position: 1
}];

const Ranking = () => {

    const dispatcher =  useDispatch();
    const { t20RankingList, odiRankingList, testRankingList } = useSelector((rootState: RootState) => rootState.ranking);
    const [t20Rankings, setT20Rankings] = useState<rankingObjectType[]>([]);
    const [odiRankings, setOdiRankings] = useState<rankingObjectType[]>([]);
    const [testRankings, setTestRankings] = useState<rankingObjectType[]>([]);

    const [format, setFormat] = useState<string>("TEST");

    useEffect(() => {
        console.log("dispatch action is called");
        dispatcher(getT20RankingList());
        dispatcher(getOdiRankinglist());
        dispatcher(getTestRankinglist());
    }, []);

    useEffect(() => {
        if (typeof t20RankingList !== "undefined") {
            setT20Rankings(t20RankingList);
            console.log(t20RankingList);
        } else {
            console.log("the ranklist is undefined");
            
        }
    }, [t20RankingList]);

    useEffect(() => {
        if (typeof odiRankingList !== "undefined") {
            setOdiRankings(odiRankingList);
            console.log(t20RankingList);
        } else {
            console.log("the ranklist is undefined");
            
        }
    }, [odiRankingList]);

    useEffect(() => {
        if (typeof testRankingList !== "undefined") {
            setTestRankings(testRankingList);
            console.log(t20RankingList);
        } else {
            console.log("the ranklist is undefined");
            
        }
    }, [testRankingList]);

    const getRankings = (format: string) => {
        if (format === rankingFormat.T20) {
            return t20Rankings;
        } else if (format === rankingFormat.ODI) {
            return odiRankings;
        } else {
            return testRankings;
        }
    };

    return (
        <>

            <div className="main-ranking ranking-container container">
         {/* <CSVLink data={rankingList} > Download ranking</CSVLink>   */}
         {/* <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                   <button> Export excel </button>

                </DownloadTableExcel> */}
                {/* <button onClick={event => ExportToExcel(rankingList, "myFile")}> Export excel </button> */}
                <h2>ICC Cricket Ranking - Men's Batting </h2>
                <div className="ranking-btn"> 
                <button onClick={() => setFormat("TEST")} className={`${format === "TEST" ? "activated" : ""}`}> TEST </button>
                <button onClick={() => setFormat("ODI")}className={`${format === "ODI" ? "activated" : ""}`}> ODI</button>
                <button onClick={() => setFormat("T20")} className={`${format === "T20" ? "activated" : ""}`}> T20</button>
                 </div>
                <div className="card">
                <table>
                 <tbody>
                    <tr>
                        <th>Ranking</th>
                        <th>Country Name</th>
                        <th>Position</th>
                        <th>Rating</th>
                    </tr>
                    { getRankings(format).map((item: rankingObjectType) => (
                        <tr>
                            <td>{item.position}</td>
                            <td>{item.countryName}</td>
                            <td>{item.position}</td>
                            <td>{item.rankingPoints}</td>
                        </tr>
                    ))}
                  </tbody>
                </table>
                </div>
</div>
        </>
    );
}
export default Ranking;