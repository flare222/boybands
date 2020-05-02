import React from 'react'
import { AiOutlineTwitter, AiFillLinkedin, AiFillFolder } from 'react-icons/ai'

const Footer = () => (
  <footer>
      <a href="https://twitter.com/flarer222" 
      target="_blank" 
      rel="noopener noreferrer">
      <AiOutlineTwitter/> 
      Twitter</a>
      <a href="https://www.linkedin.com/in/clare-robertson-ab1ba0142/"
      target="_blank" 
      rel="noopener noreferrer">
      <AiFillLinkedin/> 
      LinkedIn</a>
      <a href="https://flare222.github.io/portfolio/"
      target="_blank" 
      rel="noopener noreferrer"><AiFillFolder/> Portfolio</a>
  </footer>
)

export default Footer