// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component{
  state={teamsList: [], isLoading: true}

  componentDidMount(){
    this.getTeams()
  }

  getTeams = async () => {
  const response = await fetch("https://apis.ccbp.in/ipl")
  const data= await response.json()
  const array=data.teams
  const formattedData=array.map(each=>({
    name: each.name,
    id: each.id,
    teamImageUrl: each.team_image_url,
  }))

  this.setState({teamsList: formattedData,isLoading: false})
  }

  renderTeams=()=>{
    const {teamsList} = this.state

    return (
      <ul className="team-cards-container">
        {teamsList.map(eachTeam=>
          <TeamCard eachTeam={eachTeam} key={eachTeam.id}/>
          )}
      </ul>
    )
  }

  render(){
    const {isLoading}=this.state
    return (
        <div className="bg">
          <div className="title-container">
            <img className="ipl-logo" src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl logo"/>
            <h1 className="main-heading">IPL Dashboard</h1>
          </div>
          <div>
            {isLoading?(<div testid="loader"><Loader type="Oval" color="#ffffff" height={50} width={50} /></div>):(this.renderTeams())}
          </div>
        </div>
    )
  }

}

export default Home