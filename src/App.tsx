import React, {FC, ReactElement} from "react"
import { ThemeProvider, CssBaseline } from '@mui/material'
import darkTheme from './theme/darkTheme'
import Dashboard from "./pages/dashboard/dashboard"

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  )
}
export default App