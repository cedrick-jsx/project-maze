import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faBook,
  faCircleInfo,
  faPlay,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const App = () => {
  const [show, isShow] = useState(false);

  return (
    <section className="flex flex-col place-content-center place-items-center">
      {!show && (
        <>
          <h1 className="header-h1">Project</h1>
          <h1 className="header-h1">Maze</h1>
          <button className="button-start">
            <div className="button-children">
              <FontAwesomeIcon icon={faPlay} />
              <p className="p-start">Start</p>
            </div>
          </button>
          <button className="button-start">
            <div className="button-children">
              <FontAwesomeIcon icon={faBook} />
              <p className="p-start">How</p>
            </div>
          </button>
          <button className="button-start" onClick={() => isShow(!show)}>
            <div className="button-children">
              <FontAwesomeIcon icon={faCircleInfo} />
              <p className="p-start">About</p>
            </div>
          </button>
        </>
      )}

      {show && (
        <>
          <h1 className="header-h1">About Us</h1>

          <div className="flex place-content-evenly place-items-center outline outline-4 outline-fuchsia-800 my-4 bg-slate-50">
            <div className="w-[calc(80px+80px)] h-[calc(80px+80px)] bg-slate-50 shadow-2xl drop-shadow-2xl"></div>
            <div className="bio-text">
              I AM CEDRICK CORTEZ, PROGRAMMER/DEVELOPER. AS AN ASPIRING SOFTWARE
              DEVELOPER, CODING THIS MAZE FROM THE SCRATCH HELPS ME GAIN
              EXPERIENCE IN REACT.JS. THIS HELPS ME ALOT IN TERMS OF DESIGN,
              LOGIC, CRITICAL THINKING, ETC.
            </div>
          </div>

          <div className="flex place-content-evenly place-items-center outline outline-4 outline-fuchsia-800 my-4 bg-slate-50">
            <div className="w-[calc(80px+80px)] h-[calc(80px+80px)] bg-slate-50 shadow-2xl drop-shadow-2xl order-2"></div>
            <div className="bio-text">
              I am Marko Paulo Clamaña. Life can be likened to a maze game, with
              twists and turns representing challenges, and every decision
              leading to new paths. Navigating it requires patience,
              adaptability, and the willingness to explore unknown corridors.
            </div>
          </div>

          <div className="flex place-content-evenly place-items-center outline outline-4 outline-fuchsia-800 my-4 bg-slate-50">
            <div className="w-[calc(80px+80px)] h-[calc(80px+80px)] bg-slate-50 shadow-2xl drop-shadow-2xl"></div>
            <div className="bio-text">
              I am Aubrey Mae Villareal. I learned that the maze game relates to
              our lives; it represents a beautiful metaphor for the many twists
              and turns of our lives and is a symbol of hope and opportunity.
            </div>
          </div>

          <div className="flex place-content-evenly place-items-center outline outline-4 outline-fuchsia-800 my-4 bg-slate-50">
            <div className="w-[calc(80px+80px)] h-[calc(80px+80px)] bg-slate-50 shadow-2xl drop-shadow-2xl order-2"></div>
            <div className="bio-text">
              I am Rizzalyn L. Mance, maze game has been a significant part of
              my existence, serving as an essential element in problem-solving
              scenarios. Its intricate paths and challenges often parallel the
              complexities of human interactions, teaching me the importance of
              strategy and persistence.
            </div>
          </div>

          <div className="flex place-content-evenly place-items-center outline outline-4 outline-fuchsia-800 my-4 bg-slate-50">
            <div className="w-[calc(80px+80px)] h-[calc(80px+80px)] bg-slate-50 shadow-2xl drop-shadow-2xl"></div>
            <div className="bio-text">
              I am Mary Kierine Go I learned that this maze teaches us not only
              to find the exit but to be mindful and smart about how we are
              creating our paths throughout the journey.
            </div>
          </div>

          <button className="button-start" onClick={() => isShow(!show)}>
            <div className="button-children">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <p className="p-start">Back</p>
            </div>
          </button>
        </>
      )}
    </section>
  );
};

export default App;
