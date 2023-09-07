import { Container, CssBaseline, Divider, ThemeProvider, Typography, createTheme, makeStyles } from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";

export default function App() {

  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({
    palette: {
      background: {
        default: darkMode ? "#0A131F" : '#f4f3ee',
      },
      mode: darkMode == false ? 'light' : 'dark'
    },
    typography: {
      fontFamily: 'Comfortaa'
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container component={'main'} sx={{width: '80%'}}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Profile/>
        <Divider sx={{mt: 4}}/>
      </Container>
    </ThemeProvider>
    
  )
}
