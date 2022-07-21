import Menu from "./components/views/Menu";
import Container from "./components/common/Container";
import ContainerPage from "./components/common/ContainerPage";
import FirstPage from "./components/pages/FirstPage";
import { Route, Routes } from "react-router";
import Home from "./components/features/Home";
import Videos from "./components/pages/Videos";
import Favourite from "./components/pages/Favourite";

function App() {
  return (
    <Container>
      <Menu />
      <ContainerPage>
        <FirstPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </ContainerPage>
    </Container>
  );
}

export default App;
