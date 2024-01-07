import Button, { ButtonName } from "../components/Button";
import Container, { HeaderDiv } from "../components/Container";
import Header from "../components/Header";
import Cedrick from "../assets/img/teams/cedrick.png";
import Aubrey from "../assets/img/teams/aubrey.jpg";
import Mary from "../assets/img/teams/mary.jpg";
import Others from "../assets/img/icon/favicon.png";

const bio = [
  {
    data: "I AM CEDRICK CORTEZ, PROGRAMMER/DEVELOPER. AS AN ASPIRING WEB DEVELOPER, CODING THIS MAZE FROM SCRATCH HELPS ME GAIN EXPERIENCE IN REACT.JS. IT HELPS ME IMPROVED MY TEAMWORK, DESIGN, LOGIC, CRITICAL THINKING.",
  },

  {
    data: "I am Aubrey Mae Villareal. I learned that the maze game relates to our lives; it represents a beautiful metaphor for the many twists and turns of our lives and is a symbol of hope and opportunity.",
  },

  {
    data: "I am Rizzalyn L. Mance, maze game has been a significant part of my existence, serving as an essential element in problem-solving scenarios. Its intricate paths and challenges often parallel the complexities of human interactions, teaching me the importance of strategy and persistence.",
  },
  {
    data: "I am Mary Kierine Go I learned that this maze teaches us not only to find the exit but to be mindful and smart about how we are creating our paths throughout the journey.",
  },

  {
    data: "I am Marko Paulo Clamaña. Life can be likened to a maze game, with twists and turns representing challenges, and every decision leading to new paths. Navigating it requires patience, adaptability, and the willingness to explore unknown corridors.",
  },
];

export default function About() {
  return (
    <Container value="none">
      <HeaderDiv>
        <Header>About Amaze</Header>
      </HeaderDiv>

      <div
        className={
          "w-full bg-transparent p-[10%_5%] font-concert font-medium tracking-[1px] uppercase text-justify 4xs:text-[16px] 3xs:text-[16px] 2xs:text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]"
        }
      >
        <p className={"w-full text-[#f1eaff] drop-shadow-textShadow"}>
          Amaze is a simple web-responsive game which was programmed or
          developed using Javascript Library {`"`}React{`"`}. Amaze is a project
          game dedicated to subject Application Development & Emerging
          Technologies. {'"'}AMAZE: Let Your Imagination Soar, Prepare to Be
          Amazed
          {'!"'}
        </p>
      </div>

      <HeaderDiv>
        <Header>Meet Us</Header>
      </HeaderDiv>

      <div className={"bg-pink-50 py-[5%] w-full"}>
        {bio.map((data, id) => (
          <div
            key={id}
            className={
              "flex bg-transparent w-full 4xs:flex-col 4xs:place-content-center 4xs:place-items-center 4xs:p-[10%_5%_5%_5%] 3xs:flex-col 3xs:place-content-center 3xs:place-items-center 3xs:p-[10%_5%_5%_5%] 2xs:flex-col 2xs:place-content-center 2xs:place-items-center 2xs:p-[8%_5%_5%_5%] xs:flex-col xs:place-content-center xs:place-items-center xs:p-[8%_5%_5%_5%] sm:flex-col sm:place-content-center sm:place-items-center sm:p-[7%_5%_5%_5%] md:flex-row md:p-[5%] lg:flex-row lg:p-[5%] xl:flex-row xl:p-[5%] 2xl:flex-row 2xl:p-[5%]"
            }
          >
            <div
              className={`${
                id % 2 === 1 && "md:order-2 lg:order-2 xl:order-2 2xl:order-2"
              } z-10`}
            >
              <div
                className={`w-[200px] h-[150px] bg-[#27005d]
              shadow-[0_0_0_10px_#7e30e1,0_50px_0_10px_#7e30e1,0_0_0_14px_#27005d,0_50px_0_14px_#27005d] mb-[80px]`}
              >
                <img
                  className="w-full h-full shadow-[0_0_0_4px_#27005d]"
                  src={
                    id === 0
                      ? Cedrick
                      : id === 1
                      ? Aubrey
                      : id === 3
                      ? Mary
                      : Others
                  }
                  alt={
                    id === 0
                      ? "Cedrick"
                      : id === 1
                      ? "Aubrey"
                      : id === 3
                      ? "Mary"
                      : "Others"
                  }
                />
                <p
                  className={
                    "text-center text-[25px] uppercase text-[#fed9ed] font-concert font-semibold mt-[8px] tracking-[3px] drop-shadow-[0_0_5px_#000000]"
                  }
                >
                  {id === 0 ? "Developer" : id === 4 ? "Analyst" : "Designer"}
                </p>
              </div>
            </div>

            <div
              className={`font-concert font-medium tracking-[1px] text-justify w-full uppercase 4xs:text-[14px] 3xs:text-[14px] 2xs:text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] ${
                id % 2 === 0
                  ? "md:pl-[5%] lg:pl-[5%] xl:pl-[5%] 2xl:pl-[5%]"
                  : id % 2 === 1 &&
                    "md:pr-[5%] lg:pr-[5%] xl:pr-[5%] 2xl:pr-[5%]"
              }`}
            >
              <p className={"w-full text-[#f1eaff] drop-shadow-textShadow"}>
                {data.data}
              </p>
            </div>
          </div>
        ))}
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
