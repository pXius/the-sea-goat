import { Button } from "semantic-ui-react";
import styled from "styled-components";

interface SocialButtonProps {
  content: string;
  color: string;
  icon: string;
  link?: string;
}

const SocialButton = ({ color, icon, content, link }: SocialButtonProps) => {
  const StyledButton = styled(Button)`
    &&& {
      transition-duration: 0.25s;
      margin-top: 32px;
      color: white;
      background: ${color};
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.75) 0px 14px 28px,
        rgba(0, 0, 0, 0.7) 0px 10px 10px;

      &:hover {
        color: ${color};
        background: white;
      }
    }
  `;

  return (
    <StyledButton
      size="massive"
      fluid
      icon={icon}
      content={content}
      href={link}
      target="_blank"
    />
  );
};

export default SocialButton;
