import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter, AiFillLinkedin, AiFillFolder } from 'react-icons/ai'

const Footer = () => (
  <footer>
    <nav>
      <Link to="#"><AiOutlineTwitter/> Twitter</Link>
      <Link to="#"><AiFillLinkedin/> LinkedIn</Link>
      <Link to="#"><AiFillFolder/> Portfolio</Link>
    </nav>
  </footer>
)

export default Footer