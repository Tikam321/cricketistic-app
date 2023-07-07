import axios from "axios";
import { useState, useEffect } from "react";
import "../cricket-news.css";
interface contentType {
    content: contentListObj[];
}

type contentListObj = {
    content: ContentListType;
    
}

type ContentListType = {
    contentType: string,
    contentValue: string
}
const CricketNews = () => {
    
    
      const [newsList, setNewsList] = useState<contentType>();
    
    useEffect(() => {
       getRankingData();
    }, []);
    const getRankingData = async ()  => {
        const options = {
            method: 'GET',
            url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/detail/122025',
            headers: {
              'X-RapidAPI-Key': '31befe2527mshaddceaf8e352eccp1dcb8fjsn330aab986fc5',
              'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
          };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setNewsList(response.data);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <>
    {console.log(newsList?.content[0])
    }
      <div className="container">
        <h2>subcribe to CrickpEcricket news</h2>
        {newsList && newsList?.content.length > 0 && 
        newsList.content.map((item: contentListObj, index: number) => 
        <div className="news-card">
      <div className="crick-img"></div>
      <div className="container1">
        <p>{item.content?.contentValue}</p> 
      </div>
    </div>
        )}

    <div className="news-card">
      <div className="crick-img"></div>
      <div className="container1">
        <p>Architect & Engineezxckjdksjthe cricket news about Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus a dolorem sed eius dignissimos quibusdam
            necessitatibus, sit sequi pariatur, jdfr</p> 
      </div>
    </div>
        {/* <div className="news-card">
          <h4>
            the cricket news about Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus a dolorem sed eius dignissimos quibusdam
            necessitatibus, sit sequi pariatur, eaque rem ex quaerat et debitis
            in deserunt veniam amet earum.
          </h4>
        </div>
        <div className="news-card">
          <h4>
            the cricket news about Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus a dolorem sed eius dignissimos quibusdam
            necessitatibus, sit sequi pariatur, eaque rem ex quaerat et debitis
            in deserunt veniam amet earum.
          </h4>
        </div>
        <div className="news-card">
          <h4>
            the cricket news about Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus a dolorem sed eius dignissimos quibusdam
            necessitatibus, sit sequi pariatur, eaque rem ex quaerat et debitis
            in deserunt veniam amet earum.
          </h4>
        </div>
        <div className="news-card">
          <h4>
            the cricket news about Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus a dolorem sed eius dignissimos quibusdam
            necessitatibus, sit sequi pariatur, eaque rem ex quaerat et debitis
            in deserunt veniam amet earum.
          </h4>
        </div>
        <div className="news-card">
          <h4>
            the cricket news about Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus a dolorem sed eius dignissimos quibusdam
            necessitatibus, sit sequi pariatur, eaque rem ex quaerat et debitis
            in deserunt veniam amet earum.
          </h4>
        </div>
        <div className="news-card">
          <h4>
            the cricket news about Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus a dolorem sed eius dignissimos quibusdam
            necessitatibus, sit sequi pariatur, eaque rem ex quaerat et debitis
            in deserunt veniam amet earum.
          </h4>
        </div>
        <div className="news-card">
          <h4>
            the cricket news about Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus a dolorem sed eius dignissimos quibusdam
            necessitatibus, sit sequi pariatur, eaque rem ex quaerat et debitis
            in deserunt veniam amet earum.
          </h4>
        </div> */}
      </div>
    </>
  );
};
export default CricketNews;
