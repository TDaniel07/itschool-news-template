import Page404 from "./pages/Page404";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import SectionPage from "./pages/SectionPage";
import ArticlePage from "./pages/ArticlePage";
import {favoritesContext} from "./favorites/context";
import favoritesReducer from "./favorites/reducer";
import { useEffect, useReducer } from "react";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  if(window.localStorage.getItem("favoritesList") === null)
      window.localStorage.setItem("favoritesList", JSON.stringify([]));

  const [favoritesList, favoritesDispatch] = useReducer(favoritesReducer, JSON.parse(window.localStorage.getItem("favoritesList")));

  return (
    <div className="App">
      <favoritesContext.Provider value = {[favoritesList, favoritesDispatch]}>
        <Header />
        <Routes>
          <Route path = "/" element = {<MainPage/>} />
          <Route path = "*" element = {<Page404 />} />
          <Route path = "/category/:section" element = {<SectionPage />}/>
          <Route path = "/news/:article" element = {<ArticlePage />} />
          <Route path = "/favorites" element = {<FavoritesPage />} />
        </Routes>
        <Footer />
      </favoritesContext.Provider>
    </div>
  );
}

export default App;
