import { useEffect, useRef, useState } from "react";
import axios from 'axios';
// import "../ranking.css"
import '../assets/css/ranking.css';
import { warn } from "console";
import  {CSVLink} from "react-csv";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useDownloadExcel } from 'react-export-table-to-excel';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

interface rankingObjectType {
    countryName: string,
    rankingPoints: number,
    id: number,
    position: number
}
const Ranking = () => {
    const [rankingList, setRankingList] = useState<rankingObjectType[]>([]);
    
    useEffect(() => {
      const getData = async () => {
            const options = {
                method: 'GET',
                url: '/getT20Ranking'
              };
            try {
                const response = await axios.request(options);
                console.log(response.data);
                setRankingList(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    return (
        <>
        {console.log(rankingList)
        }
            <div className="main-ranking container">
         {/* <CSVLink data={rankingList} > Download ranking</CSVLink>   */}
         {/* <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                   <button> Export excel </button>

                </DownloadTableExcel> */}
                {/* <button onClick={event => ExportToExcel(rankingList, "myFile")}> Export excel </button> */}
                <div className="card">
                <table>
                 <tbody>
                    <tr>
                        <th>Ranking</th>
                        <th>Country Name</th>
                        <th>Position</th>
                        <th>Rating</th>
                    </tr>
                    {rankingList && rankingList.map((item: rankingObjectType) => (
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