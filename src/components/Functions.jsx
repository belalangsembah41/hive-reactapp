import React from "react";
import ReoxfaImg from "../assets/reoxfa.png";
import SentaniImg from "../assets/sentani.png";
import {
  FunctionContainer,
  FunctionTitle,
  FunctionCardContainer,
  FunctionCard,
  FunctionImg,
  CardTitle,
  CardDetail,
  Button,
} from "./StyledFunction";

const Functions = () => {
  return (
    <FunctionContainer>
      <FunctionTitle>
        <h2>Comfortable Functions</h2>
        <h4>We offer you the best mansion to enjoy your life. </h4>
      </FunctionTitle>
      <FunctionCardContainer>
        <FunctionCard>
          <FunctionImg src={ReoxfaImg} />
          <CardTitle>
            <h2>Reoxfa House</h2>
            <h4>2610 Gallatin Pike, Nashville Tennessee</h4>
            <CardDetail>
              <p>3 Rooms</p>
              <p>2 Bathrooms</p>
              <p>1200 Sq.Ft</p>
            </CardDetail>
          </CardTitle>
          <Button>See Details</Button>
        </FunctionCard>
        <FunctionCard>
          <FunctionImg src={SentaniImg} />
          <CardTitle>
            <h2>Reoxfa House</h2>
            <h4>2610 Gallatin Pike, Nashville Tennessee</h4>
            <CardDetail>
              <p>3 Rooms</p>
              <p>2 Bathrooms</p>
              <p>1200 Sq.Ft</p>
            </CardDetail>
          </CardTitle>
          <Button>See Details</Button>
        </FunctionCard>
      </FunctionCardContainer>
    </FunctionContainer>
  );
};

export default Functions;
