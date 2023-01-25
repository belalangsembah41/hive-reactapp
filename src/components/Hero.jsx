import React from 'react'
import { HeroContainer, HeroImg } from './StyledHero'
import Img from '../assets/hero.png'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg src={Img} />
      <h1>Affordable Mansion</h1>
      <h2>Affordable Price</h2>
    </HeroContainer>
  )
}

export default Hero