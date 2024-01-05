export const handleNavigatePage = (props) => {
  if (
    props.value === "start" ||
    props.value === "level" ||
    props.value === "next" ||
    props.value === "end"
  ) {
    if (!localStorage.mazeCurrentLevel)
      localStorage.setItem("mazeCurrentLevel", 0);
    else if (props.value === "next" || props.value === "end") {
      if (
        (parseInt(localStorage.maze1) === 60 &&
          parseInt(localStorage.mazeCurrentLevel) === 0) ||
        (parseInt(localStorage.maze2) === 248 &&
          parseInt(localStorage.mazeCurrentLevel) === 1) ||
        (parseInt(localStorage.maze3) === 1008 &&
          parseInt(localStorage.mazeCurrentLevel) === 2) ||
        (parseInt(localStorage.maze4) === 15 &&
          parseInt(localStorage.mazeCurrentLevel) === 3)
      ) {
        localStorage.setItem(
          "mazeCurrentLevel",
          parseInt(localStorage.mazeCurrentLevel) + 1
        );
      }
      if (parseInt(localStorage.maze1) === 60) localStorage.removeItem("maze1");
      else if (parseInt(localStorage.maze2) === 248)
        localStorage.removeItem("maze2");
      else if (parseInt(localStorage.maze3) === 1008)
        localStorage.removeItem("maze3");
      else if (parseInt(localStorage.maze4) === 15)
        localStorage.removeItem("maze4");
    }
    if (props.value === "end") props.navigate("/About", { replace: true });
    else if (props.value === "next") {
      console.log(localStorage.nextLevel);
      if (parseInt(localStorage.nextLevel) === 1)
        localStorage.setItem("mazeLevel", 2);
      else if (parseInt(localStorage.nextLevel) === 2)
        localStorage.setItem("mazeLevel", 3);
      else if (parseInt(localStorage.nextLevel) === 3)
        localStorage.setItem("mazeLevel", 4);
      props.navigate(0);
    } else props.navigate("/Level", { replace: true });
  } else if (props.value === "guide")
    props.navigate("/Guide", { replace: true });
  else if (props.value === "about") props.navigate("/About", { replace: true });
  else if (props.value === "back") {
    if (localStorage.guidePlay) {
      localStorage.removeItem("guidePlay");
      props.navigate("/Play", { replace: true });
    } else props.navigate("/", { replace: true });
  } else if (props.value === "play") {
    if (props.mazeLevel === 1) localStorage.setItem("mazeLevel", 1);
    else if (props.mazeLevel === 2) localStorage.setItem("mazeLevel", 2);
    else if (props.mazeLevel === 3) localStorage.setItem("mazeLevel", 3);
    else if (props.mazeLevel === 4) localStorage.setItem("mazeLevel", 4);
    props.navigate("/Play", { replace: true });
  }
};
