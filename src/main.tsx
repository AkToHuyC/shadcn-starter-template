import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import { ActiveThemeProvider } from "@/components/theme/active-theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ActiveThemeProvider>
        <App />
      </ActiveThemeProvider>
    </ThemeProvider>
  </StrictMode>,
);
