import LanguageContext from "../../context/LanguageContext";
import menuTranslations from "../../translations/menuTranslations";

import "./index.css";

const Live = () => (
  <LanguageContext.Consumer>
    {(value) => {
      const { activeLanguage } = value;
      const language = menuTranslations[activeLanguage];

      return (
        <div className="menu-item-page">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1696946920402-395088c320bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="home"
              className="menu-item-image"
            />
            <div className="shadow-overlay" />
          </div>
          <h2 className="menu-item-title">{language.live}</h2>
        </div>
      );
    }}
  </LanguageContext.Consumer>
);
export default Live;
