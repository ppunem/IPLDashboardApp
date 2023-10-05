// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component{
    state = {matchesDetails: {},isLoading: true, recentPlayedMatches:[]}

    componentDidMount(){
        this.getTeamDetails()
    }

    getTeamDetails = async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params

        const response = await fetch (`https://apis.ccbp.in/ipl/${id}`)
        const data = await response.json()
        const formattedData={
            teamBannerUrl: data.team_banner_url,
            latestMatchDetails: data.latest_match_details,
            recentMatches: data.recent_matches,
        }
        
        this.setState({matchesDetails: formattedData,isLoading: false,recentPlayedMatches:formattedData.recentMatches})
    }

    getBgColor=()=>{
        const {match}=this.props
        const {params} = match
        const {id} = params

        switch(id){
            case 'RCB':
              return 'rcb'
            case 'KKR':
              return 'kkr'
            case 'CSK':
              return 'csk'
            case 'MI':
              return 'mi'
            case 'SRH':
              return 'srh'
            case 'KXP':
              return 'kxp'
            case 'RR':
              return 'rr'
            case 'DC':
              return 'dc'
            default:
                return null
        }
    }

    renderMatchDetails=()=>{
        const {matchesDetails,recentPlayedMatches}=this.state

        return(
            <div className={`container ${this.getBgColor()}`}>
              <img className="banner-image" src={matchesDetails.teamBannerUrl} alt="team banner"/>
              <p className="latest-matches-heading">Latest Matches</p>
              <LatestMatch latestMatchDetails={matchesDetails.latestMatchDetails} key={matchesDetails.latestMatchDetails.id}/>
              <ul className="recent-match-container">{recentPlayedMatches.map(each=><MatchCard matchh={each} key={each.id}/>)}</ul>
            </div>
        )
    }

    render(){
        const {isLoading} = this.state

        return (
            <div>
              {isLoading?(<div testid="loader"><Loader type="Oval" color="#ffffff" height={50} width={50} /></div>):(this.renderMatchDetails()}
            </div>
        )
    }
}
export default TeamMatches
