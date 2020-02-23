import React from 'react'

import Lyrics from './Lyrics'

export default class Game extends React.Component {
  state = {
    data: {
      band: '',
      song: ''
    },
    score: 0
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    console.log(data)
    this.setState({ data })
  }

  handleSubmit = e => {
    e.preventDefault()

  }

  render() {
    return (
      <section>
        <div className="game">

          <h1>Boy Bands 4eva!</h1>

          <div className="lyrics">
            <Lyrics />
          </div>

          <form onSubmit={this.handleSubmit}>

            <div className="form-div">
              <label>Band Name:</label>
              <input
                placeholder="your answer here"
                name="band"
                onChange={this.handleChange}/>
            </div>

            <div className="form-div">
              <label>Song Title:</label>
              <input
                placeholder="your answer here"
                name="song"
                onChange={this.handleChange}/>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>

          </form>
        </div>
        
      </section>
    )
  }
}