import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpaceGame from './pages/SpaceGame';
import OceanGame from './pages/OceanGame';
import StartPage from './pages/StartPage';
import Assistant from './components/Assistant';
import styled from 'styled-components';

//'front page' of the site that should route to other environments
const App = () => {
  const start = <StartPage />;
  const home = <Home />;
  const spaceGame = <SpaceGame />;
  const oceanGame = <OceanGame />;

  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={start} />
          <Route path={'/home'} element={home} />
          <Route path={'space'} element={spaceGame} />
          <Route path={'ocean'} element={oceanGame} />
        </Routes>
      </BrowserRouter>
      <Assistant />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  position: relative;
`;
