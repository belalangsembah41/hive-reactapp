import styled from "styled-components";

const FunctionContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  position: relative;
  background-color: #3a86a8;
`;

const FunctionTitle = styled.div`
  color: #f0f7fa;

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

const FunctionCardContainer = styled.div`
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

const FunctionCard = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  margin: 2rem 2rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  flex-grow: 2;
  box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.3);
  background-color: #f0f7fa;

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

const FunctionImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  padding: 0 0.5rem;

  h4 {
    margin-top: 0.5rem;
  }
`;

const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  width: 100%;
  margin-top: 1rem;
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
  FunctionContainer,
  FunctionTitle,
  FunctionCardContainer,
  FunctionCard,
  FunctionImg,
  CardTitle,
  CardDetail,
  Button,
};
