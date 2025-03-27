import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import App from "./App";

const Root = () => {
  return (
    <Provider store={store}> {/* Redux Provider must wrap the entire app */}
      <ThemeProvider theme={darkTheme}> {/* Change theme dynamically later */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
