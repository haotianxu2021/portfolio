import React from 'react'
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { CssVarsProvider } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import photo from '../../assets/photo_Haotian Xu.jpg';
import img from '../../assets/Photo_Haotian_Xu_Startinvest.jpg'
const About = () => {
  return (
    <CssVarsProvider>
      <Sheet variant="outlined" color='info' sx={{
        maxWidth: '100vw',
        mx: 'auto', // margin left & right
        my: 5, // margin top & botom
        py: 1, // padding top & bottom
        px: 2, // padding left & right
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        border: 0,
      }}>
        <a href="#" style={{
          marginLeft: 'auto', marginRight: 'auto'
        }}>
          <Avatar alt="HAOTIAN XU" src={img} size='lg' sx={{
            width: '20vh', height: '20vh', objectFit:'contain'
          }} />
        </a>
        <Typography level="h4" sx={{
          ml: 'auto', mr: 'auto',
        }}>Haotian Xu</Typography>
        <Box sx={{ ml: 'auto', mr: 'auto', gap: 1, display: 'flex', flexDirection:{md:'row', sm:'column', xs:'column'} }}>
          <Chip variant="soft" sx={{ width: 'auto' }}>USC Undergraduate</Chip>
          <Chip variant="soft" sx={{ width: 'auto' }}>Electrical Engineering</Chip>
          <Chip variant="soft" sx={{ width: 'auto' }}>Full-Stack</Chip>
          <Chip variant="soft" sx={{ width: 'auto' }}>Data Science</Chip>
        </Box>
        <Typography level="h6" sx={{
          ml: 'auto', mr: 'auto', width: "60vw", textAlign: 'center'
        }}>Haotian Xu is a raising senior in University of Southern California. He is a fast-learner and hard-worker.
          He is looking for 2023 Summer interns and master programs starting from 2023 Fall.</Typography>
        <Box sx={{ ml: 'auto', mr: 'auto', gap: 1, display: 'flex', flexDirection:{md:'row', sm:'column', xs:'column'} }}>
          <a href='https://drive.google.com/uc?export=download&id=1cDicK_qW64GDluRm2If9wfQi062TtW9i' download>
            <Button size='sm' variant='solid' color='info' startIcon={<DownloadIcon />} >Download CV</Button>
          </a>
          <a href='https://www.linkedin.com/in/haotian-xu-xht2021/' target="_blank" rel="noreferrer">
            <Button size='sm' variant='solid' color='info' startIcon={<LinkedInIcon />} >LinkedIn</Button>
          </a>
          <a href='mailto:horacexu@usc.edu'>
            <Button size='sm' variant='solid' color='info' startIcon={<EmailIcon />} >Email</Button>
          </a>
          <a href='https://i.ibb.co/wN14y9K/mmqrcode1656306683940.jpg' target="_blank" rel="noreferrer" download>
            <Button size='sm' variant='solid' color='info' startIcon={<ChatIcon />} >Wechat</Button>
          </a>
        </Box>
      </Sheet>
    </CssVarsProvider>
  )
}

export default About