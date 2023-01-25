import React from "react";
import {
  FooterContainer,
  NewsletterContainer,
  NewsletterText,
  NewsletterInput,
  FooterMain,
  About,
  Products,
  Company,
  Legal,
} from "./StyledFooter";

const Footer = () => {
  return (
    <FooterContainer>
      <NewsletterContainer>
        <NewsletterText>
          <h2>Join our Newsletter</h2>
          <p>We’ll send you a nice letter once per week. No Spam</p>
        </NewsletterText>
        <NewsletterInput placeholder="Email" />
      </NewsletterContainer>
      <FooterMain>
        <About>
          <h1>Hive.</h1>
          <p>
            Tortor integer feugiat ultrices ornare pellentesque fermentum lorem
            sed eu. Enim mi urna et neque magna eget.
          </p>
        </About>
        <Products>
          <h4>Products</h4>
          <li>Overview</li>
          <li>Features</li>
          <li>Solutions</li>
          <li>Pricing</li>
        </Products>
        <Company>
          <h4>Company</h4>
          <li>About Us</li>
          <li>Careers</li>
          <li>News</li>
          <li>Contact</li>
        </Company>
        <Legal>
          <h4>Legal</h4>
          <li>Terms</li>
          <li>Privacy</li>
          <li>License</li>
        </Legal>
      </FooterMain>
    </FooterContainer>
  );
};

export default Footer;
