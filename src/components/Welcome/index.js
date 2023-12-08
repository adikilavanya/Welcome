// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSub: false}

  onSub = () => {
    this.setState(priState => ({isSub: !priState.isSub}))
  }
  isSubscribe = () => {
    const {isSub} = this.state
    return isSub ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.isSub()
    return (
      <div className="bg">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you!</p>

        <button className="button" type="button" onClick="onSub">
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome