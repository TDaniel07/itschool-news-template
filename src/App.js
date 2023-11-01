import Page404 from "./pages/Page404";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import SectionPage from "./pages/SectionPage";
import ArticlePage from "./pages/ArticlePage";

function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path = "/" element = {<MainPage/>} />
          <Route path = "*" element = {<Page404 />} />
          <Route path = "/category/:section" element = {<SectionPage />}/>
          <Route path = "/news/:article" element = {<ArticlePage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
