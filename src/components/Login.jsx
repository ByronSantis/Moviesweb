import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";


const Login = (props) => {
  return (
    <Container>
      <Content>
      <Link to="/start">
        <CTA>
            <CTALogoOne>MOVIES</CTALogoOne>
            <SignUp>
              ¡Empieza ahora!
              </SignUp>
            <Description>
             Registrate ahora y obten peliculas y series gratis para ver con tu amigos o familiares.
             No te pierdas lo que trae de bueno MovieWeb para ti.
          </Description>
        </CTA>
        </Link>
      <BgImage/>
      </Content>
    </Container>
  )
}


const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/imgs/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.h1`
color: hsla(0, 0%, 95.3%, 1);
  font-size: 45px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  border-color: black;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;


export default Login;

