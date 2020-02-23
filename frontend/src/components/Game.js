import React from 'react'

export default class Game extends React.Component {
  state = {
    song: {
      song_lyrics: '',
      band_name: '',
      song_name: ''
    }, 
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
        <h1>Boy Bands 4eva!</h1>



        <form onSubmit={this.handleSubmit}>

          <div>
            <label>Band Name:</label>
            <input
              placeholder="your answer here"
              name="band"
              onChange={this.handleChange}/>
          </div>

          <div>
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
      </section>
    )
  }
}