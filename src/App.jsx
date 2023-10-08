import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpaceGame from './pages/SpaceGame';
import OceanGame from './pages/OceanGame';
import StartPage from './pages/StartPage';

//'front page' of the site that should route to other environments
const App = () => {
  const start = <StartPage />
  const home = <Home />;
  const spaceGame = <SpaceGame />;
  const oceanGame = <OceanGame />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={start} />
        <Route path={'/home'} element={home} />
        <Route path={'space'} element={spaceGame} />
        <Route path={'ocean'} element={oceanGame} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
