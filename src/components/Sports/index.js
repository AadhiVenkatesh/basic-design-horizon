import LanguageContext from "../../context/LanguageContext";
import menuTranslations from "../../translations/menuTranslations";

import "./index.css";

const Sports = () => (
  <LanguageContext.Consumer>
    {(value) => {
      const { activeLanguage } = value;
      const language = menuTranslations[activeLanguage];

      return (
        <div className="menu-item-page">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1585822754398-04873d4e1f50?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sports"
              className="menu-item-image"
            />
            <div className="shadow-overlay" />
          </div>
          <h2 className="menu-item-title">{language.sports}</h2>
        </div>
      );
    }}
  </LanguageContext.Consumer>
);
export default Sports;
