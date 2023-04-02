import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

interface SocialButtonProps {
  content: string;
  color: string;
  icon: string;
  link?: string;
}

const SocialButton = ({ color, icon, content, link }: SocialButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  const hexToRgbA = ({ hex, opacity }: { hex: string, opacity: string }) => {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(' ') + ` / ${opacity})`;
    }
    throw new Error('Bad Hex');
  }

  const StyledSocialContainer = styled.div`
    &&&{
      margin-bottom: 2rem;
      width: 275px;
      display: flex;
      border: 3px solid rgb(33 150 243 / 80%);
      aspect-ratio: 5 / 3;
      border-radius: 1rem;      
      // background: ${color};
      overflow: hidden;
      position: relative;
      z-index: 10;
    }

    :after,:before{
      content: "";
      height: 5px;
      position: absolute;
      z-index: 4;
      left: 50%;
      translate: -50% 0%;
      background-color: white;
    }

    :before{
      width: 15%;
      top: 0rem;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    :after{
      width: 25%;
      bottom: 0rem;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    &&:hover {
      color: ${color};
      // background: white;
      cursor: pointer;
    }
  `

  const StyledSocialContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    gap: 4rem;
    position: relative;
    z-index: 0;
    margin: 1rem;
    padding-bottom: 4rem;
    border: 1px solid rgb(33 150 243 / 50%);
    border-radius: 0.6rem;display: flex;
    flex-direction: collumn;    
  `

  const StyledSocialOverlay = styled.div`    
    background: ${!isHover ? `linear-gradient(      
      ${hexToRgbA({ hex: color, opacity: '0.30' })},
      ${hexToRgbA({ hex: color, opacity: '0.30' })} 3px,
      transparent 3px,
      transparent 9px
    );` : hexToRgbA({ hex: color, opacity: '0.30' })}}    
    background-size: 100% 9px;
    height: 100%;
    width: 100%;
    animation: ${!isHover && 'pan-overlay 12s infinite linear'};
    position: absolute;    
    left: 0px;
    top: 0px;
    
    @keyframes pan-overlay {
      from {
        background-position: 0% 0%;
      }
      
      to {
        background-position: 0% -100%;
      }
    }        
  `

  const StyledSocialIcon = styled(Icon)`
    color: white;
    text-shadow: 0px 0px 0.1rem white;   
    z-index:20;     
  `

  const onMouseEnterHandler = () => {
    setIsHover(true);
  }
  const onMouseLeaveHandler = () => {
    setIsHover(false);
  }

  return (
    <StyledSocialContainer onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <StyledSocialContent>
        <StyledSocialOverlay color={color} />
        <StyledSocialIcon size='large' name={icon} />
      </StyledSocialContent>
    </StyledSocialContainer >
  );
};

export default SocialButton;
