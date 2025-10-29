import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components";
import { App } from "@/App";
import { Provider } from "react-redux";
import { store } from "@/store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="ui_theme">
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StrictMode>
          <App />
        </StrictMode>
      </QueryClientProvider>
    </Provider>
  </ThemeProvider>,
);
