import Button, { ButtonName } from "../components/Button";
import Container, { MarginDiv } from "../components/Container";

import Header from "../components/Header";

const buttonLabel = ["start", "guide", "about", "back"];

export default function Start() {
  return (
    <Container value="center">
      <Header>Amaze</Header>

      <MarginDiv />

      {buttonLabel.map(
        (labels, id) =>
          labels !== "back" && (
            <Button key={id} value={labels}>
              <ButtonName>{labels}</ButtonName>
            </Button>
          )
      )}
    </Container>
  );
}
