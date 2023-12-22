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
        else if (props.value === "play") {
          if (props.mazeLevel === 1) localStorage.setItem("mazeLevel", 1);
          else if (props.mazeLevel === 2) localStorage.setItem("mazeLevel", 2);
          else if (props.mazeLevel === 3) localStorage.setItem("mazeLevel", 3);
          else if (props.mazeLevel === 4) localStorage.setItem("mazeLevel", 4);
          navigate("/Play", { replace: true });
        } else if (props.value === "back") navigate("/", { replace: true });
      }}
    >
      <ButtonIcon value={props.value} />
      {props.children}
    </button>
  );
}

const ButtonIcon = (props) => {
  return (
    <FontAwesomeIcon
      className={`${
        props.value !== "up" &&
        props.value !== "right" &&
        props.value !== "down" &&
        props.value !== "left" &&
        "text-[1.5rem] animate-faFade"
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
          : props.value === "play"
          ? faCube
          : props.value === "up"
          ? faUpLong
          : props.value === "right"
          ? faRightLong
          : props.value === "down"
          ? faDownLong
          : props.value === "left" && faLeftLong
      }
    />
  );
};

const ButtonName = (props) => {
  return (
    <p className={"font-titan text-[1.5rem] tracking-[3px] uppercase"}>
      {props.children}
    </p>
  );
};

const handleMazeMove = (props) => {
  if (
    props.value === "up" &&
    (props.currentLevel === 1
      ? props.mazeFoot === 8 ||
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
        props.mazeFoot === 62
      : props.currentLevel === 2
      ? props.mazeFoot === 16 ||
        props.mazeFoot === 18 ||
        props.mazeFoot === 20 ||
        props.mazeFoot === 21 ||
        props.mazeFoot === 22 ||
        props.mazeFoot === 23 ||
        props.mazeFoot === 24 ||
        props.mazeFoot === 26 ||
        props.mazeFoot === 28 ||
        props.mazeFoot === 29 ||
        props.mazeFoot === 32 ||
        props.mazeFoot === 33 ||
        props.mazeFoot === 35 ||
        props.mazeFoot === 42 ||
        props.mazeFoot === 43 ||
        props.mazeFoot === 44 ||
        props.mazeFoot === 45 ||
        props.mazeFoot === 46 ||
        props.mazeFoot === 47 ||
        props.mazeFoot === 48 ||
        props.mazeFoot === 50 ||
        props.mazeFoot === 51 ||
        props.mazeFoot === 52 ||
        props.mazeFoot === 53 ||
        props.mazeFoot === 55 ||
        props.mazeFoot === 56 ||
        props.mazeFoot === 59 ||
        props.mazeFoot === 60 ||
        props.mazeFoot === 61 ||
        props.mazeFoot === 62 ||
        props.mazeFoot === 65 ||
        props.mazeFoot === 66 ||
        props.mazeFoot === 67 ||
        props.mazeFoot === 68 ||
        props.mazeFoot === 69 ||
        props.mazeFoot === 70 ||
        props.mazeFoot === 73 ||
        props.mazeFoot === 74 ||
        props.mazeFoot === 75 ||
        props.mazeFoot === 76 ||
        props.mazeFoot === 79 ||
        props.mazeFoot === 80 ||
        props.mazeFoot === 81 ||
        props.mazeFoot === 85 ||
        props.mazeFoot === 87 ||
        props.mazeFoot === 88 ||
        props.mazeFoot === 89 ||
        props.mazeFoot === 90 ||
        props.mazeFoot === 91 ||
        props.mazeFoot === 95 ||
        props.mazeFoot === 97 ||
        props.mazeFoot === 98 ||
        props.mazeFoot === 99 ||
        props.mazeFoot === 100 ||
        props.mazeFoot === 102 ||
        props.mazeFoot === 105 ||
        props.mazeFoot === 106 ||
        props.mazeFoot === 108 ||
        props.mazeFoot === 109 ||
        props.mazeFoot === 110 ||
        props.mazeFoot === 111 ||
        props.mazeFoot === 112 ||
        props.mazeFoot === 113 ||
        props.mazeFoot === 115 ||
        props.mazeFoot === 118 ||
        props.mazeFoot === 119 ||
        props.mazeFoot === 126 ||
        props.mazeFoot === 127 ||
        props.mazeFoot === 128 ||
        props.mazeFoot === 129 ||
        props.mazeFoot === 130 ||
        props.mazeFoot === 137 ||
        props.mazeFoot === 138 ||
        props.mazeFoot === 139 ||
        props.mazeFoot === 140 ||
        props.mazeFoot === 141 ||
        props.mazeFoot === 142 ||
        props.mazeFoot === 143 ||
        props.mazeFoot === 144 ||
        props.mazeFoot === 147 ||
        props.mazeFoot === 148 ||
        props.mazeFoot === 154 ||
        props.mazeFoot === 155 ||
        props.mazeFoot === 156 ||
        props.mazeFoot === 158 ||
        props.mazeFoot === 159 ||
        props.mazeFoot === 160 ||
        props.mazeFoot === 161 ||
        props.mazeFoot === 165 ||
        props.mazeFoot === 166 ||
        props.mazeFoot === 168 ||
        props.mazeFoot === 169 ||
        props.mazeFoot === 170 ||
        props.mazeFoot === 173 ||
        props.mazeFoot === 176 ||
        props.mazeFoot === 178 ||
        props.mazeFoot === 178 ||
        props.mazeFoot === 183 ||
        props.mazeFoot === 184 ||
        props.mazeFoot === 185 ||
        props.mazeFoot === 187 ||
        props.mazeFoot === 188 ||
        props.mazeFoot === 189 ||
        props.mazeFoot === 190 ||
        props.mazeFoot === 191 ||
        props.mazeFoot === 192 ||
        props.mazeFoot === 193 ||
        props.mazeFoot === 194 ||
        props.mazeFoot === 196 ||
        props.mazeFoot === 197 ||
        props.mazeFoot === 200 ||
        props.mazeFoot === 206 ||
        props.mazeFoot === 207 ||
        props.mazeFoot === 211 ||
        props.mazeFoot === 212 ||
        props.mazeFoot === 214 ||
        props.mazeFoot === 215 ||
        props.mazeFoot === 217 ||
        props.mazeFoot === 218 ||
        props.mazeFoot === 223 ||
        props.mazeFoot === 224 ||
        props.mazeFoot === 225 ||
        props.mazeFoot === 226 ||
        props.mazeFoot === 228 ||
        props.mazeFoot === 230 ||
        props.mazeFoot === 231 ||
        props.mazeFoot === 232 ||
        props.mazeFoot === 237 ||
        props.mazeFoot === 240 ||
        props.mazeFoot === 243 ||
        props.mazeFoot === 244 ||
        props.mazeFoot === 245 ||
        props.mazeFoot === 250 ||
        props.mazeFoot === 251 ||
        props.mazeFoot === 252 ||
        props.mazeFoot === 254 ||
        props.mazeFoot === 255
      : props.currentLevel >= 3 && "")
  )
    props.setMazeFoot(
      (move) =>
        move -
        (props.currentLevel === 1
          ? 8
          : props.currentLevel === 2
          ? 16
          : props.currentLevel >= 3 && 32)
    );
  else if (
    props.value === "right" &&
    (props.currentLevel === 1
      ? props.mazeFoot === 1 ||
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
        props.mazeFoot === 62
      : props.currentLevel === 2
      ? props.mazeFoot === 0 ||
        props.mazeFoot === 2 ||
        props.mazeFoot === 3 ||
        props.mazeFoot === 5 ||
        props.mazeFoot === 8 ||
        props.mazeFoot === 10 ||
        props.mazeFoot === 11 ||
        props.mazeFoot === 13 ||
        props.mazeFoot === 14 ||
        props.mazeFoot === 16 ||
        props.mazeFoot === 19 ||
        props.mazeFoot === 20 ||
        props.mazeFoot === 22 ||
        props.mazeFoot === 24 ||
        props.mazeFoot === 25 ||
        props.mazeFoot === 29 ||
        props.mazeFoot === 30 ||
        props.mazeFoot === 33 ||
        props.mazeFoot === 36 ||
        props.mazeFoot === 37 ||
        props.mazeFoot === 38 ||
        props.mazeFoot === 40 ||
        props.mazeFoot === 41 ||
        props.mazeFoot === 48 ||
        props.mazeFoot === 55 ||
        props.mazeFoot === 57 ||
        props.mazeFoot === 60 ||
        props.mazeFoot === 62 ||
        props.mazeFoot === 66 ||
        props.mazeFoot === 69 ||
        props.mazeFoot === 71 ||
        props.mazeFoot === 75 ||
        props.mazeFoot === 76 ||
        props.mazeFoot === 77 ||
        props.mazeFoot === 80 ||
        props.mazeFoot === 82 ||
        props.mazeFoot === 84 ||
        props.mazeFoot === 86 ||
        props.mazeFoot === 92 ||
        props.mazeFoot === 93 ||
        props.mazeFoot === 100 ||
        props.mazeFoot === 101 ||
        props.mazeFoot === 103 ||
        props.mazeFoot === 104 ||
        props.mazeFoot === 106 ||
        props.mazeFoot === 107 ||
        props.mazeFoot === 114 ||
        props.mazeFoot === 115 ||
        props.mazeFoot === 116 ||
        props.mazeFoot === 117 ||
        props.mazeFoot === 119 ||
        props.mazeFoot === 120 ||
        props.mazeFoot === 122 ||
        props.mazeFoot === 125 ||
        props.mazeFoot === 128 ||
        props.mazeFoot === 129 ||
        props.mazeFoot === 131 ||
        props.mazeFoot === 132 ||
        props.mazeFoot === 133 ||
        props.mazeFoot === 134 ||
        props.mazeFoot === 135 ||
        props.mazeFoot === 136 ||
        props.mazeFoot === 140 ||
        props.mazeFoot === 145 ||
        props.mazeFoot === 146 ||
        props.mazeFoot === 149 ||
        props.mazeFoot === 151 ||
        props.mazeFoot === 156 ||
        props.mazeFoot === 158 ||
        props.mazeFoot === 161 ||
        props.mazeFoot === 163 ||
        props.mazeFoot === 164 ||
        props.mazeFoot === 166 ||
        props.mazeFoot === 168 ||
        props.mazeFoot === 170 ||
        props.mazeFoot === 171 ||
        props.mazeFoot === 174 ||
        props.mazeFoot === 178 ||
        props.mazeFoot === 181 ||
        props.mazeFoot === 182 ||
        props.mazeFoot === 185 ||
        props.mazeFoot === 186 ||
        props.mazeFoot === 188 ||
        props.mazeFoot === 192 ||
        props.mazeFoot === 194 ||
        props.mazeFoot === 197 ||
        props.mazeFoot === 199 ||
        props.mazeFoot === 200 ||
        props.mazeFoot === 202 ||
        props.mazeFoot === 203 ||
        props.mazeFoot === 204 ||
        props.mazeFoot === 205 ||
        props.mazeFoot === 208 ||
        props.mazeFoot === 211 ||
        props.mazeFoot === 212 ||
        props.mazeFoot === 216 ||
        props.mazeFoot === 218 ||
        props.mazeFoot === 219 ||
        props.mazeFoot === 221 ||
        props.mazeFoot === 222 ||
        props.mazeFoot === 225 ||
        props.mazeFoot === 226 ||
        props.mazeFoot === 229 ||
        props.mazeFoot === 232 ||
        props.mazeFoot === 233 ||
        props.mazeFoot === 234 ||
        props.mazeFoot === 235 ||
        props.mazeFoot === 237 ||
        props.mazeFoot === 240 ||
        props.mazeFoot === 241 ||
        props.mazeFoot === 243 ||
        props.mazeFoot === 245 ||
        props.mazeFoot === 246 ||
        props.mazeFoot === 247 ||
        props.mazeFoot === 249 ||
        props.mazeFoot === 252 ||
        props.mazeFoot === 253 ||
        props.mazeFoot === 254
      : props.currentLevel >= 3 && "")
  )
    props.setMazeFoot((move) => move + 1);
  else if (
    props.value === "down" &&
    (props.currentLevel === 1
      ? props.mazeFoot === 0 ||
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
        props.mazeFoot === 54
      : props.currentLevel === 2
      ? props.mazeFoot + 16 === 16 ||
        props.mazeFoot + 16 === 18 ||
        props.mazeFoot + 16 === 20 ||
        props.mazeFoot + 16 === 21 ||
        props.mazeFoot + 16 === 22 ||
        props.mazeFoot + 16 === 23 ||
        props.mazeFoot + 16 === 24 ||
        props.mazeFoot + 16 === 26 ||
        props.mazeFoot + 16 === 28 ||
        props.mazeFoot + 16 === 29 ||
        props.mazeFoot + 16 === 32 ||
        props.mazeFoot + 16 === 33 ||
        props.mazeFoot + 16 === 35 ||
        props.mazeFoot + 16 === 42 ||
        props.mazeFoot + 16 === 43 ||
        props.mazeFoot + 16 === 44 ||
        props.mazeFoot + 16 === 45 ||
        props.mazeFoot + 16 === 46 ||
        props.mazeFoot + 16 === 47 ||
        props.mazeFoot + 16 === 48 ||
        props.mazeFoot + 16 === 50 ||
        props.mazeFoot + 16 === 51 ||
        props.mazeFoot + 16 === 52 ||
        props.mazeFoot + 16 === 53 ||
        props.mazeFoot + 16 === 55 ||
        props.mazeFoot + 16 === 56 ||
        props.mazeFoot + 16 === 59 ||
        props.mazeFoot + 16 === 60 ||
        props.mazeFoot + 16 === 61 ||
        props.mazeFoot + 16 === 62 ||
        props.mazeFoot + 16 === 65 ||
        props.mazeFoot + 16 === 66 ||
        props.mazeFoot + 16 === 67 ||
        props.mazeFoot + 16 === 68 ||
        props.mazeFoot + 16 === 69 ||
        props.mazeFoot + 16 === 70 ||
        props.mazeFoot + 16 === 73 ||
        props.mazeFoot + 16 === 74 ||
        props.mazeFoot + 16 === 75 ||
        props.mazeFoot + 16 === 76 ||
        props.mazeFoot + 16 === 79 ||
        props.mazeFoot + 16 === 80 ||
        props.mazeFoot + 16 === 81 ||
        props.mazeFoot + 16 === 85 ||
        props.mazeFoot + 16 === 87 ||
        props.mazeFoot + 16 === 88 ||
        props.mazeFoot + 16 === 89 ||
        props.mazeFoot + 16 === 90 ||
        props.mazeFoot + 16 === 91 ||
        props.mazeFoot + 16 === 95 ||
        props.mazeFoot + 16 === 97 ||
        props.mazeFoot + 16 === 98 ||
        props.mazeFoot + 16 === 99 ||
        props.mazeFoot + 16 === 100 ||
        props.mazeFoot + 16 === 102 ||
        props.mazeFoot + 16 === 105 ||
        props.mazeFoot + 16 === 106 ||
        props.mazeFoot + 16 === 108 ||
        props.mazeFoot + 16 === 109 ||
        props.mazeFoot + 16 === 110 ||
        props.mazeFoot + 16 === 111 ||
        props.mazeFoot + 16 === 112 ||
        props.mazeFoot + 16 === 113 ||
        props.mazeFoot + 16 === 115 ||
        props.mazeFoot + 16 === 118 ||
        props.mazeFoot + 16 === 119 ||
        props.mazeFoot + 16 === 126 ||
        props.mazeFoot + 16 === 127 ||
        props.mazeFoot + 16 === 128 ||
        props.mazeFoot + 16 === 129 ||
        props.mazeFoot + 16 === 130 ||
        props.mazeFoot + 16 === 137 ||
        props.mazeFoot + 16 === 138 ||
        props.mazeFoot + 16 === 139 ||
        props.mazeFoot + 16 === 140 ||
        props.mazeFoot + 16 === 141 ||
        props.mazeFoot + 16 === 142 ||
        props.mazeFoot + 16 === 143 ||
        props.mazeFoot + 16 === 144 ||
        props.mazeFoot + 16 === 147 ||
        props.mazeFoot + 16 === 148 ||
        props.mazeFoot + 16 === 154 ||
        props.mazeFoot + 16 === 155 ||
        props.mazeFoot + 16 === 156 ||
        props.mazeFoot + 16 === 158 ||
        props.mazeFoot + 16 === 159 ||
        props.mazeFoot + 16 === 160 ||
        props.mazeFoot + 16 === 161 ||
        props.mazeFoot + 16 === 165 ||
        props.mazeFoot + 16 === 166 ||
        props.mazeFoot + 16 === 168 ||
        props.mazeFoot + 16 === 169 ||
        props.mazeFoot + 16 === 170 ||
        props.mazeFoot + 16 === 173 ||
        props.mazeFoot + 16 === 176 ||
        props.mazeFoot + 16 === 178 ||
        props.mazeFoot + 16 === 178 ||
        props.mazeFoot + 16 === 183 ||
        props.mazeFoot + 16 === 184 ||
        props.mazeFoot + 16 === 185 ||
        props.mazeFoot + 16 === 187 ||
        props.mazeFoot + 16 === 188 ||
        props.mazeFoot + 16 === 189 ||
        props.mazeFoot + 16 === 190 ||
        props.mazeFoot + 16 === 191 ||
        props.mazeFoot + 16 === 192 ||
        props.mazeFoot + 16 === 193 ||
        props.mazeFoot + 16 === 194 ||
        props.mazeFoot + 16 === 196 ||
        props.mazeFoot + 16 === 197 ||
        props.mazeFoot + 16 === 200 ||
        props.mazeFoot + 16 === 206 ||
        props.mazeFoot + 16 === 207 ||
        props.mazeFoot + 16 === 211 ||
        props.mazeFoot + 16 === 212 ||
        props.mazeFoot + 16 === 214 ||
        props.mazeFoot + 16 === 215 ||
        props.mazeFoot + 16 === 217 ||
        props.mazeFoot + 16 === 218 ||
        props.mazeFoot + 16 === 223 ||
        props.mazeFoot + 16 === 224 ||
        props.mazeFoot + 16 === 225 ||
        props.mazeFoot + 16 === 226 ||
        props.mazeFoot + 16 === 228 ||
        props.mazeFoot + 16 === 230 ||
        props.mazeFoot + 16 === 231 ||
        props.mazeFoot + 16 === 232 ||
        props.mazeFoot + 16 === 237 ||
        props.mazeFoot + 16 === 240 ||
        props.mazeFoot + 16 === 243 ||
        props.mazeFoot + 16 === 244 ||
        props.mazeFoot + 16 === 245 ||
        props.mazeFoot + 16 === 250 ||
        props.mazeFoot + 16 === 251 ||
        props.mazeFoot + 16 === 252 ||
        props.mazeFoot + 16 === 254 ||
        props.mazeFoot + 16 === 255
      : props.currentLevel >= 3 && "")
  )
    props.setMazeFoot(
      (move) =>
        move +
        (props.currentLevel === 1
          ? 8
          : props.currentLevel === 2
          ? 16
          : props.currentLevel >= 3 && "")
    );
  else if (
    props.value === "left" &&
    (props.currentLevel === 1
      ? props.mazeFoot === 2 ||
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
        props.mazeFoot === 63
      : props.currentLevel === 2
      ? props.mazeFoot - 1 === 0 ||
        props.mazeFoot - 1 === 2 ||
        props.mazeFoot - 1 === 3 ||
        props.mazeFoot - 1 === 5 ||
        props.mazeFoot - 1 === 8 ||
        props.mazeFoot - 1 === 10 ||
        props.mazeFoot - 1 === 11 ||
        props.mazeFoot - 1 === 13 ||
        props.mazeFoot - 1 === 14 ||
        props.mazeFoot - 1 === 16 ||
        props.mazeFoot - 1 === 19 ||
        props.mazeFoot - 1 === 20 ||
        props.mazeFoot - 1 === 22 ||
        props.mazeFoot - 1 === 24 ||
        props.mazeFoot - 1 === 25 ||
        props.mazeFoot - 1 === 29 ||
        props.mazeFoot - 1 === 30 ||
        props.mazeFoot - 1 === 33 ||
        props.mazeFoot - 1 === 36 ||
        props.mazeFoot - 1 === 37 ||
        props.mazeFoot - 1 === 38 ||
        props.mazeFoot - 1 === 40 ||
        props.mazeFoot - 1 === 41 ||
        props.mazeFoot - 1 === 48 ||
        props.mazeFoot - 1 === 55 ||
        props.mazeFoot - 1 === 57 ||
        props.mazeFoot - 1 === 60 ||
        props.mazeFoot - 1 === 62 ||
        props.mazeFoot - 1 === 66 ||
        props.mazeFoot - 1 === 69 ||
        props.mazeFoot - 1 === 71 ||
        props.mazeFoot - 1 === 75 ||
        props.mazeFoot - 1 === 76 ||
        props.mazeFoot - 1 === 77 ||
        props.mazeFoot - 1 === 80 ||
        props.mazeFoot - 1 === 82 ||
        props.mazeFoot - 1 === 84 ||
        props.mazeFoot - 1 === 86 ||
        props.mazeFoot - 1 === 92 ||
        props.mazeFoot - 1 === 93 ||
        props.mazeFoot - 1 === 100 ||
        props.mazeFoot - 1 === 101 ||
        props.mazeFoot - 1 === 103 ||
        props.mazeFoot - 1 === 104 ||
        props.mazeFoot - 1 === 106 ||
        props.mazeFoot - 1 === 107 ||
        props.mazeFoot - 1 === 114 ||
        props.mazeFoot - 1 === 115 ||
        props.mazeFoot - 1 === 116 ||
        props.mazeFoot - 1 === 117 ||
        props.mazeFoot - 1 === 119 ||
        props.mazeFoot - 1 === 120 ||
        props.mazeFoot - 1 === 122 ||
        props.mazeFoot - 1 === 125 ||
        props.mazeFoot - 1 === 128 ||
        props.mazeFoot - 1 === 129 ||
        props.mazeFoot - 1 === 131 ||
        props.mazeFoot - 1 === 132 ||
        props.mazeFoot - 1 === 133 ||
        props.mazeFoot - 1 === 134 ||
        props.mazeFoot - 1 === 135 ||
        props.mazeFoot - 1 === 136 ||
        props.mazeFoot - 1 === 140 ||
        props.mazeFoot - 1 === 145 ||
        props.mazeFoot - 1 === 146 ||
        props.mazeFoot - 1 === 149 ||
        props.mazeFoot - 1 === 151 ||
        props.mazeFoot - 1 === 156 ||
        props.mazeFoot - 1 === 158 ||
        props.mazeFoot - 1 === 161 ||
        props.mazeFoot - 1 === 163 ||
        props.mazeFoot - 1 === 164 ||
        props.mazeFoot - 1 === 166 ||
        props.mazeFoot - 1 === 168 ||
        props.mazeFoot - 1 === 170 ||
        props.mazeFoot - 1 === 171 ||
        props.mazeFoot - 1 === 174 ||
        props.mazeFoot - 1 === 178 ||
        props.mazeFoot - 1 === 181 ||
        props.mazeFoot - 1 === 182 ||
        props.mazeFoot - 1 === 185 ||
        props.mazeFoot - 1 === 186 ||
        props.mazeFoot - 1 === 188 ||
        props.mazeFoot - 1 === 192 ||
        props.mazeFoot - 1 === 194 ||
        props.mazeFoot - 1 === 197 ||
        props.mazeFoot - 1 === 199 ||
        props.mazeFoot - 1 === 200 ||
        props.mazeFoot - 1 === 202 ||
        props.mazeFoot - 1 === 203 ||
        props.mazeFoot - 1 === 204 ||
        props.mazeFoot - 1 === 205 ||
        props.mazeFoot - 1 === 208 ||
        props.mazeFoot - 1 === 211 ||
        props.mazeFoot - 1 === 212 ||
        props.mazeFoot - 1 === 216 ||
        props.mazeFoot - 1 === 218 ||
        props.mazeFoot - 1 === 219 ||
        props.mazeFoot - 1 === 221 ||
        props.mazeFoot - 1 === 222 ||
        props.mazeFoot - 1 === 225 ||
        props.mazeFoot - 1 === 226 ||
        props.mazeFoot - 1 === 229 ||
        props.mazeFoot - 1 === 232 ||
        props.mazeFoot - 1 === 233 ||
        props.mazeFoot - 1 === 234 ||
        props.mazeFoot - 1 === 235 ||
        props.mazeFoot - 1 === 237 ||
        props.mazeFoot - 1 === 240 ||
        props.mazeFoot - 1 === 241 ||
        props.mazeFoot - 1 === 243 ||
        props.mazeFoot - 1 === 245 ||
        props.mazeFoot - 1 === 246 ||
        props.mazeFoot - 1 === 247 ||
        props.mazeFoot - 1 === 249 ||
        props.mazeFoot - 1 === 252 ||
        props.mazeFoot - 1 === 253 ||
        props.mazeFoot - 1 === 254
      : props.currentLevel >= 3 && "")
  )
    props.setMazeFoot((move) => move - 1);
};

const ButtonMove = (props) => {
  return (
    <button
      className={
        "text-[2rem] w-[50px] rounded-[0.25rem] bg-[#f1eaff] text-[#392467] drop-shadow-custom hover:bg-[#392467] hover:text-[#f1eaff]"
      }
      onClick={() => handleMazeMove(props)}
    >
      <ButtonIcon value={props.value} />
    </button>
  );
};

export { ButtonName, ButtonMove };
