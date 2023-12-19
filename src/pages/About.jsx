import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, {
  ButtonChildren,
  ButtonChildrenContainer,
} from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Cedrick from "../img/teams/cedrick.png";

const bio = [
  {
    data: " I AM CEDRICK CORTEZ, PROGRAMMER/DEVELOPER. AS AN ASPIRING WEB DEVELOPER, CODING THIS MAZE FROM THE SCRATCH HELPS ME GAIN EXPERIENCE IN REACT.JS. THIS HELPS ME ALOT IN TERMS OF TEAMWORK, DESIGN, LOGIC, CRITICAL THINKING, ETC.",
  },

  {
    data: "I am Aubrey Mae Villareal. I learned that the maze game relates to our lives; it represents a beautiful metaphor for the many twists and turns of our lives and is a symbol of hope and opportunity.",
  },

  {
    data: "I am Rizzalyn L. Mance, maze game has been a significant part of my existence, serving as an essential element in problem-solving scenarios. Its intricate paths and challenges often parallel the complexities of human interactions, teaching me the importance of strategy and persistence.",
  },
  {
    data: "I am Mary Kierine Go I learned that this maze teaches us not only to find the exit but to be mindful and smart about how we arecreating our paths throughout the journey.",
  },

  {
    data: "    I am Marko Paulo Clamaña. Life can be likened to a maze game, with twists and turns representing challenges, and every decision leading to new paths. Navigating it requires patience,adaptability, and the willingness to explore unknown corridors.",
  },
];

export default function About() {
  return (
    <Container value="none">
      <Header>About Us</Header>

      {bio.map((data, id) => (
        <div
          key={id}
          className={
            "flex place-content-evenly place-items-center my-[10px] bg-slate-50"
          }
        >
          <div
            className={`w-[200px] h-[150px] bg-slate-50 ${
              id % 2 === 1 && "order-2"
            }`}
          >
            <img
              className="w-full h-full"
              src={id === 0 && Cedrick}
              alt={id === 0 && "Cedrick"}
            />
          </div>
          <div
            className={
              "font-titan text-[15px] tracking-[1px] text-justify text-[#27005d] w-full uppercase p-[10px]"
            }
          >
            {data.data}
          </div>
        </div>
      ))}

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
