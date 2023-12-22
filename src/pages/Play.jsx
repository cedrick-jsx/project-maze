import Button, { ButtonMove, ButtonName } from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import Hero from "../assets/img/gif/gif.gif";
import { useRef, useState } from "react";
import onKeyDownFocus from "react-focus-onkeydown";

const moveMaze = ["left", "down", "right"];
const mazeArray1 = Array(64).fill(null);
const mazeArray2 = Array(256).fill(null);
const mazeArray3 = Array(1024).fill(null);

export default function Play() {
  const currentLevel = useRef(parseInt(localStorage.getItem("mazeLevel")));

  const mazeFocus = useRef(null);
  onKeyDownFocus(mazeFocus, true);

  const [mazeFoot, setMazeFoot] = useState(() => {
    if (currentLevel.current === 1) return 3;
    else if (currentLevel.current === 2) return 7;
    else if (currentLevel.current >= 3) return 100;
  });

  return (
    <Container>
      <Header>Maze</Header>

      <div
        ref={mazeFocus}
        tabIndex={-1}
        onKeyDown={(e) => {
          if (
            (e.code === "KeyW" || e.code === "ArrowUp") &&
            (currentLevel.current === 1
              ? mazeFoot === 8 ||
                mazeFoot === 9 ||
                mazeFoot === 10 ||
                mazeFoot === 12 ||
                mazeFoot === 14 ||
                mazeFoot === 15 ||
                mazeFoot === 17 ||
                mazeFoot === 21 ||
                mazeFoot === 23 ||
                mazeFoot === 24 ||
                mazeFoot === 25 ||
                mazeFoot === 26 ||
                mazeFoot === 30 ||
                mazeFoot === 32 ||
                mazeFoot === 34 ||
                mazeFoot === 37 ||
                mazeFoot === 39 ||
                mazeFoot === 40 ||
                mazeFoot === 41 ||
                mazeFoot === 44 ||
                mazeFoot === 46 ||
                mazeFoot === 48 ||
                mazeFoot === 50 ||
                mazeFoot === 53 ||
                mazeFoot === 55 ||
                mazeFoot === 56 ||
                mazeFoot === 57 ||
                mazeFoot === 59 ||
                mazeFoot === 62
              : currentLevel.current === 2
              ? mazeFoot === 16 ||
                mazeFoot === 18 ||
                mazeFoot === 20 ||
                mazeFoot === 21 ||
                mazeFoot === 22 ||
                mazeFoot === 23 ||
                mazeFoot === 24 ||
                mazeFoot === 26 ||
                mazeFoot === 28 ||
                mazeFoot === 29 ||
                mazeFoot === 32 ||
                mazeFoot === 33 ||
                mazeFoot === 35 ||
                mazeFoot === 42 ||
                mazeFoot === 43 ||
                mazeFoot === 44 ||
                mazeFoot === 45 ||
                mazeFoot === 46 ||
                mazeFoot === 47 ||
                mazeFoot === 48 ||
                mazeFoot === 50 ||
                mazeFoot === 51 ||
                mazeFoot === 52 ||
                mazeFoot === 53 ||
                mazeFoot === 55 ||
                mazeFoot === 56 ||
                mazeFoot === 59 ||
                mazeFoot === 60 ||
                mazeFoot === 61 ||
                mazeFoot === 62 ||
                mazeFoot === 65 ||
                mazeFoot === 66 ||
                mazeFoot === 67 ||
                mazeFoot === 68 ||
                mazeFoot === 69 ||
                mazeFoot === 70 ||
                mazeFoot === 73 ||
                mazeFoot === 74 ||
                mazeFoot === 75 ||
                mazeFoot === 76 ||
                mazeFoot === 79 ||
                mazeFoot === 80 ||
                mazeFoot === 81 ||
                mazeFoot === 85 ||
                mazeFoot === 87 ||
                mazeFoot === 88 ||
                mazeFoot === 89 ||
                mazeFoot === 90 ||
                mazeFoot === 91 ||
                mazeFoot === 95 ||
                mazeFoot === 97 ||
                mazeFoot === 98 ||
                mazeFoot === 99 ||
                mazeFoot === 100 ||
                mazeFoot === 102 ||
                mazeFoot === 105 ||
                mazeFoot === 106 ||
                mazeFoot === 108 ||
                mazeFoot === 109 ||
                mazeFoot === 110 ||
                mazeFoot === 111 ||
                mazeFoot === 112 ||
                mazeFoot === 113 ||
                mazeFoot === 115 ||
                mazeFoot === 118 ||
                mazeFoot === 119 ||
                mazeFoot === 126 ||
                mazeFoot === 127 ||
                mazeFoot === 128 ||
                mazeFoot === 129 ||
                mazeFoot === 130 ||
                mazeFoot === 137 ||
                mazeFoot === 138 ||
                mazeFoot === 139 ||
                mazeFoot === 140 ||
                mazeFoot === 141 ||
                mazeFoot === 142 ||
                mazeFoot === 143 ||
                mazeFoot === 144 ||
                mazeFoot === 147 ||
                mazeFoot === 148 ||
                mazeFoot === 154 ||
                mazeFoot === 155 ||
                mazeFoot === 156 ||
                mazeFoot === 158 ||
                mazeFoot === 159 ||
                mazeFoot === 160 ||
                mazeFoot === 161 ||
                mazeFoot === 165 ||
                mazeFoot === 166 ||
                mazeFoot === 168 ||
                mazeFoot === 169 ||
                mazeFoot === 170 ||
                mazeFoot === 173 ||
                mazeFoot === 176 ||
                mazeFoot === 178 ||
                mazeFoot === 178 ||
                mazeFoot === 183 ||
                mazeFoot === 184 ||
                mazeFoot === 185 ||
                mazeFoot === 187 ||
                mazeFoot === 188 ||
                mazeFoot === 189 ||
                mazeFoot === 190 ||
                mazeFoot === 191 ||
                mazeFoot === 192 ||
                mazeFoot === 193 ||
                mazeFoot === 194 ||
                mazeFoot === 196 ||
                mazeFoot === 197 ||
                mazeFoot === 200 ||
                mazeFoot === 206 ||
                mazeFoot === 207 ||
                mazeFoot === 211 ||
                mazeFoot === 212 ||
                mazeFoot === 214 ||
                mazeFoot === 215 ||
                mazeFoot === 217 ||
                mazeFoot === 218 ||
                mazeFoot === 223 ||
                mazeFoot === 224 ||
                mazeFoot === 225 ||
                mazeFoot === 226 ||
                mazeFoot === 228 ||
                mazeFoot === 230 ||
                mazeFoot === 231 ||
                mazeFoot === 232 ||
                mazeFoot === 237 ||
                mazeFoot === 240 ||
                mazeFoot === 243 ||
                mazeFoot === 244 ||
                mazeFoot === 245 ||
                mazeFoot === 250 ||
                mazeFoot === 251 ||
                mazeFoot === 252 ||
                mazeFoot === 254 ||
                mazeFoot === 255
              : currentLevel.current >= 3 && "")
          )
            setMazeFoot(
              (move) =>
                move -
                (currentLevel.current === 1
                  ? 8
                  : currentLevel.current === 2
                  ? 16
                  : currentLevel.current >= 3 && 32)
            );
          else if (
            (e.code === "KeyD" || e.code === "ArrowRight") &&
            (currentLevel.current === 1
              ? mazeFoot === 1 ||
                mazeFoot === 2 ||
                mazeFoot === 4 ||
                mazeFoot === 6 ||
                mazeFoot === 8 ||
                mazeFoot === 10 ||
                mazeFoot === 11 ||
                mazeFoot === 13 ||
                mazeFoot === 16 ||
                mazeFoot === 18 ||
                mazeFoot === 19 ||
                mazeFoot === 20 ||
                mazeFoot === 22 ||
                mazeFoot === 27 ||
                mazeFoot === 28 ||
                mazeFoot === 30 ||
                mazeFoot === 33 ||
                mazeFoot === 34 ||
                mazeFoot === 35 ||
                mazeFoot === 36 ||
                mazeFoot === 38 ||
                mazeFoot === 40 ||
                mazeFoot === 41 ||
                mazeFoot === 43 ||
                mazeFoot === 45 ||
                mazeFoot === 46 ||
                mazeFoot === 49 ||
                mazeFoot === 51 ||
                mazeFoot === 52 ||
                mazeFoot === 54 ||
                mazeFoot === 57 ||
                mazeFoot === 59 ||
                mazeFoot === 61 ||
                mazeFoot === 62
              : currentLevel.current === 2
              ? mazeFoot === 0 ||
                mazeFoot === 2 ||
                mazeFoot === 3 ||
                mazeFoot === 5 ||
                mazeFoot === 8 ||
                mazeFoot === 10 ||
                mazeFoot === 11 ||
                mazeFoot === 13 ||
                mazeFoot === 14 ||
                mazeFoot === 16 ||
                mazeFoot === 19 ||
                mazeFoot === 20 ||
                mazeFoot === 22 ||
                mazeFoot === 24 ||
                mazeFoot === 25 ||
                mazeFoot === 29 ||
                mazeFoot === 30 ||
                mazeFoot === 33 ||
                mazeFoot === 36 ||
                mazeFoot === 37 ||
                mazeFoot === 38 ||
                mazeFoot === 40 ||
                mazeFoot === 41 ||
                mazeFoot === 48 ||
                mazeFoot === 55 ||
                mazeFoot === 57 ||
                mazeFoot === 60 ||
                mazeFoot === 62 ||
                mazeFoot === 66 ||
                mazeFoot === 69 ||
                mazeFoot === 71 ||
                mazeFoot === 75 ||
                mazeFoot === 76 ||
                mazeFoot === 77 ||
                mazeFoot === 80 ||
                mazeFoot === 82 ||
                mazeFoot === 84 ||
                mazeFoot === 86 ||
                mazeFoot === 92 ||
                mazeFoot === 93 ||
                mazeFoot === 100 ||
                mazeFoot === 101 ||
                mazeFoot === 103 ||
                mazeFoot === 104 ||
                mazeFoot === 106 ||
                mazeFoot === 107 ||
                mazeFoot === 114 ||
                mazeFoot === 115 ||
                mazeFoot === 116 ||
                mazeFoot === 117 ||
                mazeFoot === 119 ||
                mazeFoot === 120 ||
                mazeFoot === 122 ||
                mazeFoot === 125 ||
                mazeFoot === 128 ||
                mazeFoot === 129 ||
                mazeFoot === 131 ||
                mazeFoot === 132 ||
                mazeFoot === 133 ||
                mazeFoot === 134 ||
                mazeFoot === 135 ||
                mazeFoot === 136 ||
                mazeFoot === 140 ||
                mazeFoot === 145 ||
                mazeFoot === 146 ||
                mazeFoot === 149 ||
                mazeFoot === 151 ||
                mazeFoot === 156 ||
                mazeFoot === 158 ||
                mazeFoot === 161 ||
                mazeFoot === 163 ||
                mazeFoot === 164 ||
                mazeFoot === 166 ||
                mazeFoot === 168 ||
                mazeFoot === 170 ||
                mazeFoot === 171 ||
                mazeFoot === 174 ||
                mazeFoot === 178 ||
                mazeFoot === 181 ||
                mazeFoot === 182 ||
                mazeFoot === 185 ||
                mazeFoot === 186 ||
                mazeFoot === 188 ||
                mazeFoot === 192 ||
                mazeFoot === 194 ||
                mazeFoot === 197 ||
                mazeFoot === 199 ||
                mazeFoot === 200 ||
                mazeFoot === 202 ||
                mazeFoot === 203 ||
                mazeFoot === 204 ||
                mazeFoot === 205 ||
                mazeFoot === 208 ||
                mazeFoot === 211 ||
                mazeFoot === 212 ||
                mazeFoot === 216 ||
                mazeFoot === 218 ||
                mazeFoot === 219 ||
                mazeFoot === 221 ||
                mazeFoot === 222 ||
                mazeFoot === 225 ||
                mazeFoot === 226 ||
                mazeFoot === 229 ||
                mazeFoot === 232 ||
                mazeFoot === 233 ||
                mazeFoot === 234 ||
                mazeFoot === 235 ||
                mazeFoot === 237 ||
                mazeFoot === 240 ||
                mazeFoot === 241 ||
                mazeFoot === 243 ||
                mazeFoot === 245 ||
                mazeFoot === 246 ||
                mazeFoot === 247 ||
                mazeFoot === 249 ||
                mazeFoot === 252 ||
                mazeFoot === 253 ||
                mazeFoot === 254
              : currentLevel.current >= 3 && "")
          )
            setMazeFoot((move) => move + 1);
          else if (
            (e.code === "KeyS" || e.code === "ArrowDown") &&
            (currentLevel.current === 1
              ? mazeFoot === 0 ||
                mazeFoot === 1 ||
                mazeFoot === 2 ||
                mazeFoot === 4 ||
                mazeFoot === 6 ||
                mazeFoot === 7 ||
                mazeFoot === 9 ||
                mazeFoot === 13 ||
                mazeFoot === 15 ||
                mazeFoot === 16 ||
                mazeFoot === 17 ||
                mazeFoot === 18 ||
                mazeFoot === 22 ||
                mazeFoot === 24 ||
                mazeFoot === 26 ||
                mazeFoot === 29 ||
                mazeFoot === 31 ||
                mazeFoot === 32 ||
                mazeFoot === 33 ||
                mazeFoot === 36 ||
                mazeFoot === 38 ||
                mazeFoot === 40 ||
                mazeFoot === 42 ||
                mazeFoot === 45 ||
                mazeFoot === 47 ||
                mazeFoot === 48 ||
                mazeFoot === 49 ||
                mazeFoot === 51 ||
                mazeFoot === 54
              : currentLevel.current === 2
              ? mazeFoot + 16 === 16 ||
                mazeFoot + 16 === 18 ||
                mazeFoot + 16 === 20 ||
                mazeFoot + 16 === 21 ||
                mazeFoot + 16 === 22 ||
                mazeFoot + 16 === 23 ||
                mazeFoot + 16 === 24 ||
                mazeFoot + 16 === 26 ||
                mazeFoot + 16 === 28 ||
                mazeFoot + 16 === 29 ||
                mazeFoot + 16 === 32 ||
                mazeFoot + 16 === 33 ||
                mazeFoot + 16 === 35 ||
                mazeFoot + 16 === 42 ||
                mazeFoot + 16 === 43 ||
                mazeFoot + 16 === 44 ||
                mazeFoot + 16 === 45 ||
                mazeFoot + 16 === 46 ||
                mazeFoot + 16 === 47 ||
                mazeFoot + 16 === 48 ||
                mazeFoot + 16 === 50 ||
                mazeFoot + 16 === 51 ||
                mazeFoot + 16 === 52 ||
                mazeFoot + 16 === 53 ||
                mazeFoot + 16 === 55 ||
                mazeFoot + 16 === 56 ||
                mazeFoot + 16 === 59 ||
                mazeFoot + 16 === 60 ||
                mazeFoot + 16 === 61 ||
                mazeFoot + 16 === 62 ||
                mazeFoot + 16 === 65 ||
                mazeFoot + 16 === 66 ||
                mazeFoot + 16 === 67 ||
                mazeFoot + 16 === 68 ||
                mazeFoot + 16 === 69 ||
                mazeFoot + 16 === 70 ||
                mazeFoot + 16 === 73 ||
                mazeFoot + 16 === 74 ||
                mazeFoot + 16 === 75 ||
                mazeFoot + 16 === 76 ||
                mazeFoot + 16 === 79 ||
                mazeFoot + 16 === 80 ||
                mazeFoot + 16 === 81 ||
                mazeFoot + 16 === 85 ||
                mazeFoot + 16 === 87 ||
                mazeFoot + 16 === 88 ||
                mazeFoot + 16 === 89 ||
                mazeFoot + 16 === 90 ||
                mazeFoot + 16 === 91 ||
                mazeFoot + 16 === 95 ||
                mazeFoot + 16 === 97 ||
                mazeFoot + 16 === 98 ||
                mazeFoot + 16 === 99 ||
                mazeFoot + 16 === 100 ||
                mazeFoot + 16 === 102 ||
                mazeFoot + 16 === 105 ||
                mazeFoot + 16 === 106 ||
                mazeFoot + 16 === 108 ||
                mazeFoot + 16 === 109 ||
                mazeFoot + 16 === 110 ||
                mazeFoot + 16 === 111 ||
                mazeFoot + 16 === 112 ||
                mazeFoot + 16 === 113 ||
                mazeFoot + 16 === 115 ||
                mazeFoot + 16 === 118 ||
                mazeFoot + 16 === 119 ||
                mazeFoot + 16 === 126 ||
                mazeFoot + 16 === 127 ||
                mazeFoot + 16 === 128 ||
                mazeFoot + 16 === 129 ||
                mazeFoot + 16 === 130 ||
                mazeFoot + 16 === 137 ||
                mazeFoot + 16 === 138 ||
                mazeFoot + 16 === 139 ||
                mazeFoot + 16 === 140 ||
                mazeFoot + 16 === 141 ||
                mazeFoot + 16 === 142 ||
                mazeFoot + 16 === 143 ||
                mazeFoot + 16 === 144 ||
                mazeFoot + 16 === 147 ||
                mazeFoot + 16 === 148 ||
                mazeFoot + 16 === 154 ||
                mazeFoot + 16 === 155 ||
                mazeFoot + 16 === 156 ||
                mazeFoot + 16 === 158 ||
                mazeFoot + 16 === 159 ||
                mazeFoot + 16 === 160 ||
                mazeFoot + 16 === 161 ||
                mazeFoot + 16 === 165 ||
                mazeFoot + 16 === 166 ||
                mazeFoot + 16 === 168 ||
                mazeFoot + 16 === 169 ||
                mazeFoot + 16 === 170 ||
                mazeFoot + 16 === 173 ||
                mazeFoot + 16 === 176 ||
                mazeFoot + 16 === 178 ||
                mazeFoot + 16 === 178 ||
                mazeFoot + 16 === 183 ||
                mazeFoot + 16 === 184 ||
                mazeFoot + 16 === 185 ||
                mazeFoot + 16 === 187 ||
                mazeFoot + 16 === 188 ||
                mazeFoot + 16 === 189 ||
                mazeFoot + 16 === 190 ||
                mazeFoot + 16 === 191 ||
                mazeFoot + 16 === 192 ||
                mazeFoot + 16 === 193 ||
                mazeFoot + 16 === 194 ||
                mazeFoot + 16 === 196 ||
                mazeFoot + 16 === 197 ||
                mazeFoot + 16 === 200 ||
                mazeFoot + 16 === 206 ||
                mazeFoot + 16 === 207 ||
                mazeFoot + 16 === 211 ||
                mazeFoot + 16 === 212 ||
                mazeFoot + 16 === 214 ||
                mazeFoot + 16 === 215 ||
                mazeFoot + 16 === 217 ||
                mazeFoot + 16 === 218 ||
                mazeFoot + 16 === 223 ||
                mazeFoot + 16 === 224 ||
                mazeFoot + 16 === 225 ||
                mazeFoot + 16 === 226 ||
                mazeFoot + 16 === 228 ||
                mazeFoot + 16 === 230 ||
                mazeFoot + 16 === 231 ||
                mazeFoot + 16 === 232 ||
                mazeFoot + 16 === 237 ||
                mazeFoot + 16 === 240 ||
                mazeFoot + 16 === 243 ||
                mazeFoot + 16 === 244 ||
                mazeFoot + 16 === 245 ||
                mazeFoot + 16 === 250 ||
                mazeFoot + 16 === 251 ||
                mazeFoot + 16 === 252 ||
                mazeFoot + 16 === 254 ||
                mazeFoot + 16 === 255
              : currentLevel.current >= 3 && "")
          )
            setMazeFoot(
              (move) =>
                move +
                (currentLevel.current === 1
                  ? 8
                  : currentLevel.current === 2
                  ? 16
                  : currentLevel.current >= 3 && "")
            );
          else if (
            (e.code === "KeyA" || e.code === "ArrowLeft") &&
            (currentLevel.current === 1
              ? mazeFoot === 2 ||
                mazeFoot === 3 ||
                mazeFoot == 5 ||
                mazeFoot == 7 ||
                mazeFoot === 9 ||
                mazeFoot === 11 ||
                mazeFoot === 12 ||
                mazeFoot === 14 ||
                mazeFoot === 17 ||
                mazeFoot === 19 ||
                mazeFoot === 20 ||
                mazeFoot === 21 ||
                mazeFoot === 23 ||
                mazeFoot === 28 ||
                mazeFoot === 29 ||
                mazeFoot === 31 ||
                mazeFoot === 34 ||
                mazeFoot === 35 ||
                mazeFoot === 36 ||
                mazeFoot === 37 ||
                mazeFoot === 39 ||
                mazeFoot === 41 ||
                mazeFoot === 42 ||
                mazeFoot === 44 ||
                mazeFoot === 46 ||
                mazeFoot === 47 ||
                mazeFoot === 50 ||
                mazeFoot === 52 ||
                mazeFoot === 53 ||
                mazeFoot === 55 ||
                mazeFoot === 58 ||
                mazeFoot === 60 ||
                mazeFoot === 62 ||
                mazeFoot === 63
              : currentLevel.current === 2
              ? mazeFoot - 1 === 0 ||
                mazeFoot - 1 === 2 ||
                mazeFoot - 1 === 3 ||
                mazeFoot - 1 === 5 ||
                mazeFoot - 1 === 8 ||
                mazeFoot - 1 === 10 ||
                mazeFoot - 1 === 11 ||
                mazeFoot - 1 === 13 ||
                mazeFoot - 1 === 14 ||
                mazeFoot - 1 === 16 ||
                mazeFoot - 1 === 19 ||
                mazeFoot - 1 === 20 ||
                mazeFoot - 1 === 22 ||
                mazeFoot - 1 === 24 ||
                mazeFoot - 1 === 25 ||
                mazeFoot - 1 === 29 ||
                mazeFoot - 1 === 30 ||
                mazeFoot - 1 === 33 ||
                mazeFoot - 1 === 36 ||
                mazeFoot - 1 === 37 ||
                mazeFoot - 1 === 38 ||
                mazeFoot - 1 === 40 ||
                mazeFoot - 1 === 41 ||
                mazeFoot - 1 === 48 ||
                mazeFoot - 1 === 55 ||
                mazeFoot - 1 === 57 ||
                mazeFoot - 1 === 60 ||
                mazeFoot - 1 === 62 ||
                mazeFoot - 1 === 66 ||
                mazeFoot - 1 === 69 ||
                mazeFoot - 1 === 71 ||
                mazeFoot - 1 === 75 ||
                mazeFoot - 1 === 76 ||
                mazeFoot - 1 === 77 ||
                mazeFoot - 1 === 80 ||
                mazeFoot - 1 === 82 ||
                mazeFoot - 1 === 84 ||
                mazeFoot - 1 === 86 ||
                mazeFoot - 1 === 92 ||
                mazeFoot - 1 === 93 ||
                mazeFoot - 1 === 100 ||
                mazeFoot - 1 === 101 ||
                mazeFoot - 1 === 103 ||
                mazeFoot - 1 === 104 ||
                mazeFoot - 1 === 106 ||
                mazeFoot - 1 === 107 ||
                mazeFoot - 1 === 114 ||
                mazeFoot - 1 === 115 ||
                mazeFoot - 1 === 116 ||
                mazeFoot - 1 === 117 ||
                mazeFoot - 1 === 119 ||
                mazeFoot - 1 === 120 ||
                mazeFoot - 1 === 122 ||
                mazeFoot - 1 === 125 ||
                mazeFoot - 1 === 128 ||
                mazeFoot - 1 === 129 ||
                mazeFoot - 1 === 131 ||
                mazeFoot - 1 === 132 ||
                mazeFoot - 1 === 133 ||
                mazeFoot - 1 === 134 ||
                mazeFoot - 1 === 135 ||
                mazeFoot - 1 === 136 ||
                mazeFoot - 1 === 140 ||
                mazeFoot - 1 === 145 ||
                mazeFoot - 1 === 146 ||
                mazeFoot - 1 === 149 ||
                mazeFoot - 1 === 151 ||
                mazeFoot - 1 === 156 ||
                mazeFoot - 1 === 158 ||
                mazeFoot - 1 === 161 ||
                mazeFoot - 1 === 163 ||
                mazeFoot - 1 === 164 ||
                mazeFoot - 1 === 166 ||
                mazeFoot - 1 === 168 ||
                mazeFoot - 1 === 170 ||
                mazeFoot - 1 === 171 ||
                mazeFoot - 1 === 174 ||
                mazeFoot - 1 === 178 ||
                mazeFoot - 1 === 181 ||
                mazeFoot - 1 === 182 ||
                mazeFoot - 1 === 185 ||
                mazeFoot - 1 === 186 ||
                mazeFoot - 1 === 188 ||
                mazeFoot - 1 === 192 ||
                mazeFoot - 1 === 194 ||
                mazeFoot - 1 === 197 ||
                mazeFoot - 1 === 199 ||
                mazeFoot - 1 === 200 ||
                mazeFoot - 1 === 202 ||
                mazeFoot - 1 === 203 ||
                mazeFoot - 1 === 204 ||
                mazeFoot - 1 === 205 ||
                mazeFoot - 1 === 208 ||
                mazeFoot - 1 === 211 ||
                mazeFoot - 1 === 212 ||
                mazeFoot - 1 === 216 ||
                mazeFoot - 1 === 218 ||
                mazeFoot - 1 === 219 ||
                mazeFoot - 1 === 221 ||
                mazeFoot - 1 === 222 ||
                mazeFoot - 1 === 225 ||
                mazeFoot - 1 === 226 ||
                mazeFoot - 1 === 229 ||
                mazeFoot - 1 === 232 ||
                mazeFoot - 1 === 233 ||
                mazeFoot - 1 === 234 ||
                mazeFoot - 1 === 235 ||
                mazeFoot - 1 === 237 ||
                mazeFoot - 1 === 240 ||
                mazeFoot - 1 === 241 ||
                mazeFoot - 1 === 243 ||
                mazeFoot - 1 === 245 ||
                mazeFoot - 1 === 246 ||
                mazeFoot - 1 === 247 ||
                mazeFoot - 1 === 249 ||
                mazeFoot - 1 === 252 ||
                mazeFoot - 1 === 253 ||
                mazeFoot - 1 === 254
              : currentLevel.current >= 3 && "")
          )
            setMazeFoot((move) => move - 1);
        }}
        className={
          "flex flex-col place-content-center place-items-center w-full outline-none"
        }
      >
        <div className={"w-[360px] h-[360px] flex flex-wrap"}>
          {(currentLevel.current === 1
            ? mazeArray1
            : currentLevel.current === 2
            ? mazeArray2
            : currentLevel.current >= 3 && mazeArray3
          ).map((maze, id) => (
            <div
              tabIndex={-1}
              key={id}
              className={`text-transparent ${
                currentLevel.current === 1
                  ? "w-[45px] h-[45px]"
                  : currentLevel.current === 2
                  ? "w-[22.5px] h-[22.5px]"
                  : currentLevel.current === 3 && "w-[11.25] h-[11.25]"
              } bg-[#f1eaff] border-[purple] ${
                (currentLevel.current === 1
                  ? id === 0 ||
                    id === 1 ||
                    id === 2 ||
                    id === 4 ||
                    id === 5 ||
                    id === 6 ||
                    id === 7 ||
                    id === 13 ||
                    id === 22
                  : currentLevel.current === 2
                  ? (id !== 7 && id >= 0 && id <= 15) ||
                    id === 17 ||
                    id === 27 ||
                    id === 57 ||
                    id === 58
                  : currentLevel.current >= 3 && "") && "border-t-[5px]"
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
                  : currentLevel.current >= 3 && "") && "border-r-[5px]"
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
                  : currentLevel.current >= 3 && "") && "border-b-[5px]"
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
                  : currentLevel.current >= 3 && "") && "border-l-[5px]"
              }`}
            >
              <div className={`w-full h-full text-[9px] text-[black]`}>
                {mazeFoot === id && (
                  <img
                    src={Hero}
                    alt="Hero"
                    className={`${
                      currentLevel.current === 1
                        ? "w-[45px] h-[45px]"
                        : currentLevel.current === 2
                        ? "w-[22.5px] h-[22.5px]"
                        : currentLevel.current === 3 && "w-[11.25] h-[11.25]"
                    } absolute z-10`}
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
        <ButtonMove
          value="up"
          mazeFoot={mazeFoot}
          setMazeFoot={setMazeFoot}
          currentLevel={currentLevel.current}
        />
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
              currentLevel={currentLevel.current}
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
