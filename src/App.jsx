/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faBook,
  faPeopleGroup,
  faPlay,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const bio = [
  {
    data: " I AM CEDRICK CORTEZ, PROGRAMMER/DEVELOPER. AS AN ASPIRING SOFTWARE DEVELOPER, CODING THIS MAZE FROM THE SCRATCH HELPS ME GAIN EXPERIENCE IN REACT.JS. THIS HELPS ME ALOT IN TERMS OF TEAMWORK, DESIGN, LOGIC, CRITICAL THINKING, ETC",
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

export default function App() {
  const [isShow, setIsShow] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const TitleHeader = (props) => {
    return <h1 className="header-h1">{props.children}</h1>;
  };

  const ButtonStart = (props) => {
    return (
      <button
        className="button-start"
        onClick={() => {
          if (props.value === "show") setIsShow(!isShow);
          else if (props.value === "start") setIsStart(!isStart);
        }}
      >
        {props.children}
      </button>
    );
  };

  const ButtonContainer = (props) => {
    return <div className="button-children">{props.children}</div>;
  };

  const ButtonLabel = (props) => {
    return <p className="p-start">{props.children}</p>;
  };

  return (
    <section
      className={`flex flex-col place-content-center place-items-center ${
        (!isShow || isStart) &&
        "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      }`}
    >
      {!isShow && !isStart && (
        <>
          <TitleHeader>Amaze</TitleHeader>

          <ButtonStart value="start">
            <ButtonContainer>
              <FontAwesomeIcon icon={faPlay} />
              <ButtonLabel>Start</ButtonLabel>
            </ButtonContainer>
          </ButtonStart>

          <ButtonStart>
            <ButtonContainer>
              <FontAwesomeIcon icon={faBook} />
              <ButtonLabel>Guide</ButtonLabel>
            </ButtonContainer>
          </ButtonStart>

          <ButtonStart value="show">
            <ButtonContainer>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <ButtonLabel>About</ButtonLabel>
            </ButtonContainer>
          </ButtonStart>
        </>
      )}

      {isShow && (
        <>
          <TitleHeader>About Us</TitleHeader>

          {bio.map((data, id) => (
            <div
              key={id}
              className={
                "flex place-content-evenly place-items-center outline outline-4 outline-fuchsia-800 my-[10px] bg-slate-50"
              }
            >
              <div
                className={`z-[40] w-[160px] h-[160px] bg-slate-50 shadow-2xl drop-shadow-2xl ${
                  id % 2 === 1 && "order-2"
                } before:absolute before:bg-slate-950 ${
                  id % 2 === 1
                    ? "before:top-0 before:right-0"
                    : "before:top-0 before:left-0"
                } before:w-[50%] before:h-[50%] before:z-[-10]`}
              ></div>
              <div className="bio-text">{data.data}</div>
            </div>
          ))}

          <ButtonStart value="show">
            <ButtonContainer>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <ButtonLabel>Back</ButtonLabel>
            </ButtonContainer>
          </ButtonStart>
        </>
      )}

      {isStart && (
        <>
          <TitleHeader>Selection</TitleHeader>

          <div className={"grid grid-cols-[2fr_1fr]"}>
            <ButtonStart>
              <ButtonContainer>
                <FontAwesomeIcon icon={faPlay} />
                <ButtonLabel>lvl 1</ButtonLabel>
              </ButtonContainer>
            </ButtonStart>

            <ButtonStart>
              <ButtonContainer>
                <FontAwesomeIcon icon={faPlay} />
                <ButtonLabel>lvl 2</ButtonLabel>
              </ButtonContainer>
            </ButtonStart>

            <ButtonStart>
              <ButtonContainer>
                <FontAwesomeIcon icon={faPlay} />
                <ButtonLabel>lvl 3</ButtonLabel>
              </ButtonContainer>
            </ButtonStart>

            <ButtonStart>
              <ButtonContainer>
                <FontAwesomeIcon icon={faPlay} />
                <ButtonLabel>lvl 4</ButtonLabel>
              </ButtonContainer>
            </ButtonStart>

            <ButtonStart>
              <ButtonContainer>
                <FontAwesomeIcon icon={faPlay} />
                <ButtonLabel>lvl 5</ButtonLabel>
              </ButtonContainer>
            </ButtonStart>

            <ButtonStart>
              <ButtonContainer>
                <FontAwesomeIcon icon={faPlay} />
                <ButtonLabel>lvl 6</ButtonLabel>
              </ButtonContainer>
            </ButtonStart>
          </div>

          <ButtonStart value="start">
            <ButtonContainer>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <ButtonLabel>Back</ButtonLabel>
            </ButtonContainer>
          </ButtonStart>
        </>
      )}
    </section>
  );
}
