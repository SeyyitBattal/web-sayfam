import React, { createContext, useState } from "react";

export const websiteContext = createContext();

const WebSiteProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "en"
  );

  return (
    <websiteContext.Provider value={{ language, setLanguage }}>
      {children}
    </websiteContext.Provider>
  );
};

export default WebSiteProvider;
