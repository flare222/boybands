import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

const Nav = () => (
  <nav>
    <Link to ="/"><AiFillHome/> Home</Link>

  </nav>
)

export default Nav