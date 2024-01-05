import Button, { ButtonMove, ButtonName } from "../components/Button";
import Container, { AbsoluteDiv } from "../components/Container";
import Header from "../components/Header";
import Hero from "../assets/img/gif/gif.gif";
import Home from "../assets/img/gif/end.gif";
import { useEffect, useRef, useState } from "react";
import onKeyDownFocus from "react-focus-onkeydown";
import { handleMoveMaze } from "../handler/handleMoveMaze";
import { useNavigate } from "react-router-dom";

const moveMaze = ["up", "down", "left", "right"];
const mazeArray1 = Array(64).fill(null);
const mazeArray2 = Array(256).fill(null);
const mazeArray3 = Array(1024).fill(null);

export default function Play() {
  const navigate = useNavigate("");

  const currentLevel = useRef(parseInt(localStorage.mazeLevel));

  const mazeMove = useRef(null);

  const mazeFocus = useRef(null);
  onKeyDownFocus(mazeFocus, true);

  const [mazeFoot, setMazeFoot] = useState(() => {
    if (currentLevel.current === 1)
      if (localStorage.maze1) return parseInt(localStorage.maze1);
      else return 3;
    else if (currentLevel.current === 2)
      if (localStorage.maze2) return parseInt(localStorage.maze2);
      else return 7;
    else if (currentLevel.current === 3)
      if (localStorage.maze3) return parseInt(localStorage.maze3);
      else return 15;
    else if (currentLevel.current === 4)
      if (localStorage.maze4) return parseInt(localStorage.maze4);
      else return 1008;
  });

  useEffect(() => {
    if (currentLevel.current === 1) localStorage.setItem("maze1", mazeFoot);
    else if (currentLevel.current === 2)
      localStorage.setItem("maze2", mazeFoot);
    else if (currentLevel.current === 3)
      localStorage.setItem("maze3", mazeFoot);
    else if (currentLevel.current === 4)
      localStorage.setItem("maze4", mazeFoot);
  }, [mazeFoot]);

  return (
    <Container value="center">
      <AbsoluteDiv>
        <Header header="play">Amaze {currentLevel.current}</Header>

        <Button
          tabIndex={-1}
          value={
            (currentLevel.current === 1 && mazeFoot !== 60) ||
            (currentLevel.current === 2 && mazeFoot !== 248) ||
            (currentLevel.current === 3 && mazeFoot !== 1008) ||
            (currentLevel.current === 4 && mazeFoot !== 15)
              ? "level"
              : currentLevel.current !== 4 && mazeFoot !== 15
              ? "next"
              : "end"
          }
        >
          <ButtonName>
            {(currentLevel.current === 1 && mazeFoot !== 60) ||
            (currentLevel.current === 2 && mazeFoot !== 248) ||
            (currentLevel.current === 3 && mazeFoot !== 1008) ||
            (currentLevel.current === 4 && mazeFoot !== 15)
              ? "Back"
              : currentLevel.current !== 4 && mazeFoot !== 15
              ? "Next"
              : "End"}
          </ButtonName>
        </Button>
      </AbsoluteDiv>

      <AbsoluteDiv value="guide">
        <button
          onClick={() => {
            localStorage.setItem("guidePlay", true);
            localStorage.setItem("mazeLevel", currentLevel.current);
            navigate("/Guide", { replace: true });
          }}
        >
          <Header value="guide">Guide</Header>
        </button>
      </AbsoluteDiv>

      <div
        ref={mazeFocus}
        tabIndex={-1}
        onKeyDown={(e) => {
          if (
            (currentLevel.current === 1 && mazeFoot !== 60) ||
            (currentLevel.current === 2 && mazeFoot !== 248) ||
            (currentLevel.current === 3 && mazeFoot !== 1008) ||
            (currentLevel.current === 4 && mazeFoot !== 15)
          ) {
            if (e.code === "KeyW" || e.code === "ArrowUp")
              mazeMove.current = "up";
            else if (e.code === "KeyD" || e.code === "ArrowRight")
              mazeMove.current = "right";
            else if (e.code === "KeyS" || e.code === "ArrowDown")
              mazeMove.current = "down";
            else if (e.code === "KeyA" || e.code === "ArrowLeft")
              mazeMove.current = "left";
            handleMoveMaze({ mazeMove, currentLevel, mazeFoot, setMazeFoot });
          }
        }}
        className={"outline-none"}
      >
        <div
          className={
            "flex flex-wrap w-full 4xs:w-[280px] 3xs:w-[280px] 2xs:w-[380px] xs:w-[480px] sm:w-[580px] md:w-[580px] lg:w-[580px] xl:w-[580px] 2xl:w-[580px]"
          }
        >
          {(currentLevel.current === 1
            ? mazeArray1
            : currentLevel.current === 2
            ? mazeArray2
            : currentLevel.current >= 3 && mazeArray3
          ).map((maze, id) => (
            <div
              tabIndex={-1}
              key={id}
              className={`${
                currentLevel.current === 1
                  ? "4xs:w-[35px] 4xs:h-[35px] 3xs:w-[35px] 3xs:h-[35px] 2xs:w-[47.5px] 2xs:h-[47.5px] xs:w-[60px] xs:h-[60px] sm:w-[72.5px] sm:h-[72.5px] md:w-[72.5px] md:h-[72.5px] lg:w-[72.5px] lg:h-[72.5px] xl:w-[72.5px] xl:h-[72.5px] 2xl:w-[72.5px] 2xl:h-[72.5px]"
                  : currentLevel.current === 2
                  ? "4xs:w-[17.5px] 4xs:h-[17.5px] 3xs:w-[17.5px] 3xs:h-[17.5px] 2xs:w-[23.75px] 2xs:h-[23.75px] xs:w-[30px] xs:h-[30px] sm:w-[36.25px] sm:h-[36.25px] md:w-[36.25px] md:h-[36.25px] lg:w-[36.25px] lg:h-[36.25px] xl:w-[36.25px] xl:h-[36.25px] 2xl:w-[36.25px] 2xl:h-[36.25px]"
                  : currentLevel.current >= 3 &&
                    "4xs:w-[8.75px] 4xs:h-[8.75px] 3xs:w-[8.75px] 3xs:h-[8.75px] 2xs:w-[11.875px] 2xs:h-[11.875px] xs:w-[15px] xs:h-[15px] sm:w-[18.125px] sm:h-[18.125px] md:w-[18.125px] md:h-[18.125px] lg:w-[18.125px] lg:h-[18.125px] xl:w-[18.125px] xl:h-[18.125px] 2xl:w-[18.125px] 2xl:h-[18.125px]"
              } ${
                (currentLevel.current === 1 && mazeFoot !== 60) ||
                (currentLevel.current === 2 && mazeFoot !== 248) ||
                (currentLevel.current === 3 && mazeFoot !== 1008) ||
                (currentLevel.current === 4 && mazeFoot !== 15)
                  ? "bg-pink-950 border-pink-500"
                  : "bg-pink-500 border-pink-950"
              }  ${
                (currentLevel.current === 1
                  ? (id !== 3 && id >= 0 && id <= 7) || id === 13 || id === 22
                  : currentLevel.current === 2
                  ? (id !== 7 && id >= 0 && id <= 15) ||
                    id === 17 ||
                    id === 27 ||
                    id === 57 ||
                    id === 58
                  : currentLevel.current >= 3 &&
                    id !== 15 &&
                    id >= 0 &&
                    id <= 31) &&
                `${
                  currentLevel.current === 1
                    ? "border-t-[5px]"
                    : currentLevel.current === 2
                    ? "border-t-[3px]"
                    : currentLevel.current >= 3 && "border-t-[1px]"
                }`
              } ${
                (currentLevel.current === 1
                  ? id === 0 ||
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
                    id === 63
                  : currentLevel.current === 2
                  ? id === 1 ||
                    id === 4 ||
                    id === 6 ||
                    id === 9 ||
                    id === 12 ||
                    id === 15 ||
                    id === 17 ||
                    id === 21 ||
                    id === 28 ||
                    id === 31 ||
                    id === 44 ||
                    id === 46 ||
                    id === 47 ||
                    id === 49 ||
                    id === 54 ||
                    id === 56 ||
                    id === 63 ||
                    id === 64 ||
                    id === 65 ||
                    id === 70 ||
                    id === 72 ||
                    id === 73 ||
                    id === 78 ||
                    id === 79 ||
                    id === 81 ||
                    id === 88 ||
                    id === 89 ||
                    id === 94 ||
                    id === 95 ||
                    id === 96 ||
                    id === 97 ||
                    id === 98 ||
                    id === 105 ||
                    id === 109 ||
                    id === 110 ||
                    id === 111 ||
                    id === 112 ||
                    id === 113 ||
                    id === 121 ||
                    id === 123 ||
                    id === 126 ||
                    id === 127 ||
                    id === 137 ||
                    id === 138 ||
                    id === 139 ||
                    id === 141 ||
                    id === 142 ||
                    id === 143 ||
                    id === 152 ||
                    id === 153 ||
                    id === 154 ||
                    id === 155 ||
                    id === 157 ||
                    id === 159 ||
                    id === 167 ||
                    id === 169 ||
                    id === 172 ||
                    id === 173 ||
                    id === 175 ||
                    id === 177 ||
                    id === 183 ||
                    id === 184 ||
                    id === 187 ||
                    id === 189 ||
                    id === 190 ||
                    id === 191 ||
                    id === 193 ||
                    id === 201 ||
                    id === 206 ||
                    id === 207 ||
                    id === 209 ||
                    id === 210 ||
                    id === 213 ||
                    id === 217 ||
                    id === 220 ||
                    id === 223 ||
                    id === 224 ||
                    id === 227 ||
                    id === 236 ||
                    id === 238 ||
                    id === 239 ||
                    id === 242 ||
                    id === 250 ||
                    id === 251 ||
                    id === 255
                  : currentLevel.current >= 3 &&
                    (id == 3 ||
                      id === 7 ||
                      id === 9 ||
                      id === 11 ||
                      id === 12 ||
                      id === 19 ||
                      id === 22 ||
                      id === 25 ||
                      id === 29 ||
                      id === 31 ||
                      id === 38 ||
                      id === 42 ||
                      id === 43 ||
                      id === 51 ||
                      id === 53 ||
                      id === 54 ||
                      id === 60 ||
                      id === 63 ||
                      id === 70 ||
                      id === 71 ||
                      id === 85 ||
                      id === 92 ||
                      id === 95 ||
                      id === 98 ||
                      id === 101 ||
                      id === 102 ||
                      id === 103 ||
                      id === 106 ||
                      id === 115 ||
                      id === 124 ||
                      id === 127 ||
                      id === 130 ||
                      id === 134 ||
                      id === 135 ||
                      id === 159 ||
                      id === 162 ||
                      id === 165 ||
                      id === 167 ||
                      id === 170 ||
                      id === 182 ||
                      id === 188 ||
                      id === 191 ||
                      id === 196 ||
                      id === 198 ||
                      id === 197 ||
                      id === 200 ||
                      id === 202 ||
                      id === 205 ||
                      id === 209 ||
                      id === 211 ||
                      id === 214 ||
                      id === 216 ||
                      id === 219 ||
                      id === 220 ||
                      id === 223 ||
                      id === 225 ||
                      id === 228 ||
                      id === 231 ||
                      id === 236 ||
                      id === 246 ||
                      id === 247 ||
                      id === 252 ||
                      id === 254 ||
                      id === 255 ||
                      id === 257 ||
                      id === 262 ||
                      id === 263 ||
                      id === 268 ||
                      id === 278 ||
                      id === 279 ||
                      id === 287 ||
                      id === 292 ||
                      id === 293 ||
                      id === 295 ||
                      id === 300 ||
                      id === 310 ||
                      id === 311 ||
                      id === 319 ||
                      id === 324 ||
                      id === 341 ||
                      id === 342 ||
                      id === 343 ||
                      id === 351 ||
                      id === 353 ||
                      id === 359 ||
                      id === 364 ||
                      id === 372 ||
                      id === 376 ||
                      id === 382 ||
                      id === 383 ||
                      id === 384 ||
                      id === 385 ||
                      id === 388 ||
                      id === 391 ||
                      id === 396 ||
                      id === 406 ||
                      id === 415 ||
                      id === 416 ||
                      id === 417 ||
                      id === 419 ||
                      id === 420 ||
                      id === 423 ||
                      id === 431 ||
                      id === 438 ||
                      id === 446 ||
                      id === 447 ||
                      id === 451 ||
                      id === 452 ||
                      id === 460 ||
                      id === 462 ||
                      id === 463 ||
                      id === 469 ||
                      id === 474 ||
                      id === 477 ||
                      id === 479 ||
                      id === 483 ||
                      id === 486 ||
                      id === 493 ||
                      id === 495 ||
                      id === 500 ||
                      id === 505 ||
                      id === 506 ||
                      id === 511 ||
                      id === 515 ||
                      id === 514 ||
                      id === 518 ||
                      id === 520 ||
                      id === 524 ||
                      id === 525 ||
                      id === 527 ||
                      id === 532 ||
                      id === 536 ||
                      id === 537 ||
                      id === 542 ||
                      id === 543 ||
                      id === 556 ||
                      id === 558 ||
                      id === 564 ||
                      id === 569 ||
                      id === 575 ||
                      id === 578 ||
                      id === 589 ||
                      id === 591 ||
                      id === 596 ||
                      id === 600 ||
                      id === 601 ||
                      id === 606 ||
                      id === 607 ||
                      id === 610 ||
                      id === 612 ||
                      id === 621 ||
                      id === 623 ||
                      id === 626 ||
                      id === 635 ||
                      id === 637 ||
                      id === 639 ||
                      id === 641 ||
                      id === 642 ||
                      id === 644 ||
                      id === 652 ||
                      id === 654 ||
                      id === 655 ||
                      id === 658 ||
                      id === 665 ||
                      id === 667 ||
                      id === 670 ||
                      id === 671 ||
                      id === 673 ||
                      id === 675 ||
                      id === 676 ||
                      id === 697 ||
                      id === 699 ||
                      id === 702 ||
                      id === 703 ||
                      id === 706 ||
                      id === 708 ||
                      id === 716 ||
                      id === 719 ||
                      id === 722 ||
                      id === 729 ||
                      id === 734 ||
                      id === 735 ||
                      id === 738 ||
                      id === 743 ||
                      id === 747 ||
                      id === 750 ||
                      id === 755 ||
                      id === 760 ||
                      id === 763 ||
                      id === 767 ||
                      id === 769 ||
                      id === 770 ||
                      id === 775 ||
                      id === 778 ||
                      id === 780 ||
                      id === 782 ||
                      id === 786 ||
                      id === 787 ||
                      id === 791 ||
                      id === 793 ||
                      id === 795 ||
                      id === 799 ||
                      id === 802 ||
                      id === 807 ||
                      id === 811 ||
                      id === 812 ||
                      id === 813 ||
                      id === 815 ||
                      id === 818 ||
                      id === 819 ||
                      id === 822 ||
                      id === 825 ||
                      id === 827 ||
                      id === 831 ||
                      id === 839 ||
                      id === 843 ||
                      id === 844 ||
                      id === 845 ||
                      id === 851 ||
                      id === 853 ||
                      id === 857 ||
                      id === 863 ||
                      id === 865 ||
                      id === 897 ||
                      id === 929 ||
                      id === 961 ||
                      id === 876 ||
                      id === 882 ||
                      id === 883 ||
                      id === 915 ||
                      id === 947 ||
                      id === 885 ||
                      id === 887 ||
                      id === 919 ||
                      id === 888 ||
                      id === 893 ||
                      id === 895 ||
                      id === 927 ||
                      id === 959 ||
                      id === 991 ||
                      id === 1023 ||
                      id === 996 ||
                      id === 938 ||
                      id === 970 ||
                      id === 941 ||
                      id === 973 ||
                      id === 1005 ||
                      id === 978 ||
                      id === 921 ||
                      id === 953 ||
                      id === 952 ||
                      id === 984 ||
                      id === 925 ||
                      id === 1017)) &&
                `${
                  currentLevel.current === 1
                    ? "border-r-[5px]"
                    : currentLevel.current === 2
                    ? "border-r-[3px]"
                    : currentLevel.current >= 3 && "border-r-[1px]"
                }`
              } ${
                (currentLevel.current === 1
                  ? id === 3 ||
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
                    id === 63
                  : currentLevel.current === 2
                  ? id === 3 ||
                    id === 9 ||
                    id === 14 ||
                    id === 15 ||
                    id === 18 ||
                    id === 20 ||
                    id === 21 ||
                    id === 22 ||
                    id === 23 ||
                    id === 24 ||
                    id === 25 ||
                    id === 33 ||
                    id === 38 ||
                    id === 47 ||
                    id === 48 ||
                    id === 55 ||
                    id === 56 ||
                    id === 61 ||
                    id === 62 ||
                    id === 66 ||
                    id === 67 ||
                    id === 68 ||
                    id === 70 ||
                    id === 76 ||
                    id === 77 ||
                    id === 78 ||
                    id === 80 ||
                    id === 85 ||
                    id === 87 ||
                    id === 88 ||
                    id === 91 ||
                    id === 98 ||
                    id === 100 ||
                    id === 101 ||
                    id === 104 ||
                    id === 105 ||
                    id === 106 ||
                    id === 107 ||
                    id === 108 ||
                    id === 109 ||
                    id === 115 ||
                    id === 116 ||
                    id === 117 ||
                    id === 118 ||
                    id === 119 ||
                    id === 120 ||
                    id === 129 ||
                    id === 130 ||
                    id === 133 ||
                    id === 134 ||
                    id === 135 ||
                    id === 136 ||
                    id === 137 ||
                    id === 141 ||
                    id === 146 ||
                    id === 147 ||
                    id === 148 ||
                    id === 151 ||
                    id === 155 ||
                    id === 156 ||
                    id === 158 ||
                    id === 159 ||
                    id === 161 ||
                    id === 164 ||
                    id === 165 ||
                    id === 166 ||
                    id === 170 ||
                    id === 179 ||
                    id === 182 ||
                    id === 183 ||
                    id === 185 ||
                    id === 186 ||
                    id === 187 ||
                    id === 188 ||
                    id === 189 ||
                    id === 192 ||
                    id === 193 ||
                    id === 194 ||
                    id === 197 ||
                    id === 200 ||
                    id === 203 ||
                    id === 204 ||
                    id === 205 ||
                    id === 206 ||
                    id === 211 ||
                    id === 213 ||
                    id === 217 ||
                    id === 218 ||
                    id === 219 ||
                    id === 220 ||
                    id === 222 ||
                    id === 223 ||
                    id === 225 ||
                    id === 226 ||
                    id === 230 ||
                    id === 231 ||
                    id === 232 ||
                    id === 233 ||
                    id === 237 ||
                    (id !== 248 && id >= 240 && id <= 255)
                  : (currentLevel.current >= 3 &&
                      id >= 1 &&
                      id <= 30 &&
                      id !== 4 &&
                      id !== 7 &&
                      id !== 9 &&
                      id !== 10 &&
                      id !== 11 &&
                      id !== 12 &&
                      id !== 13 &&
                      id !== 17 &&
                      id !== 20 &&
                      id !== 22 &&
                      id !== 23 &&
                      id !== 26 &&
                      id !== 29) ||
                    id === 34 ||
                    id === 35 ||
                    id === 36 ||
                    id === 37 ||
                    id === 39 ||
                    id === 41 ||
                    id === 42 ||
                    id === 43 ||
                    id === 45 ||
                    id === 47 ||
                    id === 48 ||
                    id === 49 ||
                    id === 56 ||
                    id === 57 ||
                    id === 58 ||
                    id === 63 ||
                    id === 65 ||
                    id === 66 ||
                    id === 69 ||
                    id === 72 ||
                    id === 73 ||
                    id === 74 ||
                    id === 76 ||
                    id === 78 ||
                    id === 82 ||
                    id === 83 ||
                    id === 84 ||
                    id === 86 ||
                    id === 87 ||
                    id === 88 ||
                    id === 89 ||
                    id === 94 ||
                    id === 96 ||
                    id === 97 ||
                    id === 102 ||
                    id === 105 ||
                    id === 107 ||
                    id === 109 ||
                    id === 111 ||
                    id === 113 ||
                    id === 117 ||
                    id === 118 ||
                    id === 120 ||
                    id === 122 ||
                    id === 127 ||
                    id === 130 ||
                    id === 132 ||
                    id === 133 ||
                    id === 137 ||
                    id === 138 ||
                    id === 141 ||
                    id === 142 ||
                    id === 146 ||
                    id === 147 ||
                    id === 148 ||
                    id === 150 ||
                    id === 151 ||
                    id === 153 ||
                    id === 155 ||
                    id === 156 ||
                    id === 157 ||
                    id === 161 ||
                    id === 163 ||
                    id === 164 ||
                    id === 168 ||
                    id === 169 ||
                    id === 173 ||
                    id === 177 ||
                    id === 181 ||
                    id === 184 ||
                    id === 186 ||
                    id === 187 ||
                    id === 190 ||
                    id === 193 ||
                    id === 195 ||
                    id === 196 ||
                    id === 199 ||
                    id === 200 ||
                    id === 202 ||
                    id === 207 ||
                    id === 208 ||
                    id === 210 ||
                    id === 211 ||
                    id === 212 ||
                    id === 213 ||
                    id === 214 ||
                    id === 218 ||
                    id === 219 ||
                    id === 229 ||
                    id === 230 ||
                    id === 233 ||
                    id === 235 ||
                    id === 236 ||
                    id === 237 ||
                    id === 240 ||
                    id === 241 ||
                    id === 242 ||
                    id === 243 ||
                    id === 244 ||
                    id === 245 ||
                    id === 246 ||
                    id === 248 ||
                    id === 249 ||
                    id === 251 ||
                    id === 252 ||
                    id === 254 ||
                    id === 255 ||
                    id === 256 ||
                    id === 257 ||
                    id === 258 ||
                    id === 259 ||
                    id === 260 ||
                    id === 266 ||
                    id === 267 ||
                    id === 269 ||
                    id === 270 ||
                    id === 272 ||
                    id === 273 ||
                    id === 274 ||
                    id === 275 ||
                    id === 276 ||
                    id === 277 ||
                    id === 281 ||
                    id === 285 ||
                    id === 286 ||
                    id === 289 ||
                    id === 290 ||
                    id === 291 ||
                    id === 293 ||
                    id === 294 ||
                    id === 295 ||
                    id === 298 ||
                    id === 303 ||
                    id === 304 ||
                    id === 305 ||
                    id === 308 ||
                    id === 309 ||
                    id === 313 ||
                    id === 314 ||
                    id === 318 ||
                    id === 321 ||
                    id === 324 ||
                    id === 326 ||
                    id === 327 ||
                    id === 328 ||
                    id === 329 ||
                    id === 330 ||
                    id === 331 ||
                    id === 332 ||
                    id === 333 ||
                    id === 336 ||
                    id === 337 ||
                    id === 339 ||
                    id === 340 ||
                    id === 342 ||
                    id === 344 ||
                    id === 349 ||
                    id === 352 ||
                    id === 355 ||
                    id === 356 ||
                    id === 357 ||
                    id === 358 ||
                    id === 361 ||
                    id === 362 ||
                    id === 363 ||
                    id === 366 ||
                    id === 367 ||
                    id === 368 ||
                    id === 370 ||
                    id === 373 ||
                    id === 374 ||
                    id === 375 ||
                    id === 376 ||
                    id === 379 ||
                    id === 380 ||
                    id === 381 ||
                    id === 382 ||
                    id === 386 ||
                    id === 387 ||
                    id === 391 ||
                    id === 396 ||
                    id === 397 ||
                    id === 398 ||
                    id === 399 ||
                    id === 401 ||
                    id === 404 ||
                    id === 405 ||
                    id === 408 ||
                    id === 409 ||
                    id === 410 ||
                    id === 414 ||
                    id === 415 ||
                    id === 418 ||
                    id === 422 ||
                    id === 423 ||
                    id === 427 ||
                    id === 428 ||
                    id === 430 ||
                    id === 434 ||
                    id === 435 ||
                    id === 436 ||
                    id === 437 ||
                    id === 438 ||
                    id === 441 ||
                    id === 442 ||
                    id === 443 ||
                    id === 444 ||
                    id === 445 ||
                    id === 449 ||
                    id === 450 ||
                    id === 451 ||
                    id === 453 ||
                    id === 454 ||
                    id === 455 ||
                    id === 456 ||
                    id === 457 ||
                    id === 458 ||
                    id === 460 ||
                    id === 461 ||
                    id === 462 ||
                    id === 471 ||
                    id === 472 ||
                    id === 473 ||
                    id === 475 ||
                    id === 478 ||
                    id === 480 ||
                    id === 482 ||
                    id === 485 ||
                    id === 488 ||
                    id === 491 ||
                    id === 495 ||
                    id === 497 ||
                    id === 501 ||
                    id === 504 ||
                    id === 508 ||
                    id === 509 ||
                    id === 510 ||
                    id === 513 ||
                    id === 516 ||
                    id === 518 ||
                    id === 520 ||
                    id === 522 ||
                    id === 523 ||
                    id === 526 ||
                    id === 528 ||
                    id === 529 ||
                    id === 530 ||
                    id === 534 ||
                    id === 536 ||
                    id === 538 ||
                    id === 539 ||
                    id === 543 ||
                    id === 546 ||
                    id === 547 ||
                    id === 548 ||
                    id === 549 ||
                    id === 551 ||
                    id === 553 ||
                    id === 554 ||
                    id === 555 ||
                    id === 556 ||
                    id === 557 ||
                    id === 558 ||
                    id === 562 ||
                    id === 567 ||
                    id === 571 ||
                    id === 572 ||
                    id === 574 ||
                    id === 577 ||
                    id === 580 ||
                    id === 582 ||
                    id === 586 ||
                    id === 587 ||
                    id === 588 ||
                    id === 591 ||
                    id === 592 ||
                    id === 593 ||
                    id === 594 ||
                    id === 595 ||
                    id === 597 ||
                    id === 600 ||
                    id === 601 ||
                    id === 603 ||
                    id === 605 ||
                    id === 606 ||
                    id === 609 ||
                    id === 613 ||
                    id === 614 ||
                    id === 615 ||
                    id === 616 ||
                    id === 617 ||
                    id === 620 ||
                    id === 621 ||
                    id === 622 ||
                    id === 628 ||
                    id === 633 ||
                    id === 635 ||
                    id === 636 ||
                    id === 637 ||
                    id === 640 ||
                    id === 642 ||
                    id === 643 ||
                    id === 647 ||
                    id === 648 ||
                    id === 649 ||
                    id === 654 ||
                    id === 657 ||
                    id === 659 ||
                    id === 661 ||
                    id === 663 ||
                    id === 664 ||
                    id === 665 ||
                    id === 666 ||
                    id === 669 ||
                    id === 670 ||
                    id === 673 ||
                    id === 678 ||
                    id === 679 ||
                    id === 680 ||
                    id === 682 ||
                    (id >= 684 && id <= 690) ||
                    id === 692 ||
                    id === 694 ||
                    id === 696 ||
                    id === 699 ||
                    id === 700 ||
                    id === 701 ||
                    id === 706 ||
                    id === 707 ||
                    id === 708 ||
                    id === 709 ||
                    id === 711 ||
                    id === 713 ||
                    id === 715 ||
                    id === 718 ||
                    id === 723 ||
                    id === 725 ||
                    id === 728 ||
                    id === 730 ||
                    id === 734 ||
                    id === 737 ||
                    id === 740 ||
                    id === 741 ||
                    id === 742 ||
                    id === 746 ||
                    (id >= 748 && id <= 752) ||
                    id === 754 ||
                    id === 757 ||
                    id === 758 ||
                    id === 759 ||
                    (id >= 761 && id <= 765) ||
                    id === 767 ||
                    id === 769 ||
                    id === 772 ||
                    id === 777 ||
                    id === 778 ||
                    id === 779 ||
                    id === 785 ||
                    id === 788 ||
                    id === 789 ||
                    id === 790 ||
                    id === 792 ||
                    id === 797 ||
                    id === 802 ||
                    id === 805 ||
                    id === 806 ||
                    id === 810 ||
                    id === 815 ||
                    id === 816 ||
                    id === 817 ||
                    id === 818 ||
                    id === 821 ||
                    id === 823 ||
                    id === 824 ||
                    id === 825 ||
                    id === 827 ||
                    id === 829 ||
                    id === 830 ||
                    id === 833 ||
                    id === 834 ||
                    id === 835 ||
                    id === 836 ||
                    id === 839 ||
                    id === 840 ||
                    id === 841 ||
                    id === 843 ||
                    id === 846 ||
                    id === 848 ||
                    id === 852 ||
                    id === 854 ||
                    id === 855 ||
                    id === 860 ||
                    id === 863 ||
                    id === 864 ||
                    id === 928 ||
                    id === 897 ||
                    id === 961 ||
                    id === 899 ||
                    id === 963 ||
                    id === 868 ||
                    id === 869 ||
                    id === 932 ||
                    id === 933 ||
                    id === 935 ||
                    id === 872 ||
                    id === 873 ||
                    id === 874 ||
                    id === 875 ||
                    id === 968 ||
                    id === 937 ||
                    id === 938 ||
                    id === 905 ||
                    id === 906 ||
                    id === 971 ||
                    id === 972 ||
                    id === 908 ||
                    id === 909 ||
                    id === 877 ||
                    id === 878 ||
                    id === 879 ||
                    id === 942 ||
                    id === 975 ||
                    id === 881 ||
                    id === 882 ||
                    id === 914 ||
                    id === 915 ||
                    id === 978 ||
                    id === 979 ||
                    id === 980 ||
                    id === 981 ||
                    id === 885 ||
                    id === 918 ||
                    id === 950 ||
                    id === 951 ||
                    id === 920 ||
                    id === 984 ||
                    id === 985 ||
                    id === 889 ||
                    id === 954 ||
                    id === 891 ||
                    id === 892 ||
                    id === 893 ||
                    id === 923 ||
                    id === 924 ||
                    id === 925 ||
                    id === 988 ||
                    id === 989 ||
                    id === 964 ||
                    id === 966 ||
                    id === 902 ||
                    (id !== 1008 && id >= 992 && id <= 1023)) &&
                `${
                  currentLevel.current === 1
                    ? "border-b-[5px]"
                    : currentLevel.current === 2
                    ? "border-b-[3px]"
                    : currentLevel.current >= 3 && "border-b-[1px]"
                }`
              } ${
                (currentLevel.current === 1
                  ? id === 0 ||
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
                    id === 61
                  : currentLevel.current === 2
                  ? id === 0 ||
                    id === 8 ||
                    id === 16 ||
                    id === 19 ||
                    id === 24 ||
                    id === 27 ||
                    id === 28 ||
                    id === 32 ||
                    id === 33 ||
                    id === 35 ||
                    id === 36 ||
                    id === 40 ||
                    id === 43 ||
                    id === 44 ||
                    id === 46 ||
                    id === 48 ||
                    id === 51 ||
                    id === 52 ||
                    id === 53 ||
                    id === 54 ||
                    id === 59 ||
                    id === 60 ||
                    id === 62 ||
                    id === 64 ||
                    id === 68 ||
                    id === 69 ||
                    id === 75 ||
                    id === 80 ||
                    id === 84 ||
                    id === 86 ||
                    id === 88 ||
                    id === 91 ||
                    id === 92 ||
                    id === 96 ||
                    id === 100 ||
                    id === 103 ||
                    id === 109 ||
                    id === 112 ||
                    id === 119 ||
                    id === 125 ||
                    id === 128 ||
                    id === 131 ||
                    id === 144 ||
                    id === 145 ||
                    id === 148 ||
                    id === 149 ||
                    id === 151 ||
                    id === 160 ||
                    id === 161 ||
                    id === 163 ||
                    id === 166 ||
                    id === 176 ||
                    id === 177 ||
                    id === 180 ||
                    id === 181 ||
                    id === 192 ||
                    id === 196 ||
                    id === 197 ||
                    id === 199 ||
                    id === 208 ||
                    id === 215 ||
                    id === 216 ||
                    id === 224 ||
                    id === 229 ||
                    id === 231 ||
                    id === 232 ||
                    id === 240 ||
                    id === 245 ||
                    id === 249
                  : currentLevel.current >= 3 &&
                    (id === 0 ||
                      id === 32 ||
                      id === 33 ||
                      id === 37 ||
                      id === 46 ||
                      id === 50 ||
                      id === 53 ||
                      id === 59 ||
                      id === 64 ||
                      id === 65 ||
                      id === 68 ||
                      id === 77 ||
                      id === 79 ||
                      id === 81 ||
                      id === 83 ||
                      id === 85 ||
                      id === 88 ||
                      id === 91 ||
                      id === 92 ||
                      id === 94 ||
                      id === 96 ||
                      id === 100 ||
                      id === 108 ||
                      id === 110 ||
                      id === 112 ||
                      id === 113 ||
                      id === 115 ||
                      id === 123 ||
                      id === 124 ||
                      id === 126 ||
                      id === 128 ||
                      id === 129 ||
                      id === 132 ||
                      id === 133 ||
                      id === 137 ||
                      id === 140 ||
                      id === 143 ||
                      id === 144 ||
                      id === 145 ||
                      id === 147 ||
                      id === 149 ||
                      id === 152 ||
                      id === 154 ||
                      id === 156 ||
                      id === 158 ||
                      id === 159 ||
                      id === 160 ||
                      id === 161 ||
                      id === 172 ||
                      id === 173 ||
                      id === 175 ||
                      id === 176 ||
                      id === 177 ||
                      id === 179 ||
                      id === 181 ||
                      id === 184 ||
                      id === 186 ||
                      id === 191 ||
                      id === 192 ||
                      id === 204 ||
                      id === 208 ||
                      id === 222 ||
                      id === 224 ||
                      id === 225 ||
                      id === 227 ||
                      id === 234 ||
                      id === 236 ||
                      id === 239 ||
                      id === 250 ||
                      id === 256 ||
                      id === 260 ||
                      id === 265 ||
                      id === 267 ||
                      id === 271 ||
                      id === 283 ||
                      id === 284 ||
                      id === 288 ||
                      id === 297 ||
                      id === 298 ||
                      id === 303 ||
                      id === 307 ||
                      id === 313 ||
                      id === 315 ||
                      id === 316 ||
                      id === 317 ||
                      id === 320 ||
                      id === 323 ||
                      id === 329 ||
                      id === 332 ||
                      id === 334 ||
                      id === 335 ||
                      id === 339 ||
                      id === 346 ||
                      id === 347 ||
                      id === 348 ||
                      id === 349 ||
                      id === 350 ||
                      id === 352 ||
                      id === 355 ||
                      id === 358 ||
                      id === 369 ||
                      id === 367 ||
                      id === 371 ||
                      id === 378 ||
                      id === 380 ||
                      id === 384 ||
                      id === 393 ||
                      id === 395 ||
                      id === 401 ||
                      id === 403 ||
                      id === 404 ||
                      id === 410 ||
                      id === 412 ||
                      id === 413 ||
                      id === 416 ||
                      id === 422 ||
                      id === 425 ||
                      id === 426 ||
                      id === 427 ||
                      id === 433 ||
                      id === 436 ||
                      id === 440 ||
                      id === 445 ||
                      id === 286 ||
                      id === 448 ||
                      id === 458 ||
                      id === 465 ||
                      id === 466 ||
                      id === 468 ||
                      id === 472 ||
                      id === 480 ||
                      id === 481 ||
                      id === 490 ||
                      id === 492 ||
                      id === 497 ||
                      id === 498 ||
                      id === 499 ||
                      id === 500 ||
                      id === 503 ||
                      id === 509 ||
                      id === 512 ||
                      id === 514 ||
                      id === 517 ||
                      id === 522 ||
                      id === 531 ||
                      id === 532 ||
                      id === 535 ||
                      id === 540 ||
                      id === 544 ||
                      id === 545 ||
                      id === 550 ||
                      id === 552 ||
                      id === 554 ||
                      id === 561 ||
                      id === 563 ||
                      id === 564 ||
                      id === 566 ||
                      id === 568 ||
                      id === 573 ||
                      id === 574 ||
                      id === 576 ||
                      id === 577 ||
                      id === 582 ||
                      id === 584 ||
                      id === 585 ||
                      id === 596 ||
                      id === 598 ||
                      id === 599 ||
                      id === 605 ||
                      id === 608 ||
                      id === 609 ||
                      id === 612 ||
                      id === 616 ||
                      id === 618 ||
                      id === 619 ||
                      id === 625 ||
                      id === 630 ||
                      id === 631 ||
                      id === 632 ||
                      id === 640 ||
                      id === 651 ||
                      id === 652 ||
                      id === 658 ||
                      id === 660 ||
                      id === 663 ||
                      id === 672 ||
                      id === 678 ||
                      id === 681 ||
                      id === 683 ||
                      id === 684 ||
                      id === 689 ||
                      id === 692 ||
                      id === 693 ||
                      id === 695 ||
                      id === 704 ||
                      id === 705 ||
                      id === 710 ||
                      id === 713 ||
                      id === 715 ||
                      id === 722 ||
                      id === 725 ||
                      id === 727 ||
                      id === 728 ||
                      id === 731 ||
                      id === 733 ||
                      id === 736 ||
                      id === 737 ||
                      id === 743 ||
                      id === 745 ||
                      id === 753 ||
                      id === 754 ||
                      id === 757 ||
                      id === 759 ||
                      id === 766 ||
                      id === 768 ||
                      id === 772 ||
                      id === 775 ||
                      id === 777 ||
                      id === 785 ||
                      id === 798 ||
                      id === 799 ||
                      id === 800 ||
                      id === 801 ||
                      id === 804 ||
                      id === 806 ||
                      id === 809 ||
                      id === 827 ||
                      id === 831 ||
                      id === 832 ||
                      id === 833 ||
                      id === 836 ||
                      id === 837 ||
                      id === 842 ||
                      id === 847 ||
                      id === 850 ||
                      id === 859 ||
                      id === 861 ||
                      id === 864 ||
                      id === 896 ||
                      id === 928 ||
                      id === 960 ||
                      id === 992 ||
                      id === 931 ||
                      id === 963 ||
                      id === 899 ||
                      id === 901 ||
                      id === 933 ||
                      id === 870 ||
                      id === 934 ||
                      id === 966 ||
                      id === 871 ||
                      id === 903 ||
                      id === 904 ||
                      id === 936 ||
                      id === 968 ||
                      id === 969 ||
                      id === 1002 ||
                      id === 875 ||
                      id === 940 ||
                      id === 973 ||
                      id === 880 ||
                      id === 882 ||
                      id === 913 ||
                      id === 945 ||
                      id === 977 ||
                      id === 1009 ||
                      id === 911 ||
                      id === 946 ||
                      id === 917 ||
                      id === 949 ||
                      id === 981 ||
                      id === 919 ||
                      id === 951 ||
                      id === 983 ||
                      id === 1015 ||
                      id === 955 ||
                      id === 987 ||
                      id === 988 ||
                      id === 957 ||
                      id === 990 ||
                      id === 1022 ||
                      id === 895 ||
                      id === 927 ||
                      id === 959 ||
                      id === 991 ||
                      id === 891 ||
                      id === 912 ||
                      id === 944 ||
                      id === 976 ||
                      id === 1008)) &&
                `${
                  currentLevel.current === 1
                    ? "border-l-[5px]"
                    : currentLevel.current === 2
                    ? "border-l-[3px]"
                    : currentLevel.current >= 3 && "border-l-[1px]"
                }`
              }`}
            >
              <div className={`w-full h-full`}>
                {mazeFoot === id && (
                  <MazeImage value="Hero" currentLevel={currentLevel} />
                )}

                {((currentLevel.current === 1 && id === 60) ||
                  (currentLevel.current === 2 && id === 248) ||
                  (currentLevel.current === 3 && id === 1008) ||
                  (currentLevel.current === 4 && id === 15)) && (
                  <MazeImage value="Home" currentLevel={currentLevel} />
                )}
                {maze}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        tabIndex={-1}
        className={
          "flex place-content-evenly place-items-center mt-[5px] mb-[20px] 4xs:w-[280px] 3xs:w-[280px] 2xs:w-[380px] xs:w-[480px] sm:w-[480px] md:w-[480px] lg:w-[580px] xl:hidden 2xl:hidden"
        }
      >
        {moveMaze.map((move, id) => (
          <ButtonMove
            key={id}
            tabIndex={-1}
            value={move}
            mazeMove={mazeMove}
            mazeFoot={mazeFoot}
            setMazeFoot={setMazeFoot}
            currentLevel={currentLevel}
          />
        ))}
      </div>
    </Container>
  );
}

const MazeImage = (props) => {
  return (
    <img
      src={props.value === "Home" ? Home : props.value === "Hero" && Hero}
      alt={props.value}
      className={`${
        props.currentLevel.current === 1
          ? "4xs:w-[35px] 4xs:h-[35px] 3xs:w-[35px] 3xs:h-[35px] 2xs:w-[47.5px] 2xs:h-[47.5px] xs:w-[60px] xs:h-[60px] sm:w-[72.5px] sm:h-[72.5px] md:w-[72.5px] md:h-[72.5px] lg:w-[72.5px] lg:h-[72.5px] xl:w-[72.5px] xl:h-[72.5px] 2xl:w-[72.5px] 2xl:h-[72.5px]"
          : props.currentLevel.current === 2
          ? "4xs:w-[17.5px] 4xs:h-[17.5px] 3xs:w-[17.5px] 3xs:h-[17.5px] 2xs:w-[23.75px] 2xs:h-[23.75px] xs:w-[30px] xs:h-[30px] sm:w-[36.25px] sm:h-[36.25px] md:w-[36.25px] md:h-[36.25px] lg:w-[36.25px] lg:h-[36.25px] xl:w-[36.25px] xl:h-[36.25px] 2xl:w-[36.25px] 2xl:h-[36.25px] scale-125"
          : props.currentLevel.current >= 3 &&
            "4xs:w-[8.75px] 4xs:h-[8.75px] 3xs:w-[8.75px] 3xs:h-[8.75px] 2xs:w-[11.875px] 2xs:h-[11.875px] xs:w-[15px] xs:h-[15px] sm:w-[18.125px] sm:h-[18.125px] md:w-[18.125px] md:h-[18.125px] lg:w-[18.125px] lg:h-[18.125px] xl:w-[18.125px] xl:h-[18.125px] 2xl:w-[18.125px] 2xl:h-[18.125px] scale-[2]"
      } absolute ${props.value === "Hero" && "z-10"}`}
    />
  );
};
