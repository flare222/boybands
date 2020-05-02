import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHeart } from 'react-icons/io'

const Home = () => (
  <>
    {/* <section className="home"> */}
    <h1>B<span><IoMdHeart/></span>y Bands 4eva!</h1>
    <h2>a lyrics game</h2>
      <Link to="/game">
        <button type="button">Lets Play!</button>
      </Link>
    {/* </section> */}
    </>
)

export default Home