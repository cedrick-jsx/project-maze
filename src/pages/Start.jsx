import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, {
  ButtonChildren,
  ButtonChildrenContainer,
} from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import {
  faBook,
  faPeopleGroup,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const buttonLabel = ["start", "guide", "about", "back"];

export default function Start() {
  return (
    <Container value="center">
      <Header>Maze-Moo</Header>

      {buttonLabel.map(
        (labels, id) =>
          labels !== "back" && (
            <Button key={id} value={labels}>
              <ButtonChildrenContainer>
                <FontAwesomeIcon
                  className={"text-[1.5rem] animate-faFade"}
                  icon={
                    labels === "start"
                      ? faPlay
                      : labels === "guide"
                      ? faBook
                      : labels === "about" && faPeopleGroup
                  }
                />
                <ButtonChildren>{labels}</ButtonChildren>
              </ButtonChildrenContainer>
            </Button>
          )
      )}
    </Container>
  );
}
