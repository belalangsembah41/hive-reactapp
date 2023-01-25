import styled from "styled-components";

const FooterContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  background-color: #3a86a8;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const NewsletterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;

  @media screen and (max-width: 943px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const NewsletterText = styled.div`
  color: #f0f7fa;

  @media screen and (max-width: 943px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const NewsletterInput = styled.input`
  height: 30px;
  width: 400px;
  border: none;
  border-radius: 5px;
  padding-left: 1rem;
  font-weight: 500;
  font-size: 16px;
  color: #000;
  outline: none;
`;

const FooterMain = styled.div`
  display: flex;
  padding: 1rem 2rem;
  margin-top: 1rem;
  color: #f0f7fa;

  @media screen and (max-width: 848px) {
    flex-wrap: wrap;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 35px;
  }

  p {
    margin-top: 0.5rem;
  }
`;

const Products = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;

  h4 {
    font-size: 23px;
  }

  li {
    margin-top: 10px;
    font-size: 17px;
    font-weight: 500;
  }

  @media screen and (max-width: 848px) {
    margin: 1rem 2rem;
    margin-left: 0;
  }
`;

const Company = styled(Products)``;

const Legal = styled(Products)``;

export {
  FooterContainer,
  NewsletterContainer,
  NewsletterText,
  NewsletterInput,
  FooterMain,
  About,
  Products,
  Company,
  Legal,
};
