import { Link } from "react-router-dom";

import LanguageContext from "../../context/LanguageContext";
import menuTranslations from "../../translations/menuTranslations";

import "./index.css";

const Menu = () => (
  <LanguageContext.Consumer>
    {(value) => {
      const { activeLanguage } = value;

      const language = menuTranslations[activeLanguage];

      return (
        <ul className="menu-icons">
          <li>
            <Link to="/" className="each-icon">
              {language.home}
            </Link>
          </li>
          <li>
            <Link to="/movies" className="each-icon">
              {language.movies}
            </Link>
          </li>
          <li>
            <Link to="/tvshows" className="each-icon">
              {language.tvShows}
            </Link>
          </li>
          <li>
            <Link to="/sports" className="each-icon">
              {language.sports}
            </Link>
          </li>
          <li>
            <Link to="/live" className="each-icon">
              {language.live}
            </Link>
          </li>
        </ul>
      );
    }}
  </LanguageContext.Consumer>
);

export default Menu;
