import "./index.css";
import LanguageContext from "../../context/LanguageContext";

const Settings = () => (
  <LanguageContext.Consumer>
    {(value) => {
      const { changeLanguage, activeLanguage } = value;

      const onChangeLanguage = (event) => {
        changeLanguage(event.target.value);
      };

      return (
        <select
          onChange={onChangeLanguage}
          value={activeLanguage}
          className="language-dropdown"
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="ru">Russia</option>
          <option value="es">Spanish</option>
          <option value="zh">Chinese</option>
        </select>
      );
    }}
  </LanguageContext.Consumer>
);

export default Settings;
