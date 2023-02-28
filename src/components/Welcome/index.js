import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {Subscribed: 'Subscribe'}

  onSubscribeChange = () => {
    const {Subscribed} = this.state
    if (Subscribed === 'Subscribe') {
      this.setState(() => ({Subscribed: 'Subscribed'}))
    } else {
      this.setState(() => ({Subscribed: 'Subscribe'}))
    }
  }

  render() {
    const {Subscribed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          className="button"
          onClick={this.onSubscribeChange}
          type="button"
        >
          {Subscribed}
        </button>
      </div>
    )
  }
}

export default Welcome
