import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faBook,
  faCircleInfo,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <section className="flex flex-col place-content-center place-items-center">
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
      <button className="button-start">
        <div className="button-children">
          <FontAwesomeIcon icon={faCircleInfo} />
          <p className="p-start">About</p>
        </div>
      </button>
    </section>
  );
};

export default App;
