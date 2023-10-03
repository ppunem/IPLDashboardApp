// Write your code here
import './index.css'

const MatchCard=props=>{
    const {matchh}=props
    const matchhDetails={
        competingTeamLogo:matchh.competing_team_logo,
        competingTeam:matchh.competing_team,
        result:matchh.result,
        matchStatus:matchh.match_status
    }

    const color=matchhDetails.matchStatus==="Won"?`green`:`red`

    return (
        <div className="card">
          <img className="Logo" src={matchhDetails.competingTeamLogo} alt={`competing team ${matchhDetails.competingTeam}`}/>
          <h1 className="competing-team">{matchhDetails.competingTeam}</h1>
          <p className="reesult">{matchhDetails.result}</p>
          <p className={`STatus ${color}`}>{matchhDetails.matchStatus}</p>
        </div>
    )
}

export default MatchCard
