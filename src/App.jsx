import { Container, CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";

export default function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      
    },
    typography: {
      
    }
  })

  const [darkMode, setDarkMode] = useState(false)


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container component={'main'} sx={{width: '80%'}}>
        <Header/>
        <Profile/>
      </Container>
    </ThemeProvider>
    
  )
}
