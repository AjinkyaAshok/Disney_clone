/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne>
          <img src="/images/cta-logo-one.svg"></img>
        </CTALogoOne>
        <CTAButton>GET ALL THERE</CTAButton>
        <CTAText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </CTAText>
        <CTALogoTwo>
          <img src="/images/cta-logo-two.png"></img>
        </CTALogoTwo>
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("/images/login-background.jpg");
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.div``;

const CTAButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: #0063e5;
  border-radius: 4px;
  color: #f9f9f9;
  text-align: center;
  cursor: pointer;
  border: none;
  letter-spacing: 1.48px;
  margin: 10px;
  &:hover {
    background-color: #0483ee;
  }
`;

const CTAText = styled.div`
  text-align: center;
`;
const CTALogoTwo = styled.div`
  img {
    margin: 20px;
    width:100%;
    padding:0 30px;
  }
`;
