// Write your code here
import './index.css'

const LatestMatch =props=>{
    const {latestMatchDetails} = props
    const updatedLatestMatchDetails={
        umpires:latestMatchDetails.umpires,
        result:latestMatchDetails.result,
        manOfTheMatch:latestMatchDetails.man_of_the_match,
        id:latestMatchDetails.id,
        date:latestMatchDetails.date,
        venue:latestMatchDetails.venue,
        competingTeam:latestMatchDetails.competing_team,
        competingTeamLogo:latestMatchDetails.competing_team_logo,
        firstInnings:latestMatchDetails.first_innings,
        secondInnings:latestMatchDetails.second_innings,
        matchStatus:latestMatchDetails.match_status
    }

    return(
        <div className="latest-match-card">
        <div className="small-container">
          <div className="first">
            <h1 className="team-name">{updatedLatestMatchDetails.competingTeam}</h1>
            <p className="Date">{updatedLatestMatchDetails.date}</p>
            <p className="Venue">{updatedLatestMatchDetails.venue}</p>
            <p className="Result">{updatedLatestMatchDetails.result}</p>
          </div>
          <img className="team-logo" src={updatedLatestMatchDetails.competingTeamLogo} alt={`latest match ${updatedLatestMatchDetails.competingTeam}`}/>
        </div>
        <hr className="horizontal-line"/>
          <div className="second">
            <p className="innings-head">First Innings</p>
            <p className="innings">{updatedLatestMatchDetails.firstInnings}</p>
            <p className="innings-head">Second Innings</p>
            <p className="innings">{updatedLatestMatchDetails.secondInnings}</p>
            <p className="man-head">Man Of The Match</p>
            <p className="man">{updatedLatestMatchDetails.manOfTheMatch}</p>
            <p className="man-head">Umpires</p>
            <p className="man">{updatedLatestMatchDetails.umpires}</p>
          </div>
        </div>
    )
}

export default LatestMatch