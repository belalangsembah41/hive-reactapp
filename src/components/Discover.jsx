import React from 'react'
import { DiscoverContainer, DiscoverTitle, DiscoverCardContainer, DiscoverCard, CardImg, DiscoverButton } from './StyledDiscover'
import WashingtonImg from '../assets/washington.png'
import MiamiImg from '../assets/miami.png'
import CaliforniaImg from '../assets/california.png'

const Discover = () => {
  return (
    <DiscoverContainer>
      <DiscoverTitle>
        <h2>Find our mansions to discover</h2>
        <h4>Choose between many regions in USA.</h4>
      </DiscoverTitle>
      <DiscoverCardContainer>
        <DiscoverCard>
          <CardImg src={WashingtonImg} />
          <h1>Washington</h1>
        </DiscoverCard>
        <DiscoverCard>
          <CardImg src={MiamiImg} />
          <h1>Miami</h1>
        </DiscoverCard>
        <DiscoverCard>
          <CardImg src={CaliforniaImg} />
          <h1>California</h1>
        </DiscoverCard>
      </DiscoverCardContainer>
      <DiscoverButton>Discover More</DiscoverButton>
    </DiscoverContainer>
  )
}

export default Discover