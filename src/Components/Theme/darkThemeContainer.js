import React, { useContext } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme, lightTheme } from "./themes";

import { StoreContext } from "../../context/store/storeContext";

import { DARK } from "../../Constants/colors";

const DarkThemeContainer = ({ children }) => {
  const { state } = useContext(StoreContext);

  return (
    <ThemeProvider
      theme={state.generalStates.theme === DARK ? darkTheme : lightTheme}
    >
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeContainer;
