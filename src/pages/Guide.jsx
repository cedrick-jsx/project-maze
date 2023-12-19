import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, {
  ButtonChildren,
  ButtonChildrenContainer,
} from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Guide() {
  return (
    <Container value="center">
      <Header>Guide</Header>

      <Button value="back">
        <ButtonChildrenContainer>
          <FontAwesomeIcon
            className={"text-[1.5rem] animate-faFade"}
            icon={faRightFromBracket}
          />
          <ButtonChildren>Back</ButtonChildren>
        </ButtonChildrenContainer>
      </Button>
    </Container>
  );
}
