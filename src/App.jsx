import { Container, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";

export default function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  const [darkMode, setDarkMode] = useState(false)


  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Container component={'main'}>
        
      </Container>
    </ThemeProvider>
    
  )
}
