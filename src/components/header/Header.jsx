import React from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { Link } from 'react-router-dom';
import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import photo from '../../assets/photo_Haotian Xu.jpg'

const Header = () => {

  function ColorSchemeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) {
      return <IconButton size="sm" variant="plain" color="info" />;
    }
    return (
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="plain"
        color="info"
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
            console.log(mode);
          } else {
            setMode('light');
            console.log(mode);
          }
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    );
  }
  return (
    <CssVarsProvider>
      <Sheet variant="outlined" color='info' sx={{
        maxWidth: '100vw',
        mx: 'auto', // margin left & right
        my: 0, // margin top & botom
        py: 1, // padding top & bottom
        px: 2, // padding left & right
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        borderRadius: 0,
        boxShadow: 'md',
        borderTop: 0,
        position: 'sticky',
        top:0,
        zIndex:999,
      }}>
        <Box sx={{ display: 'flex', width:'100%', flexDirection:{xs:'column', sm:'row'}}}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mr: 'auto', ml:{xs:'auto', sm:0} }}>
        <a href="https://ibb.co/6smsrj2">
          <Avatar alt="HAOTIAN XU" src={photo} size='md'/>
          </a>
        <Typography level="h6">Haotian Xu</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', ml: 'auto', 
        flexDirection:{xs:'column', sm:'row'}, mr:{xs:'auto', sm:0}}}>
          <Link to='/'>
            <Button size='sm' variant='plain' color='info' >Home</Button>
          </Link>
          <Link to='/resume'>
            <Button size='sm' variant='plain' color='info'>My Resume</Button>
          </Link>
          <ColorSchemeToggle />
        </Box>
        </Box>
      </Sheet>
    </CssVarsProvider>
  )
}

export default Header