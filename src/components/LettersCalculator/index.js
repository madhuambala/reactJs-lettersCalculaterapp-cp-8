// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {textCount: ''}

  onCountLetters = event => {
    const {value} = event.target
    this.setState({textCount: value})
  }

  render() {
    const {textCount} = this.state
    const textLength = textCount.length
    return (
      <div className="container">
        <div className="bg-container">
          <div className="card">
            <div>
              <h1 className="heading">Calculate The Letters You Entered</h1>
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                onChange={this.onCountLetters}
                placeholder="Enter the phrase"
                type="text"
                value={textCount}
              />
              <br />
              <p className="button" type="button">
                No.of letters: {textLength}
              </p>
            </div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
