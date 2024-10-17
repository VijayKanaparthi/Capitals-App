import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  changeCaptial = event => {
    console.log(event.target.value)
    this.setState({activeId: event.target.value})
  }

  filterFunction = () => {
    const {activeId} = this.state
    const filterList = countryAndCapitalsList.find(each => each.id === activeId)
    return filterList.country
  }
  render() {
    const {activeId} = this.state
    const country = this.filterFunction(activeId)
    return (
      <div className="background">
        <div className="card">
          <div>
            <h1>Countries And Capitals</h1>
          </div>
          <div className="selectMoment">
            <select className="search-capital" onChange={this.changeCaptial}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
