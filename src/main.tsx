import { App } from "@/App";
import { ThemeProvider } from "@/components";
import { ThemedToastContainer } from "@/components/toast-container";
import "@/index.css";
import { store } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="ui_theme">
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StrictMode>
          <App />
          <ThemedToastContainer />
        </StrictMode>
      </QueryClientProvider>
    </Provider>
  </ThemeProvider>,
);
