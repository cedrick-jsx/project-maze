import "./App.css";
import Start from "./pages/Start";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Level from "./pages/Level";
import Play from "./pages/Play";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/About" element={<About />} />
      <Route path="/Level" element={<Level />} />
      <Route path="/Play" element={<Play />} />
    </Routes>
  );
}
