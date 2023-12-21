import Button, { ButtonName } from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";

const levelSelect = [1, 2, 3, 4, "back"];

export default function Level() {
  return (
    <Container value="none">
      <Header>Select</Header>
      <Header>Level</Header>

      {levelSelect.map((levels, id) => (
        <Button
          key={id}
          value={levels === "back" ? levels : "play"}
          mazeLevel={levels !== "back" && levels}
        >
          <ButtonName>
            {levels !== `back` ? `Lvl ` + levels : levels}
          </ButtonName>
        </Button>
      ))}
    </Container>
  );
}
