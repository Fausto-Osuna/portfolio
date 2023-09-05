import { Circle } from "@mui/icons-material";
import { Avatar, Badge, Box, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Box mt={8} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} justifyContent={{xs: 'center', md: 'flex-start'}}>
        <Badge anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} overlap="circular" color="success" badgeContent={' '}>
            <Avatar src="/img/profile-img.jpeg" sx={{width: 200, height: 200, boxShadow: '1px 1px 2px 4px rgba(0,0,0,0.25)'}}/>
        </Badge>
        <Box m={3} display={'flex'} flexDirection={'column'} gap={4}>
            <Typography variant="h2">Luis Osuna</Typography>
            <Typography variant="body1">Ingeniero en Desarrollo en Software - Programador Full Stack</Typography>
        </Box>
    </Box>
  )
}
