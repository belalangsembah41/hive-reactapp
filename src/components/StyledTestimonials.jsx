import styled from "styled-components";

const TestimonialsContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  padding: 3rem;
  display: flex;

  @media screen and (max-width: 961px) {
    flex-wrap: wrap;
    flex-grow: 1;
  }
`;

const TestimonialsImg = styled.img`
  width: 600px;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 1090px) {
    width: 500px;
    height: 400px;
  }

  @media screen and (max-width: 961px) {
    width: 100%;
  }
`;

const TestimonialsText = styled.div`
  margin-left: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 35px;
    line-height: 35px;
    width: 80%;
  }

  p {
    width: 80%;
    margin-top: 2rem;
    font-size: 18px;
  }

  @media screen and (max-width: 1090px) {
    margin-left: 10px;

    h1 {
      font-size: 30px;
      width: 100%;
    }

    p {
      width: 100%;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 961px) {
    text-align: center;

    h1 {
      width: 80%;
      margin: 0 auto;
    }

    p {
      width: 70%;
      margin: 1rem auto;
    }
  }
`;

const BtnGroup = styled.div`
  display: flex;

  @media screen and (max-width: 961px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  margin: 2rem 1rem 1rem 0rem;
  font-size: 16px;
  background-color: #3a86a8;
  border: none;
  border-radius: 5px;
  color: #f1f1f1;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 961px) {
    margin-top: 1rem;
  }
`;

const ButtonPrice = styled(Button)`
  background-color: transparent;
  border: 2px solid #3a86a3;
  color: #3a86a3;
`;

const TestimonialsDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 1rem 0;
  width: 100%;
  /* flex-grow: 1; */

  h2 {
    text-align: center;
    font-size: 20px;
    margin: 0 10px;
  }

  span {
    display: inline-block;
    font-size: 22px;
    text-align: center;
  }

  @media screen and (max-width: 961px) {
    margin: 1rem auto 0;
  }
`;

export {
  TestimonialsContainer,
  TestimonialsImg,
  TestimonialsText,
  TestimonialsDetail,
  BtnGroup,
  Button,
  ButtonPrice,
};
