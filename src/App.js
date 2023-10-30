import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/"/>
        <Route path = "*" element = {<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
