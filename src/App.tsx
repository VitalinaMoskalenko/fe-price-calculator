import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import { theme } from "./config/styles/theme";
import { Home } from "./pages/Home";
import "./config/translations/i18n";
import "../src/config/styles/style.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
