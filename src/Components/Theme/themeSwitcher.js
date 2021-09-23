import React, { useState, useContext } from "react";

import { StoreContext } from "../../context/store/storeContext";

import Switch from "@material-ui/core/Switch";
import { DARK, LIGHT } from "../../Constants/colors";

const ThemeSwitcher = () => {
  const { state, actions } = useContext(StoreContext);

  const [darkMode, setDarkMode] = useState(
    state.generalStates.theme === DARK ? true : false
  );

  const handleThemeChange = (event) => {
    const currentTheme = event.target.checked ? DARK : LIGHT;
    actions.generalActions.storeTheme(currentTheme);
    window.localStorage.setItem('PersistedTheme', currentTheme)
    setDarkMode(!darkMode);
  };

  return (
    <Switch
      color="black"
      name="darkTheme"
      onChange={handleThemeChange}
      checked={darkMode}
    />
  );
};

export default ThemeSwitcher;
