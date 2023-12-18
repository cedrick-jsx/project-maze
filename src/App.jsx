import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faBook,
  faDownLong,
  faLeftLong,
  faPeopleGroup,
  faPlay,
  faRightFromBracket,
  faRightLong,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import CowFace from "./img/emoji/cow-face.webp";

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

const mazeLevel = [1, 2, 3, 4, 5];
const mazeArray = Array(25).fill(null);

export default function App() {
  const [isShow, setIsShow] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [mazeFoot, setMazeFoot] = useState(0);

  const mazeFocus = useRef(null);
  const globalFocus = useRef(null);

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
          else if (props.value === "play") {
            setIsStart(!isStart);
            setIsPlay(!isPlay);
          } else if (props.value === "select") {
            setIsStart(!isStart);
            setIsPlay(!isPlay);
          }
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

  // useEffect(() => {
  //   globalFocus.current.focus();
  // }, []);

  // useEffect(() => {
  //   mazeFocus.current.focus();
  // }, [isStart]);

  return (
    <section
      // ref={globalFocus.current}
      className={`flex flex-col place-content-center place-items-center ${
        (!isShow || isStart) &&
        "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      }`}
    >
      {!isShow && !isStart && !isPlay && (
        <>
          <TitleHeader>Maze</TitleHeader>
          <TitleHeader>Moo</TitleHeader>

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
            {mazeLevel.map((lvl, id) => (
              <ButtonStart key={id} value="play">
                <ButtonContainer>
                  <FontAwesomeIcon icon={faPlay} />
                  <ButtonLabel>lvl {lvl}</ButtonLabel>
                </ButtonContainer>
              </ButtonStart>
            ))}
          </div>

          <ButtonStart value="start">
            <ButtonContainer>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <ButtonLabel>Back</ButtonLabel>
            </ButtonContainer>
          </ButtonStart>
        </>
      )}

      {isPlay && (
        <div
          // ref={mazeFocus.current}
          // tabIndex={-1}
          // onKeyDown={(e) => {
          //   if (e.key === "d") setMazeFoot((maze) => maze + 1);
          // }}
          className={
            "flex flex-col place-content-center place-items-center w-full"
          }
        >
          <TitleHeader>Maze</TitleHeader>

          <div
            className={
              "w-[300px] h-[300px] outline outline-[3px] flex flex-row flex-wrap"
            }
          >
            {mazeArray.map((maze, id) => (
              <div
                key={id}
                className={`text-transparent flex-[0_0_auto] w-[60px] h-[60px] ${
                  id == 0 ? "bg-[green]" : id === 24 && "bg-[red]"
                } bg-[#f1eaff] ${
                  (id === 10 ||
                    id === 11 ||
                    id === 13 ||
                    id == 17 ||
                    id === 21 ||
                    id == 24) &&
                  "border-t-[3px] border-[black]"
                } ${
                  (id === 1 ||
                    id === 8 ||
                    id === 10 ||
                    id === 12 ||
                    id === 16 ||
                    id === 17 ||
                    id === 22) &&
                  "border-r-[3px] border-[black]"
                } ${(id === 1 || id == 2) && "border-b-[3px] border-[black]"} ${
                  id === 19 && "border-l-[3px] border-[black]"
                }`}
              >
                <div className={`w-full h-full text-[black] relative`}>
                  {mazeFoot === id && (
                    <img
                      src={CowFace}
                      alt="Cow"
                      className={
                        "drop-shadow-[0_2px_1px_#392467] w-[60px] h-[60px]"
                      }
                    />
                  )}
                  {maze}
                  {/* {id} */}
                </div>
              </div>
            ))}
          </div>

          <div
            className={
              "mt-[10px] flex flex-col place-content-center place-items-center w-[200px]"
            }
          >
            <button
              className="button-move"
              value="move"
              onClick={() => {
                if (mazeFoot === 5) setMazeFoot(0);
                else if (mazeFoot === 8) setMazeFoot(3);
                else if (mazeFoot === 9) setMazeFoot(4);
                else if (mazeFoot === 12) setMazeFoot(7);
                else if (mazeFoot === 14) setMazeFoot(9);
                else if (mazeFoot === 15) setMazeFoot(10);
                else if (mazeFoot === 16) setMazeFoot(11);
                else if (mazeFoot === 18) setMazeFoot(13);
                else if (mazeFoot === 19) setMazeFoot(14);
                else if (mazeFoot === 20) setMazeFoot(15);
                else if (mazeFoot === 22) setMazeFoot(17);
                else if (mazeFoot === 23) setMazeFoot(18);
              }}
            >
              <FontAwesomeIcon icon={faUpLong} />
            </button>
            <div className={"w-full flex place-content-evenly mt-[5px]"}>
              <button
                className="button-move"
                value="move"
                onClick={() => {
                  if (mazeFoot === 1) setMazeFoot(0);
                  else if (mazeFoot === 3) setMazeFoot(2);
                  else if (mazeFoot === 4) setMazeFoot(3);
                  else if (mazeFoot === 6) setMazeFoot(5);
                  else if (mazeFoot === 7) setMazeFoot(6);
                  else if (mazeFoot === 8) setMazeFoot(7);
                  else if (mazeFoot === 12) setMazeFoot(11);
                  else if (mazeFoot === 14) setMazeFoot(13);
                  else if (mazeFoot === 16) setMazeFoot(15);
                  else if (mazeFoot === 21) setMazeFoot(20);
                  else if (mazeFoot === 22) setMazeFoot(21);
                  else if (mazeFoot === 24) setMazeFoot(23);
                }}
              >
                <FontAwesomeIcon icon={faLeftLong} />
              </button>
              <button
                className="button-move"
                value="move"
                onClick={() => {
                  if (mazeFoot === 0) setMazeFoot(5);
                  else if (mazeFoot === 3) setMazeFoot(8);
                  else if (mazeFoot === 4) setMazeFoot(9);
                  else if (mazeFoot === 7) setMazeFoot(12);
                  else if (mazeFoot === 9) setMazeFoot(14);
                  else if (mazeFoot === 10) setMazeFoot(15);
                  else if (mazeFoot === 11) setMazeFoot(16);
                  else if (mazeFoot === 13) setMazeFoot(18);
                  else if (mazeFoot === 14) setMazeFoot(19);
                  else if (mazeFoot === 15) setMazeFoot(20);
                  else if (mazeFoot === 17) setMazeFoot(22);
                  else if (mazeFoot === 18) setMazeFoot(23);
                }}
              >
                <FontAwesomeIcon icon={faDownLong} />
              </button>
              <button
                className="button-move"
                value="move"
                onClick={() => {
                  if (mazeFoot === 0) setMazeFoot(1);
                  else if (mazeFoot === 2) setMazeFoot(3);
                  else if (mazeFoot === 3) setMazeFoot(4);
                  else if (mazeFoot === 5) setMazeFoot(6);
                  else if (mazeFoot === 6) setMazeFoot(7);
                  else if (mazeFoot === 7) setMazeFoot(8);
                  else if (mazeFoot === 11) setMazeFoot(12);
                  else if (mazeFoot === 13) setMazeFoot(14);
                  else if (mazeFoot === 15) setMazeFoot(16);
                  else if (mazeFoot === 20) setMazeFoot(21);
                  else if (mazeFoot === 21) setMazeFoot(22);
                  else if (mazeFoot === 23) setMazeFoot(24);
                }}
              >
                <FontAwesomeIcon icon={faRightLong} />
              </button>
            </div>
          </div>

          <ButtonStart value="select">
            <ButtonContainer>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <ButtonLabel>Back</ButtonLabel>
            </ButtonContainer>
          </ButtonStart>
        </div>
      )}
    </section>
  );
}
