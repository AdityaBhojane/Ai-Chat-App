import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ContextProvider from "./Context/GeminiContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <App />
        </NextThemesProvider>
      </NextUIProvider>
    </ContextProvider>
  </StrictMode>
);
