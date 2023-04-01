import { Container } from "semantic-ui-react";
import SocialButton from "./components/SocialButton";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <div className="head">
        <Container text>
          <Logo size="large" centered src="/TheSeaGoatLogo.png" fluid />
        </Container>
      </div>
      <div className="body">
        <Container text>
          <SocialButton
            color="#4b00bb"
            icon="twitch"
            content="Twitch"
            link="https://www.twitch.tv/the_sea_goat"
          />
          <SocialButton
            color="#FF0000"
            icon="youtube"
            content="YouTube"
            link="https://www.youtube.com/@TheSeaGoat"
          />
          <SocialButton
            color="#7289da"
            icon="discord"
            content="Discord"
            link="https://discord.gg/SJFU2jyC5R"
          />
          <SocialButton
            color="#E1306C"
            icon="instagram"
            content="Instagram"
            link="https://www.instagram.com/theseagoatmain/"
          />
          <SocialButton
            color="#3b5998"
            icon="facebook"
            content="FaceBook"
            link="https://www.facebook.com/profile.php?id=100086401726425"
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
