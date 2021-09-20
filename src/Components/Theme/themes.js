import { createMuiTheme } from "@material-ui/core/styles";

import { DARK, LIGHT,ORANGE,LIGHTBLUE,DEEPPURPLE,DEEPORANGE } from "../../Constants/colors";

const darkTheme = createMuiTheme({
  palette: {
    type: DARK,
    primary: {
      main: ORANGE,
    },
    secondary: {
      main:DEEPORANGE,
    },
  },
});
const lightTheme = createMuiTheme({
  palette: {
    type: LIGHT,
    primary: {
      main: LIGHTBLUE,
    },
    secondary: {
      main:DEEPPURPLE,
    },
  },
});

export { darkTheme, lightTheme };
