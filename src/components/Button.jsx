import {
  faA,
  faAward,
  faBook,
  faCircleRight,
  faD,
  faDiceFour,
  faDiceOne,
  faDiceThree,
  faDiceTwo,
  faDownLong,
  faLeftLong,
  faLock,
  faPeopleGroup,
  faPlay,
  faRightFromBracket,
  faRightLong,
  faS,
  faUpLong,
  faW,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { handleMoveMaze } from "../handler/handleMoveMaze";
import { handleNavigatePage } from "../handler/handleNavigatePage";

export default function Button(props) {
  const navigate = useNavigate("");
  const value = props.value;
  const mazeLevel = props.mazeLevel;

  return (
    <button
      disabled={props.value === "lock" ? true : false}
      className={
        "w-full my-[15px] rounded-[0.05rem] bg-[#f1eaff] drop-shadow-custom grid grid-cols-[auto_65%] place-content-center place-items-center text-[#392467] 4xs:shadow-[0_2px_0_0_#000000,0_7px_0_0_#d0a2f7] 4xs:max-w-[120px] 4xs:text-[1rem] 3xs:shadow-[0_2px_0_0_#000000,0_7px_0_0_#d0a2f7] 3xs:max-w-[120px] 3xs:text-[1rem] 2xs:shadow-[0_2px_0_0_#000000,0_8px_0_0_#d0a2f7] 2xs:max-w-[130px] 2xs:text-[1.1rem] xs:shadow-[0_2px_0_0_#000000,0_8px_0_0_#d0a2f7] xs:max-w-[140px] xs:text-[1.1rem] sm:shadow-[0_2px_0_0_#000000,0_8px_0_0_#d0a2f7] sm:max-w-[150px] sm:text-[1.2rem] md:shadow-[0_2px_0_0_#000000,0_9px_0_0_#d0a2f7] md:max-w-[160px] md:text-[1.3rem] lg:shadow-[0_2px_0_0_#000000,0_10px_0_0_#d0a2f7] lg:max-w-[170px] lg:text-[1.4rem] xl:shadow-[0_2px_0_0_#000000,0_10px_0_0_#d0a2f7] xl:max-w-[180px] xl:text-[1.5rem] 2xl:shadow-[0_2px_0_0_#000000,0_10px_0_0_#d0a2f7] 2xl:max-w-[190px] 2xl:text-[1.6rem] hover:disabled:cursor-not-allowed hover:enabled:text-[#f1eaff] hover:enabled:bg-[#392466] hover:active:enabled:shadow-none hover:active:enabled:4xs:translate-y-[7px] hover:active:enabled:3xs:translate-y-[7px] hover:active:enabled:2xs:translate-y-[8px] hover:active:enabled:xs:translate-y-[8px] hover:active:enabled:sm:translate-y-[8px] hover:active:enabled:md:translate-y-[9px] hover:active:enabled:lg:translate-y-[10px] hover:active:enabled:xl:translate-y-[10px] hover:active:enabled:2xl:translate-y-[10px] hover:enabled:transition-all hover:active:enabled:transition-all"
      }
      onClick={() => {
        handleNavigatePage({ navigate, value, mazeLevel });
      }}
    >
      <ButtonIcon value={props.value} level={props.level} />
      {props.children}
    </button>
  );
}

const ButtonIcon = (props) => {
  return (
    <FontAwesomeIcon
      className={`${
        props.value !== "w" &&
        props.value !== "a" &&
        props.value !== "s" &&
        props.value !== "d" &&
        props.value !== "up" &&
        props.value !== "right" &&
        props.value !== "down" &&
        props.value !== "left" &&
        props.value !== "lock" &&
        "animate-faFade"
      }`}
      icon={
        props.value === "start"
          ? faPlay
          : props.value === "guide"
          ? faBook
          : props.value === "about"
          ? faPeopleGroup
          : props.value === "back" || props.value === "level"
          ? faRightFromBracket
          : props.value === "play" && props.level === 0
          ? faDiceOne
          : props.value === "play" && props.level === 1
          ? faDiceTwo
          : props.value === "play" && props.level === 2
          ? faDiceThree
          : props.value === "play" && props.level === 3
          ? faDiceFour
          : props.value === "lock"
          ? faLock
          : props.value === "up"
          ? faUpLong
          : props.value === "right"
          ? faRightLong
          : props.value === "down"
          ? faDownLong
          : props.value === "left"
          ? faLeftLong
          : props.value === "w"
          ? faW
          : props.value === "s"
          ? faS
          : props.value === "a"
          ? faA
          : props.value === "d"
          ? faD
          : props.value === "next"
          ? faCircleRight
          : props.value === "end" && faAward
      }
    />
  );
};

const ButtonName = (props) => {
  return (
    <p className={"font-titan tracking-[3px] uppercase"}>{props.children}</p>
  );
};

const ButtonMove = (props) => {
  return (
    <button
      disabled={
        (props.currentLevel.current === 1 && props.mazeFoot !== 60) ||
        (props.currentLevel.current === 2 && props.mazeFoot !== 248) ||
        (props.currentLevel.current === 3 && props.mazeFoot !== 1008) ||
        (props.currentLevel.current === 4 && props.mazeFoot !== 15)
          ? false
          : !props.guide && true
      }
      className={`w-[20%] rounded-[0.05rem] drop-shadow-custom disabled:bg-[#392467] disabled:text-[#f1eaff] enabled:bg-[#f1eaff] enabled:text-[#392467] ${
        props.guide && "pointer-events-none"
      }
       4xs:shadow-[0_2px_0_0_#000000,0_7px_0_0_#d0a2f7] 4xs:max-w-[120px] 4xs:text-[1.2rem] 3xs:shadow-[0_2px_0_0_#000000,0_7px_0_0_#d0a2f7] 3xs:max-w-[120px] 3xs:text-[1.2rem] 2xs:shadow-[0_2px_0_0_#000000,0_8px_0_0_#d0a2f7] 2xs:max-w-[130px] 2xs:text-[1.4rem] xs:shadow-[0_2px_0_0_#000000,0_8px_0_0_#d0a2f7] xs:max-w-[140px] xs:text-[1.4rem] sm:shadow-[0_2px_0_0_#000000,0_8px_0_0_#d0a2f7] sm:max-w-[150px] sm:text-[1.6rem] md:shadow-[0_2px_0_0_#000000,0_9px_0_0_#d0a2f7] md:max-w-[160px] md:text-[1.8rem] lg:shadow-[0_2px_0_0_#000000,0_10px_0_0_#d0a2f7] lg:max-w-[170px] lg:text-[2.4rem] xl:shadow-[0_2px_0_0_#000000,0_10px_0_0_#d0a2f7] xl:max-w-[180px] xl:text-[2.5rem] 2xl:shadow-[0_2px_0_0_#000000,0_10px_0_0_#d0a2f7] 2xl:max-w-[190px] 2xl:text-[2.6rem] hover:disabled:cursor-not-allowed hover:enabled:text-[#f1eaff] hover:enabled:bg-[#392467] hover:active:enabled:shadow-none hover:active:enabled:4xs:translate-y-[7px] hover:active:enabled:3xs:translate-y-[7px] hover:active:enabled:2xs:translate-y-[8px] hover:active:enabled:xs:translate-y-[8px] hover:active:enabled:sm:translate-y-[8px] hover:active:enabled:md:translate-y-[9px] hover:active:enabled:lg:translate-y-[10px] hover:active:enabled:xl:translate-y-[10px] hover:active:enabled:2xl:translate-y-[10px]
       hover:enabled:transition-all hover:active:enabled:transition-all`}
      onClick={() => {
        if (
          (props.currentLevel.current === 1 && props.mazeFoot !== 60) ||
          (props.currentLevel.current === 2 && props.mazeFoot !== 248) ||
          (props.currentLevel.current === 3 && props.mazeFoot !== 1008) ||
          (props.currentLevel.current === 4 && props.mazeFoot !== 15)
        )
          handleMoveMaze(props);
      }}
    >
      <ButtonIcon value={props.value} />
    </button>
  );
};

export { ButtonName, ButtonMove, ButtonIcon };
