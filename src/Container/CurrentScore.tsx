import "../current-score.css"
const CurrentScore = () => {
    return (
    <>
    <div className="container">
        <div className="container-current-scores">
        
        <div className="score-card">
            <div className="live-tag live-tag-odi">
                <p>ODI</p>
            </div>
            <div className="date-css">
                12 jun 2034
            </div>
            <div className="flag-css">
                <span>India <p className="flag-icon flag-icon-in flag-icon-squared"></p></span>
                <span>235/5 50.0 overs</span>

            </div>
            <div className="flag-css">
                <span>New Zealand <h4 className="flag-icon flag-icon-au flag-icon-squared"></h4></span>
                <span>178/5 39.5 overs</span>
            </div>
            <div>
                <h4>New Zealand need 73 runs from 53 balls.</h4>
            </div>
        </div>
        <div className="score-card">
            <div className="live-tag live-tag-test">
                <p>TEST</p>
            </div>
            <div className="date-css">
                12 jun 2034
            </div>
            <div className="flag-css">
                <span>India <p className="flag-icon flag-icon-in flag-icon-squared"></p></span>
                <span>235/5 50.0 overs</span>

            </div>
            <div className="flag-css">
                <span>Austailia <h4 className="flag-icon flag-icon-au flag-icon-squared"></h4></span>
                <span>178/5 39.5 overs</span>
            </div>
            <div>
                <h4>Austrailia need 73 runs from 53 balls.</h4>
            </div>
        </div>
        <div className="score-card">
            <div className="live-tag live-tag-odi">
                <p>ODI</p>
            </div>
            <div className="date-css">
                12 jun 2034
            </div>
            <div className="flag-css">
                <span>England <p className="flag-icon flag-icon-in flag-icon-squared"></p></span>
                <span>235/5 50.0 overs</span>

            </div>
            <div className="flag-css">
                <span>Australia <h4 className="flag-icon flag-icon-au flag-icon-squared"></h4></span>
                <span>178/5 39.5 overs</span>
            </div>
            <div>
                <h4>Australia need 73 runs from 53 balls.</h4>
            </div>
        </div>
        </div>
        </div>
    </>
    );
}
export default CurrentScore;