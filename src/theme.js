import {createTheme} from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2",
      },
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
      },
    },
  });
  
  export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#00ff99",
      },
      background: {
        default: "#000000",
        paper: "#121212",
      },
      text: {
        primary: "#ffffff",
      },
    },
  });