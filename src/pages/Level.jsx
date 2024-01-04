import Button, { ButtonName } from "../components/Button";
import Container, { MarginDiv } from "../components/Container";
import Header from "../components/Header";

const levelSelect = [1, 2, 3, 4, "back"];

export default function Level() {
  return (
    <Container value="center">
      <Header>Select</Header>

      <MarginDiv />

      {levelSelect.map((levels, id) => (
        <Button
          key={id}
          level={id}
          value={
            levels === "back"
              ? levels
              : levels !== `back` &&
                id > parseInt(localStorage.mazeCurrentLevel)
              ? "lock"
              : "play"
          }
          mazeLevel={levels !== "back" && levels}
        >
          <ButtonName>
            {levels !== `back` && id <= parseInt(localStorage.mazeCurrentLevel)
              ? `Lvl ` + levels
              : levels !== `back` &&
                id > parseInt(localStorage.mazeCurrentLevel)
              ? "???"
              : levels === "back" && levels}
          </ButtonName>
        </Button>
      ))}
    </Container>
  );
}
