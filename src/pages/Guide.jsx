import Button, { ButtonMove, ButtonName } from "../components/Button";
import Container, {
  GuideChildrenContainer,
  GuideContainer,
  GuideContent,
  GuideContentChildren,
  GuideKey,
  GuideMainContainer,
  GuideParentContainer,
  HeaderDiv,
} from "../components/Container";
import Header from "../components/Header";

const keyBoard = [
  {
    press: `Pressing ${`"W"`} moves your character upward.`,
  },
  {
    press: `Pressing ${`"A"`} moves your character left.`,
  },
  {
    press: `Pressing ${`"S"`} moves your character downward.`,
  },
  {
    press: `Pressing ${`"D"`} moves your character right.`,
  },
];

const keyArrow = [
  {
    press: `Pressing ${`"🡹"`} moves your character upward.`,
  },
  {
    press: `Pressing ${`"🡸"`} moves your character left.`,
  },
  {
    press: `Pressing ${`"🡻"`} moves your character downward.`,
  },
  {
    press: `Pressing ${`"🡺"`} moves your character right.`,
  },
];

export default function Guide() {
  return (
    <Container value="none">
      <HeaderDiv>
        <Header>Guide</Header>
      </HeaderDiv>

      <div className={"w-full py-[10%] text-center"}>
        <GuideKey>Desktop/Laptop</GuideKey>
      </div>

      <div
        className={
          "w-full bg-pink-50 py-[6%] flex place-content-center place-items-center"
        }
      >
        <GuideParentContainer>
          <GuideMainContainer>
            <GuideChildrenContainer>
              <ButtonMove value="w" guide={true} currentLevel="" mazeFoot="" />

              <div
                className={
                  "flex place-content-evenly place-items-center w-full mt-4 lg:mt-7 xl:mt-7 2xl:mt-7"
                }
              >
                <ButtonMove
                  value="a"
                  guide={true}
                  currentLevel=""
                  mazeFoot=""
                />
                <ButtonMove
                  value="s"
                  guide={true}
                  currentLevel=""
                  mazeFoot=""
                />
                <ButtonMove
                  value="d"
                  guide={true}
                  currentLevel=""
                  mazeFoot=""
                />
              </div>
            </GuideChildrenContainer>

            <GuideKey>Keys</GuideKey>
          </GuideMainContainer>

          <GuideContentChildren>
            {keyBoard.map((data, id) => (
              <GuideContainer key={id}>
                <GuideContent>{data.press}</GuideContent>
              </GuideContainer>
            ))}
          </GuideContentChildren>
        </GuideParentContainer>
      </div>

      <div className={"w-full py-[10%] text-center"}>
        <GuideKey>Tablet/Mobile</GuideKey>
      </div>

      <div
        className={
          "w-full bg-pink-50 py-[6%] flex place-content-center place-items-center lg:pl-[10%] xl:pl-[10%] 2xl:pl-[10%]"
        }
      >
        <GuideParentContainer>
          <GuideMainContainer value="arrowKeys">
            <GuideChildrenContainer>
              <ButtonMove value="up" guide={true} currentLevel="" mazeFoot="" />

              <div
                className={
                  "flex place-content-evenly place-items-center w-full mt-4 lg:mt-7 xl:mt-7 2xl:mt-7"
                }
              >
                <ButtonMove
                  value="left"
                  guide={true}
                  currentLevel=""
                  mazeFoot=""
                />
                <ButtonMove
                  value="down"
                  guide={true}
                  currentLevel=""
                  mazeFoot=""
                />
                <ButtonMove
                  value="right"
                  guide={true}
                  currentLevel=""
                  mazeFoot=""
                />
              </div>
            </GuideChildrenContainer>
            <GuideKey>Keys</GuideKey>
          </GuideMainContainer>

          <GuideContentChildren>
            {keyArrow.map((data, id) => (
              <GuideContainer key={id}>
                <GuideContent>{data.press}</GuideContent>
              </GuideContainer>
            ))}
          </GuideContentChildren>
        </GuideParentContainer>
      </div>

      <div
        className={
          "flex place-content-center place-items-center w-full my-[50px]"
        }
      >
        <Button value="back">
          <ButtonName>Back</ButtonName>
        </Button>
      </div>
    </Container>
  );
}
