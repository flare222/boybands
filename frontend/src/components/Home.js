import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section>
    <div className="home">
      <h1>Boy Band Lyrics Game!</h1>
      <Link to="/game">
        <button type="button">Lets Play!</button>
      </Link>
    </div>
  </section>
)

export default Home