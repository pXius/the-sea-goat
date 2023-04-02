import { Image } from "semantic-ui-react";
import styled from "styled-components";

const Logo = styled(Image)`
  &&& {
    padding-top: 20px;
    filter: drop-shadow(4px 16px 4px rgba(0, 0, 0, 0.7));
  }
`;

export default Logo;
