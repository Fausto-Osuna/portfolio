import { AccountTreeOutlined, DarkModeOutlined, HomeOutlined, LightModeOutlined, MailOutline, PersonOutline } from '@mui/icons-material'
import { Box, Icon, IconButton, Link, Switch } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const data = [
    {name: 'Inicio', icon: <HomeOutlined/>, href: '#home'},
    {name: 'Sobre mi', icon: <PersonOutline/>, href: '#'},
    {name: 'Proyectos', icon: <AccountTreeOutlined/>, href: '#'},
    {name: 'Contactame', icon: <MailOutline/>, href: '#'}
]

export default function Header({darkMode, setDarkMode}) {
  return (
    <AppBar color="transparent" sx={{position: {xs: 'static', sm: 'sticky'}, boxShadow: 'none'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box component={'nav'} display={{xs: 'none', md: 'flex'}} gap={4}>
            {data.map(
                ({name, icon, href}, index) => (
                    <Link href={href} underline='none' key={index} display={'flex'} gap={1} color={'inherit'}>
                        <Icon>{icon}</Icon>
                        <Typography variant='h6'>{name}</Typography>
                    </Link>
                )
            )}
        </Box>
        <IconButton color='inherit' onClick={() => setDarkMode(!darkMode)}>
          {darkMode == false ? <LightModeOutlined/> : <DarkModeOutlined/>}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
