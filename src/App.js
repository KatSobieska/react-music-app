import Menu from "./components/views/Menu";
import Container from "./components/common/Container";
import ContainerPage from "./components/common/ContainerPage";
import FirstPage from "./components/pages/FirstPage";
import { Route, Routes } from "react-router";
import Home from "./components/features/Home";
import Videos from "./components/pages/Videos";
import "./styles/global.scss";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <Container>
      <Menu />
      <ContainerPage>
        <FirstPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
        <Footer />
      </ContainerPage>
    </Container>
  );
}

export default App;
