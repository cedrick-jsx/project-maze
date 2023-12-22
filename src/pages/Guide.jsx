import Button, { ButtonName } from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";

export default function Guide() {
  return (
    <Container value="center">
      <Header>Guide</Header>

      <Button value="back">
        <ButtonName>Back</ButtonName>
      </Button>
    </Container>
  );
}
