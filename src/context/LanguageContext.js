import React from "react";

const LanguageContext = React.createContext({
  activeLanguage: "en",
  changeLanguage: () => {},
});

export default LanguageContext;
