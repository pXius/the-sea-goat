import userButtons from "./user-buttons.json";
import { Container } from "semantic-ui-react";
import SocialButton from "./components/SocialButton";
import Logo from "./components/Logo";

const LOGO_PATH = "/TheSeaGoatLogo.png";

interface UserButton {
  color: string;
  icon: string;
  content: string;
  link: string;
}

function App() {
  return (
    <>
      <Logo size="large" centered src={LOGO_PATH} fluid />
      <Container text>
        {userButtons.map((btn: UserButton, index) => {
          return (
            <SocialButton
              key={index}
              color={btn.color}
              icon={btn.icon}
              content={btn.content}
              link={btn.link}
            />
          );
        })}
      </Container>
    </>
  );
}

export default App;
