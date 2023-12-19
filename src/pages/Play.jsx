import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, {
  ButtonChildren,
  ButtonChildrenContainer,
} from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import {
  faDownLong,
  faLeftLong,
  faRightFromBracket,
  faRightLong,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import CowFace from "../img/emoji/cow-face.webp";
import { useEffect, useRef, useState } from "react";

const mazeArray = Array(25).fill(null);

export default function Play() {
  const [mazeFoot, setMazeFoot] = useState(0);

  // const mazeFocus = useRef(null);
  // const globalFocus = useRef(null);

  // useEffect(() => {
  //   globalFocus.current.focus();
  // }, []);

  // useEffect(() => {
  //   mazeFocus.current.focus();
  // }, []);

  return (
    <Container>
      <Header>Maze</Header>

      <div
        // ref={mazeFocus.current.focus()}
        tabIndex={1}
        onKeyDown={(e) => {
          if (e.key === "d") setMazeFoot((maze) => maze + 1);
        }}
        className={
          "flex flex-col place-content-center place-items-center w-full"
        }
      >
        <div
          className={"w-[300px] h-[300px] outline outline-[3px] flex flex-wrap"}
        >
          {mazeArray.map((maze, id) => (
            <div
              key={id}
              className={`text-transparent w-[60px] h-[60px] ${
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
                  <img src={CowFace} alt="Cow" className={"w-full h-full"} />
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
      </div>

      <Button value="level">
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
