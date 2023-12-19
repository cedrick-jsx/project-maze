import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, {
  ButtonChildren,
  ButtonChildrenContainer,
} from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import { faCube, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const levelSelect = [1, 2, 3, 4, 5, "back"];

export default function Level() {
  return (
    <Container value="none">
      <Header>Select</Header>
      <Header>Level</Header>

      {levelSelect.map((levels, id) => (
        <Button key={id} value={levels === "back" ? levels : "play"}>
          <ButtonChildrenContainer>
            <FontAwesomeIcon
              className={"text-[1.5rem] animate-faFade"}
              icon={levels !== "back" ? faCube : faRightFromBracket}
            />
            <ButtonChildren>
              {levels !== `back` ? `Lvl ` + levels : levels}
            </ButtonChildren>
          </ButtonChildrenContainer>
        </Button>
      ))}
    </Container>
  );
}
