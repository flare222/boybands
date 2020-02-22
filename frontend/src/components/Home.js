import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section>
    <h1>Boy Band Lyrics Game!</h1>
    <Link to="/game">
      <button type="button">Lets Play!</button>
    </Link>
  </section>
)

export default Home