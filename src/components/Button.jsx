import {
  faBook,
  faCube,
  faDownLong,
  faLeftLong,
  faPeopleGroup,
  faPlay,
  faRightFromBracket,
  faRightLong,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

export default function Button(props) {
  const navigate = useNavigate("");

  return (
    <button
      className={
        "w-[180px] my-[15px] rounded-[0.25rem] bg-[#f1eaff] shadow-[0_2px_0_0_#000000,0_10px_0_0_#d0a2f7] drop-shadow-custom grid grid-cols-[auto_65%] place-content-center place-items-center text-[#392467] hover:text-[#f1eaff] hover:bg-[#392467] hover:active:translate-y-[3px] hover:active:shadow-none"
      }
      onClick={() => {
        if (props.value === "start" || props.value === "level")
          navigate("/Level", { replace: true });
        else if (props.value === "guide") navigate("Guide", { replace: true });
        else if (props.value === "about") navigate("/About", { replace: true });
        else if (props.value === "play") navigate("/Play", { replace: true });
        else if (props.value === "back") navigate("/", { replace: true });
      }}
    >
      <FontAwesomeIcon
        className={"text-[1.5rem] animate-faFade"}
        icon={
          props.value === "start"
            ? faPlay
            : props.value === "guide"
            ? faBook
            : props.value === "about"
            ? faPeopleGroup
            : props.value === "back" || props.value === "level"
            ? faRightFromBracket
            : props.value === "play" && faCube
        }
      />
      {props.children}
    </button>
  );
}

const ButtonName = (props) => {
  return (
    <p className={"font-titan text-[1.5rem] tracking-[3px] uppercase"}>
      {props.children}
    </p>
  );
};

const ButtonMove = (props) => {
  return (
    <button
      className={
        "text-[2rem] w-[50px] rounded-[0.25rem] bg-[#f1eaff] text-[#392467] drop-shadow-custom hover:bg-[#392467] hover:text-[#f1eaff]"
      }
      onClick={() => {
        if (
          props.value === "up" &&
          (props.mazeFoot === 8 ||
            props.mazeFoot === 9 ||
            props.mazeFoot === 10 ||
            props.mazeFoot === 12 ||
            props.mazeFoot === 14 ||
            props.mazeFoot === 15 ||
            props.mazeFoot === 17 ||
            props.mazeFoot === 21 ||
            props.mazeFoot === 23 ||
            props.mazeFoot === 24 ||
            props.mazeFoot === 25 ||
            props.mazeFoot === 26 ||
            props.mazeFoot === 30 ||
            props.mazeFoot === 32 ||
            props.mazeFoot === 34 ||
            props.mazeFoot === 37 ||
            props.mazeFoot === 39 ||
            props.mazeFoot === 40 ||
            props.mazeFoot === 41 ||
            props.mazeFoot === 44 ||
            props.mazeFoot === 46 ||
            props.mazeFoot === 48 ||
            props.mazeFoot === 50 ||
            props.mazeFoot === 53 ||
            props.mazeFoot === 55 ||
            props.mazeFoot === 56 ||
            props.mazeFoot === 57 ||
            props.mazeFoot === 59 ||
            props.mazeFoot === 62)
        )
          props.setMazeFoot((move) => move - 8);
        else if (
          props.value === "right" &&
          (props.mazeFoot === 1 ||
            props.mazeFoot === 2 ||
            props.mazeFoot === 4 ||
            props.mazeFoot === 6 ||
            props.mazeFoot === 8 ||
            props.mazeFoot === 10 ||
            props.mazeFoot === 11 ||
            props.mazeFoot === 13 ||
            props.mazeFoot === 16 ||
            props.mazeFoot === 18 ||
            props.mazeFoot === 19 ||
            props.mazeFoot === 20 ||
            props.mazeFoot === 22 ||
            props.mazeFoot === 27 ||
            props.mazeFoot === 28 ||
            props.mazeFoot === 30 ||
            props.mazeFoot === 33 ||
            props.mazeFoot === 34 ||
            props.mazeFoot === 35 ||
            props.mazeFoot === 36 ||
            props.mazeFoot === 38 ||
            props.mazeFoot === 40 ||
            props.mazeFoot === 41 ||
            props.mazeFoot === 43 ||
            props.mazeFoot === 45 ||
            props.mazeFoot === 46 ||
            props.mazeFoot === 49 ||
            props.mazeFoot === 51 ||
            props.mazeFoot === 52 ||
            props.mazeFoot === 54 ||
            props.mazeFoot === 57 ||
            props.mazeFoot === 59 ||
            props.mazeFoot === 61 ||
            props.mazeFoot === 62)
        )
          props.setMazeFoot((move) => move + 1);
        else if (
          props.value === "down" &&
          (props.mazeFoot === 0 ||
            props.mazeFoot === 1 ||
            props.mazeFoot === 2 ||
            props.mazeFoot === 4 ||
            props.mazeFoot === 6 ||
            props.mazeFoot === 7 ||
            props.mazeFoot === 9 ||
            props.mazeFoot === 13 ||
            props.mazeFoot === 15 ||
            props.mazeFoot === 16 ||
            props.mazeFoot === 17 ||
            props.mazeFoot === 18 ||
            props.mazeFoot === 22 ||
            props.mazeFoot === 24 ||
            props.mazeFoot === 26 ||
            props.mazeFoot === 29 ||
            props.mazeFoot === 31 ||
            props.mazeFoot === 32 ||
            props.mazeFoot === 33 ||
            props.mazeFoot === 36 ||
            props.mazeFoot === 38 ||
            props.mazeFoot === 40 ||
            props.mazeFoot === 42 ||
            props.mazeFoot === 45 ||
            props.mazeFoot === 47 ||
            props.mazeFoot === 48 ||
            props.mazeFoot === 49 ||
            props.mazeFoot === 51 ||
            props.mazeFoot === 54)
        )
          props.setMazeFoot((move) => move + 8);
        else if (
          props.value === "left" &&
          (props.mazeFoot === 2 ||
            props.mazeFoot === 3 ||
            props.mazeFoot == 5 ||
            props.mazeFoot == 7 ||
            props.mazeFoot === 9 ||
            props.mazeFoot === 11 ||
            props.mazeFoot === 12 ||
            props.mazeFoot === 14 ||
            props.mazeFoot === 17 ||
            props.mazeFoot === 19 ||
            props.mazeFoot === 20 ||
            props.mazeFoot === 21 ||
            props.mazeFoot === 23 ||
            props.mazeFoot === 28 ||
            props.mazeFoot === 29 ||
            props.mazeFoot === 31 ||
            props.mazeFoot === 34 ||
            props.mazeFoot === 35 ||
            props.mazeFoot === 36 ||
            props.mazeFoot === 37 ||
            props.mazeFoot === 39 ||
            props.mazeFoot === 41 ||
            props.mazeFoot === 42 ||
            props.mazeFoot === 44 ||
            props.mazeFoot === 46 ||
            props.mazeFoot === 47 ||
            props.mazeFoot === 50 ||
            props.mazeFoot === 52 ||
            props.mazeFoot === 53 ||
            props.mazeFoot === 55 ||
            props.mazeFoot === 58 ||
            props.mazeFoot === 60 ||
            props.mazeFoot === 62 ||
            props.mazeFoot === 63)
        )
          props.setMazeFoot((move) => move - 1);
      }}
    >
      <FontAwesomeIcon
        icon={
          props.value === "up"
            ? faUpLong
            : props.value === "right"
            ? faRightLong
            : props.value === "down"
            ? faDownLong
            : props.value === "left" && faLeftLong
        }
      />
    </button>
  );
};

export { ButtonName, ButtonMove };
