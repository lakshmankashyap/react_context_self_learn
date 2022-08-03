import { myContext, themes, userContext } from "./contexts/myContext";
import React, { useState, useMemo } from "react";

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const [userName, setUserName] = useState("kirill");
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <>
      <myContext.Provider value={value}>
        <userContext.Provider value={userName}>
          <Header />
          <div>
            <h1>Hello World!</h1>
          </div>
          <Footer />
        </userContext.Provider>
      </myContext.Provider>
    </>
  );
};

const Header = () => {
  const { theme, setTheme } = React.useContext(myContext);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <>
      <div
        style={{
          display: "inline-block",
          width: "100%",
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        <ul style={{ float: "left" }}>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <button onClick={toggleTheme}>Change Theme</button>
          </li>
        </ul>
        <UserMenu />
      </div>
    </>
  );
};

const Footer = () => {
  const { theme } = React.useContext(myContext);
  return (
    <div style={{ backgroundColor: theme.background, color: theme.color }}>
      <p>CopyRight @2022</p>
    </div>
  );
};

const UserMenu = () => {
  const { theme } = React.useContext(myContext);
  const { name } = React.useContext(userContext);
  return (
    <div style={{ float: "right" }}>
      <span>{name}</span>
      <ul
        style={{
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        <li>Profile</li>
        <li>Settings</li>
        <li>Log out</li>
      </ul>
    </div>
  );
};

export default App;
