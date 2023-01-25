import React from "react";
import Img from "../assets/test.png";
import {
  TestimonialsContainer,
  TestimonialsImg,
  TestimonialsText,
  TestimonialsDetail,
  Button,
  BtnGroup,
  ButtonPrice,
} from "./StyledTestimonials";

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsImg src={Img} />
      <TestimonialsText>
        <h1>What we have done and what our Customers says</h1>
        <p>
          In enim et convallis urna faucibus massa. Tincidunt elit cursus
          consectetur turpis tempor lorem consectetur tortor nunc.
        </p>
        <BtnGroup>
          <Button>See More</Button>
          <ButtonPrice>View Price</ButtonPrice>
        </BtnGroup>
        <TestimonialsDetail>
          <h2>
            550+ <br /> <span>Mansions Sold</span>
          </h2>
          <h2>
            100% <br /> <span>Satisfied Clients</span>
          </h2>
          <h2>
            4+Years <br /> <span>Experience</span>
          </h2>
        </TestimonialsDetail>
      </TestimonialsText>
    </TestimonialsContainer>
  );
};

export default Testimonials;
