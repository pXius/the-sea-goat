import React, { useRef } from "react";
import userButtons from "./user-buttons.json";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import SocialButton from "./components/SocialButton";
import Logo from "./components/Logo";
import styled from "styled-components";

const LOGO_PATH = "/TheSeaGoatLogo.png";

interface UserButton {
  color: string;
  icon: string;
  content: string;
  link: string;
}

function App() {
  const blobRef = useRef<HTMLDivElement>(null);

  const onPointerMoveHandler = (e: any) => {
    const { clientX, clientY } = e;

    blobRef.current?.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
  }

  const StyledBlob = styled.div`
    background-color: white;
    height: 13vmax;
    aspect-ratio: 1;
    position: absolute;
    left: 50%;
    top: 25%;
    translate: -50% -50%;
    border-radius: 50%;
    background: linear-gradient(to right, rgb(33,150,243), dodgerblue);
    animation: rotate 20s infinite;
    opacity: 0.5;
    z-index: -15;    

    @keyframes rotate {
      from {
        rotate: 0deg;
      }
      
      50% {
        scale: 1 1.5;
      }
      
      to {
        rotate: 360deg;
      }
    }
  `

  const StyledBlur = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    backdrop-filter: blur(5vmax);
  `

  return (
    <div onMouseMove={onPointerMoveHandler} style={{ height: '100vh' }}>
      <Logo size="large" centered src={LOGO_PATH} fluid />
      <StyledBlob ref={blobRef} />
      <StyledBlur />

      <div style={{ zIndex: '100', marginTop: '3rem' }}>
        <Container >
          <Grid centered>
            {userButtons.map((btn: UserButton, index) => {
              return (
                <div key={index}>
                  <GridColumn >
                    <a href={btn.link} target={'_blank'} rel='noreferrer'>
                      <SocialButton
                        key={index}
                        color={btn.color}
                        icon={btn.icon}
                        content={btn.content}
                        link={btn.link}
                      />
                    </a>
                  </GridColumn>
                </div>
              )
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default App;
