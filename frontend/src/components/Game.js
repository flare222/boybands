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
    score: 0,
    click: 0,
    showWinner: false
  }

  getData = async () => {
    try {
      const res = await axios.get('/api/game/')
      const randomIndex = (Math.floor(Math.random() * res.data.length))
      console.log(res.data[randomIndex])
      this.setState({ song: res.data[randomIndex]})
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount() {
    this.getData()
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    console.log(data)
    this.setState({ data })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.data.band.toLowerCase() === this.state.song.band_name.toLowerCase() && this.state.data.song.toLowerCase() === this.state.song.song_name.toLowerCase()) {
      this.setState({ score: this.state.score + 15 })
    } else if (this.state.data.song.toLowerCase() === this.state.song.song_name.toLowerCase()) {
      this.setState({ score: this.state.score + 10 })
    } else if (this.state.data.band.toLowerCase() === this.state.song.band_name.toLowerCase()) {
      this.setState({ score: this.state.score + 5 })
    }
    this.setState({ data: { band: '', song: '' }, click: this.state.click + 1 })
    if (this.state.click === 9) {
      this.setState({ showWinner: true })
    }
    this.getData()
  }

  handleClick = () => {
    this.getData()
    this.setState({ score: 0, click: 0, showWinner: false })
  }

  render() {
    if (!this.state.song) return null
    return (
      <main className="main-game">
       {!this.state.showWinner ?  
      <section className="game">
          <div className="lyrics">
            <Lyrics song={this.state.song}/>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="form-div">
              <label>Band Name:</label>
              <input
                placeholder="your answer here"
                name="band"
                value={this.state.data.band}
                onChange={this.handleChange}/>
            </div>

            <div className="form-div">
              <label>Song Title:</label>
              <input
                placeholder="your answer here"
                name="song"
                value={this.state.data.song}
                onChange={this.handleChange}/>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
      </section>
      : null }
      
      {!this.state.showWinner ? 
      <section className="score">
        <p>Score:</p>
        <p>{this.state.score}</p>
      </section>
      : null }
        
        {this.state.showWinner ? 
          <div className="winner">
            <p>Well played!  You scored {this.state.score} points!</p>
            <div>
              <button 
              type="button"
              onClick={this.handleClick}>Play again!</button>
            </div>
          </div>
          : null }
      </main>
    )
  }
}