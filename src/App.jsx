import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Home from "./pages/Home";
import SpaceGame from "./pages/SpaceGame";
import OceanGame from "./pages/OceanGame";

//'front page' of the site that should route to other environments
const App = () => {
  const home = <Home />
  const spaceGame = <SpaceGame />
  const oceanGame = <OceanGame />


  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/*"} element={home} />
          <Route path={"/space"} element={spaceGame} />
          <Route path={"/ocean"} element={oceanGame} />
        </Routes>

          {/* append virtual assistant component here and apply an absolute position to it so it appears on all pages */}
      </BrowserRouter>
  )
}

export default App;