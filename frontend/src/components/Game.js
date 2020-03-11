import React from 'react'
import axios from 'axios'

import Lyrics from './Lyrics'

export default class Game extends React.Component {
  state = {
    data: {
      band: '',
      song: ''
    },
    song: [],
    score: 0
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/game/')
      console.log(res.data[0])
      this.setState({ song: res.data[0] })
    } catch (error) {
      console.log(error)
    }
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
    if (!this.state.song) return null
    return (
      <section>
        <div className="game">

          <div className="lyrics">
            <Lyrics song={this.state.song}/>
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