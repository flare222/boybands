import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section>
    <div className="home">
    <h1>Boy Bands 4eva!</h1>
    <h2>a lyrics game</h2>
      <Link to="/game">
        <button type="button">Lets Play!</button>
      </Link>
    </div>
  </section>
)

export default Home