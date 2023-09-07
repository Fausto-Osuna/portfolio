import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box component={'section'} mt={6} sx={{textAlign: {xs: 'center', sm: 'left'}}}>
        <Typography variant="h3">Sobre mi</Typography>
        <Box display={'flex'} justifyContent={'space-between'} mt={6} gap={4}>
            <Typography paragraph lineHeight={1.8}>
                Apasionado al mundo de la programacion con experiencia en el mundo del desarrollo Web. <br/>
                Interesado y con experiencia en este mundo sobre todo en el ambiente del Front-End con mi
                experiencia como FullStack Developer con la tecnologia de React + NodeJS
            </Typography>
            <Box component={'img'} src="/img/jsx-coding.jpg" width={500} height={500} borderRadius={3}/>
        </Box>
    </Box>
  )
}
