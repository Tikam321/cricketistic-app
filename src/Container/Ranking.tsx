import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../assets/css/ranking.css';
import { rankingFormat, tempRankinglIST } from '../helper/rankingHelper';
import { getOdiRankinglist, getT20RankingList, getTestRankinglist } from "../store/actions/rankingActions";
import { RootState } from "../store/reducer/rootReducer";

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
    const tooltipRef = useRef<HTMLSpanElement>(null);

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
    useEffect(() => {
        const tooltipSpan: any = document.querySelectorAll(".tooltip");
        console.warn(tooltipSpan);
        window.onmousemove = function (event) {
            var x1 = (event.clientX - 100) + "px";
            var y1 = (event.clientY - 30) + "px";
            console.log(x1);
            
            for (var i = 0; i < tooltipSpan.length; i++) {
                tooltipSpan[i].style.top = y1;
                tooltipSpan[i].style.left = x1;
            }
        }
    }, []);
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
                    { tempRankinglIST.map((item: rankingObjectType) => (
                        <tr>
                            <td className="relative-tooltip" >{item.position}
                            <span ref={tooltipRef} className="tooltip">{item.position}</span> 
                            </td>
                            <td className="relative-tooltip" >{item.countryName}
                            <span className="tooltip">{item.countryName}</span> 
                            </td>
                            <td className="relative-tooltip" >{item.position}
                            <span className="tooltip">{item.position}</span> 
                            </td>
                            <td className="relative-tooltip" > {item.rankingPoints}
                            <span className="tooltip">{item.rankingPoints}</span> 
                            </td>
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