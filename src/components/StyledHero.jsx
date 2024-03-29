import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  height: 80vh;
  color: #ffffff;
  padding: 1rem;

  h1 {
    font-size: 35px;
  }

  h2 {
    margin-top: 10px;
  }

  h1,
  h2 {
    display: inline-block;
    background-color: #295164;
    padding: 15px;
    border-radius: 10px;
  }
`;

const HeroImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 1400px;
  height: 100vh;
  object-fit: cover;
  z-index: -10;
  overflow: hidden;
`;

export { HeroContainer, HeroImg };
