import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import GlobalStyles from "./styles/global";

import { Dashboard } from "./pages/Dashboard";
import { Products } from "./pages/Products";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Products />
    </ThemeProvider>
  </StrictMode>,
);
