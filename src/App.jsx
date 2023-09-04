import { Container, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useState } from "react";

export default function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  const [darkMode, setDarkMode] = useState(false)


  return (
    <ThemeProvider theme={theme}>
      <Container component={'main'}>
        <Typography variant="h1">Hello World</Typography>
      </Container>
    </ThemeProvider>
    
  )
}
