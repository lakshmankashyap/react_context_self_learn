import React from "react";

//Data that we will pass it
export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    color: "#000000"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    color: "#ffffff"
  }
};

//Create context by the createContext method.
export const myContext = React.createContext({
  theme: "",
  setTheme: () => {}
});

export const userContext = React.createContext({
  name: ""
});