import styled from "styled-components";

const DiscoverContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  position: relative;
`;

const DiscoverTitle = styled.div`
  h2 {
    font-weight: 500;
    position: relative;
    margin-bottom: 0.5rem;

    &::after {
      content: "";
      position: absolute;
      top: 35px;
      left: 0;
      width: 60px;
      height: 4px;
      border-radius: 15px;
      background-color: #55aad0;
    }
  }
`;

const DiscoverCardContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1236px) {
    padding: 0;
  }
`;

const DiscoverCard = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 2rem 1rem;
  border-radius: 10px;
  flex-grow: 2;
  box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  h1 {
    position: relative;
    top: 10px;
    left: 20px;
    color: #353333;
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.5s ease-in-out;
  }
`;

const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const DiscoverButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2rem;
  margin: 2.5rem auto;
  font-size: 18px;
  background-color: #3a86a8;
  border: none;
  border-radius: 10px;
  color: #f1f1f1;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.1);
`;

export {
  DiscoverContainer,
  DiscoverTitle,
  DiscoverCardContainer,
  DiscoverCard,
  CardImg,
  DiscoverButton,
};
