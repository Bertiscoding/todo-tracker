import React, { FC, ReactElement } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from './theme/darkTheme'

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>To-Do Tracker</div>
    </ThemeProvider>
  )
}

export default App;
