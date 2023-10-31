import Page404 from "./pages/Page404";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useLocalStorage from "./hooks/useLocalStorage";
import MainPage from "./pages/MainPage";

function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path = "/" element = {<MainPage/>} />
          <Route path = "*" element = {<Page404 />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
