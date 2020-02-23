import React from 'react'

export default class Lyrics extends React.Component {
  state = {
    song: {
      song_lyrics: '',
      band_name: '',
      song_name: ''
    }
  }

  render() {
    return (
      <h2>Lyrics go here</h2>
    )
  }
}