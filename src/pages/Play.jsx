import Button, { ButtonMove, ButtonName } from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import Hero from "../img/gif/gif.gif";
import { useEffect, useRef, useState } from "react";

const moveMaze = ["left", "down", "right"];
const mazeArray = Array(64).fill(null);

export default function Play() {
  const [mazeFoot, setMazeFoot] = useState(3);

  const mazeFocus = useRef(null);
  // const globalFocus = useRef(null);

  // useEffect(() => {
  //   globalFocus.current.focus();
  // }, []);

  useEffect(() => {
    mazeFocus.current.focus();
  }, []);

  return (
    <Container>
      <Header>Maze</Header>

      <div
        ref={mazeFocus}
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.key === "d") setMazeFoot((maze) => maze + 1);
        }}
        className={
          "flex flex-col place-content-center place-items-center w-full"
        }
      >
        <div className={"w-[320px] h-[320px] flex flex-wrap"}>
          {mazeArray.map((maze, id) => (
            <div
              tabIndex={-1}
              key={id}
              className={`text-transparent w-[40px] h-[40px] bg-[#f1eaff] ${
                (id === 0 ||
                  id === 1 ||
                  id === 2 ||
                  id === 4 ||
                  id === 5 ||
                  id === 6 ||
                  id === 7 ||
                  id === 13 ||
                  id === 22) &&
                "border-t-[5px] border-[black]"
              } ${
                (id === 0 ||
                  id === 3 ||
                  id === 5 ||
                  id === 7 ||
                  id === 9 ||
                  id === 12 ||
                  id === 14 ||
                  id === 15 ||
                  id === 17 ||
                  id === 21 ||
                  id === 23 ||
                  id === 25 ||
                  id === 29 ||
                  id === 31 ||
                  id === 37 ||
                  id === 39 ||
                  id === 42 ||
                  id === 47 ||
                  id === 50 ||
                  id === 55 ||
                  id === 58 ||
                  id === 63) &&
                "border-r-[5px] border-[black]"
              } ${
                (id === 3 ||
                  id === 8 ||
                  id === 10 ||
                  id === 11 ||
                  id === 12 ||
                  id === 19 ||
                  id === 20 ||
                  id === 21 ||
                  id === 23 ||
                  id === 25 ||
                  id === 27 ||
                  id === 28 ||
                  id === 30 ||
                  id === 34 ||
                  id === 35 ||
                  id === 37 ||
                  id === 39 ||
                  id === 41 ||
                  id === 43 ||
                  id === 44 ||
                  id === 46 ||
                  id === 50 ||
                  id === 52 ||
                  id === 53 ||
                  id === 55 ||
                  id === 56 ||
                  id === 57 ||
                  id === 58 ||
                  id === 59 ||
                  id === 61 ||
                  id === 62 ||
                  id === 63) &&
                "border-b-[5px] border-[black]"
              } ${
                (id === 0 ||
                  id === 8 ||
                  id === 16 ||
                  id === 24 ||
                  id === 25 ||
                  id === 27 ||
                  id === 32 ||
                  id === 33 ||
                  id === 40 ||
                  id === 45 ||
                  id === 48 ||
                  id === 49 ||
                  id === 54 ||
                  id === 56 ||
                  id === 57 ||
                  id === 61) &&
                "border-l-[5px] border-[black]"
              }`}
            >
              <div className={`w-full h-full text-[black]`}>
                {mazeFoot === id && (
                  <img
                    src={Hero}
                    alt="Hero"
                    className={"w-[40px] h-[40px] absolute z-10"}
                  />
                )}
                {maze}
                {/* {id} */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        tabIndex={-1}
        className={
          "mt-[10px] flex flex-col place-content-center place-items-center w-[200px]"
        }
      >
        <ButtonMove value="up" mazeFoot={mazeFoot} setMazeFoot={setMazeFoot} />
        <div
          tabIndex={-1}
          className={"w-full flex place-content-evenly mt-[10px]"}
        >
          {moveMaze.map((move, id) => (
            <ButtonMove
              key={id}
              tabIndex={-1}
              value={move}
              mazeFoot={mazeFoot}
              setMazeFoot={setMazeFoot}
            />
          ))}
        </div>
      </div>

      <Button tabIndex={-1} value="level">
        <ButtonName>Back</ButtonName>
      </Button>
    </Container>
  );
}
