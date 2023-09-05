import { HomeOutlined, LightModeOutlined, MailOutline, PersonOutline } from '@mui/icons-material'
import { Box, Icon, Link, Switch } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const data = [
    {name: 'Home', icon: <HomeOutlined/>, href: '#'},
    {name: 'About', icon: <PersonOutline/>, href: '#'},
    {name: 'Contact', icon: <MailOutline/>, href: '#'}
]

export default function Header() {
  return (
    <AppBar position="static" color="primary" sx={{boxShadow: 'none'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box component={'nav'} display={'flex'} gap={4}>
            {data.map(
                ({name, icon, href}, index) => (
                    <Link href={href} underline='none' key={index} display={'flex'} alignItems={'center'} gap={2} color={'inherit'}>
                        <Icon>{icon}</Icon>
                        <Typography variant='h5'>{name}</Typography>
                    </Link>
                )
            )}
        </Box>
        <Box display={'flex'} alignItems={'center'}>
            <Icon><LightModeOutlined/></Icon>
            <Switch/>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
