// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard=props=>{
    const {eachTeam} = props
    const {name,id,teamImageUrl}=eachTeam

    return(
        <Link to={`team-matches/${id}`}>
          <li>
            <img className="team-logo" src={teamImageUrl} alt={name}/>
            <p className="team-name">{name}</p>
          </li>
        </Link>
    )
}

export default TeamCard