import React, {FC, ReactElement} from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import darkTheme from "./theme/darkTheme";
import Dashboard from "./pages/dashboard/dashboard";
import ComposeContext from "./context/Compose.context";
import { rootContext } from "./context/root.context";

// TanStack:
const queryClient = new QueryClient(); 

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ComposeContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default App;
