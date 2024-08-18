import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createGlobalStyle } from "styled-components";

import App from "./App.jsx";

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Poppins", sans-serif;
  }
`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
