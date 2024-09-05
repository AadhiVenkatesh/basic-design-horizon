import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Settings from "./components/Settings";

import Home from "./components/Home";
import Live from "./components/Live";
import Movies from "./components/Movies";
import Sports from "./components/Sports";
import TVShows from "./components/TVShows";
import NotFound from "./components/NotFound";

import LanguageContext from "./context/LanguageContext";

import "./App.css";

class App extends Component {
  state = { activeLanguage: "en" };

  changeLanguage = (activeLanguage) => {
    this.setState({ activeLanguage });
  };

  render() {
    const { activeLanguage } = this.state;
    return (
      <LanguageContext.Provider
        value={{ activeLanguage, changeLanguage: this.changeLanguage }}
      >
        <>
          <BrowserRouter>
            <nav className="background-nav">
              <Menu />
              <Settings />
            </nav>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/live" element={<Live />} />
              <Route exact path="/movies" element={<Movies />} />
              <Route exact path="/sports" element={<Sports />} />
              <Route exact path="/tvshows" element={<TVShows />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </>
      </LanguageContext.Provider>
    );
  }
}

export default App;
