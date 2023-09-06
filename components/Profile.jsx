import { Circle } from "@mui/icons-material";
import { Avatar, Badge, Box, Button, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Box component={'section'} id="home" mt={24} display={'flex'} flexDirection={{xs: 'column', sm: 'row', md: 'row'}} justifyContent={'center'}>
        <Badge anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} overlap="circular" color="success" badgeContent={' '}>
            <Avatar src="/img/profile-img.jpeg" sx={{width: 200, height: 200, boxShadow: '1px 1px 2px 4px rgba(0,0,0,0.25)'}}/>
        </Badge>
        <Box m={3} display={'flex'} flexDirection={'column'} gap={3}>
            <Typography variant="h2">Luis Osuna</Typography>
            <Typography variant="body1">Ingeniero en Desarrollo en Software - Programador Full Stack</Typography>
            <Button sx={{width: {xs: '100%', md: '30%'}}} variant="contained" color="info">Sobre mi</Button>
        </Box>
    </Box>
  )
}
