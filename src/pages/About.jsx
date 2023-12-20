import Button, { ButtonName } from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";

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
      <Header>About Amaze</Header>
      <div
        className={
          "bg-slate-50 w-full p-[3%_5%] mb-[20px] font-titan tracking-[3px] uppercase text-justify text-[17px]"
        }
      >
        Amaze is a simple web-responsive game which was programmed using React
        Framework. Amaze is a project game dedicated to subject Application
        Development & Emerging Technologies. {'"'}AMAZE: Let Your Imagination
        Soar, Prepare to Be Amazed
        {'!"'}
      </div>
      <Header>Meet The Team</Header>
      {bio.map((data, id) => (
        <div
          key={id}
          className={
            "flex place-content-evenly place-items-center bg-slate-50 min-w-full w-full max-w-full p-[3%_5%]"
          }
        >
          <div className={`relative  ${id % 2 === 1 && "order-2"} `}>
            <div
              className={`w-[200px] h-[150px] bg-[black]
              shadow-[0_0_0_5px_navy,0_50px_0_5px_navy] z-[10]`}
            ></div>
            <div
              className={`w-[200px] h-[150px] bg-[black] ${
                id % 2 === 1 && "order-2"
              } shadow-[0_0_0_5px_navy,0_50px_0_5px_navy] absolute top-[0] left-[0] w-full h-full rotate-[-10deg]`}
            ></div>
            <div
              className={`w-[200px] h-[150px] bg-[black]
              shadow-[0_0_0_5px_navy,0_50px_0_5px_navy] z-[10] absolute top-0 left-0`}
            >
              <img
                className="w-full h-full"
                src={id === 0 && Cedrick}
                alt={id === 0 && "Cedrick"}
              />
              <p className={"text-center uppercase text-[azure] font-[600]"}>
                {id === 0 ? "Developer" : "Lorem"}
              </p>
            </div>
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
        <ButtonName>Back</ButtonName>
      </Button>
    </Container>
  );
}
