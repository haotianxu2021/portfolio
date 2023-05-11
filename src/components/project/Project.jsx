import React from 'react'
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { CssVarsProvider } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.png';
import imgMario from '../../assets/mario2.png';
import imgPac from '../../assets/pacman.png';
import imgKart from '../../assets/kart.png';
import imgPortal from '../../assets/portal.png';
import imgPlant from '../../assets/photo1.jpg';

const Project = () => {
    return (
        <CssVarsProvider>
            <Sheet variant='soft' color='neutral' sx={{ my: 0 }}>
                <Sheet variant="soft" sx={{
                    maxWidth: { xs: '90vw', sm: '75vw', md: '60vw' },
                    mx: 'auto', // margin left & right
                    my: 0, // margin top & botom
                    py: 1, // padding top & bottom

                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    border: 0,
                    borderRadius: 'md',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                }}>
                    <Typography level="h5" variant='plain' sx={{
                        ml: 'auto', mr: 'auto',
                    }} >Projects</Typography>
                    <Box sx={{
                        display: 'flex', gap: 0.5, flexWrap: 'wrap', ml: 'auto', pb:10,
                        flexDirection: { xs: 'column', sm: 'row' }, mr: 'auto', alignItems: 'flex-start',
                    }}>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src={imgPortal}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                            Portal Game
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                            A 3D Portal game using C++ and SDL library. It has basic functions for portals (teleport, view), finite state machine for enemy AI, HUD, audio system, and various other functions. It has 5 levels.
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                C++ | Object-oriented Programming | Game Programming 
                            </Typography>
                            <div>
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }} disabled>
                                        Presentation</Button>
                                <a href='./Lab12.html' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                        Demo</Button></a>
                            </div>
                        </Card>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src={imgPlant}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                            Smart Plant Monitor
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                            An embedded system product that can monitor and control the environmental conditions related to plants' growth.
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                C | Embedded System
                            </Typography>
                            <div>
                                <a href='https://docs.google.com/presentation/d/1fSY0tnTr_UK3bmwcE0_97xLPrbI5FT_-ACYnkhPAUAU/edit?usp=sharing' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }}>
                                        Presentation</Button></a>
                                        <a href='https://github.com/haotianxu2021/Smart-Plant-Monitor' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: '10%', paddingRight: 0, marginRight: '5%', textAlign:'center' }}>
                                        Github</Button></a>
                                <a href='https://drive.google.com/file/d/1FRaiffoZBVZCE42gkoSuI5-bi1mAvfIH/view?usp=sharing' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                        Demo</Button></a>
                            </div>
                        </Card>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src='https://www.agri-pulse.com/ext/resources/images/Agriculture-photos/Soybeans/Untitled-design-6.png?1555518494'
                                        alt="Crop field"
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                            Crop Forecasting Project
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                            A project to forecast Vietnam's rice yield based on the satellites (Sentinel-1 and Sentinel-2)' imagery data. Develop on Microsoft Planetary Computer.
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                Python | Machine Learning
                            </Typography>
                            <div>
                                <a href='https://github.com/haotianxu2021/EY_Data_Challenge_2023_Crop_Forecast' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }}>
                                        Github</Button></a>
                                <a href='https://github.com/haotianxu2021/EY_Data_Challenge_2023_Crop_Forecast' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} disabled>
                                        Demo</Button></a>
                            </div>
                        </Card>
                        
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src={imgKart}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                            Mario Kart Game
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                            A 3D Car racing game using C++ and SDL library. It has 1 self-driving AI with path finding features.
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                C++ | Object-oriented Programming | Game Programming 
                            </Typography>
                            <div>
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }} disabled>
                                        Presentation</Button>
                                <a href='./Lab08.html' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                        Demo</Button></a>
                            </div>
                        </Card>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src={imgPac}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                            Pac-Man Game
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                            A 2D Pac-Man game using C++ and SDL library. It has 4 different AIs with path finding features. Press 1 in game to see or hide their targets.
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                C++ | Object-oriented Programming | Game Programming 
                            </Typography>
                            <div>
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }} disabled>
                                        Presentation</Button>
                                <a href='./Lab05.html' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                        Demo</Button></a>
                            </div>
                        </Card>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src={imgMario}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                            Mario Game
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                            A 2D Mario-style platform game using C++ and SDL library.
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                C++ | Object-oriented Programming | Game Programming 
                            </Typography>
                            <div>
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }} disabled>
                                        Presentation</Button>
                                <a href='./Lab04.html' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                        Demo</Button></a>
                            </div>
                        </Card>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src={img1}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                                Battery Recycling Project
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                                A system to classify the type of battery that users put, make corresponding records, and control the recycling box.
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                Machine Learning | Image Classification | Transfer Learning | Raspberry Pi | Python
                            </Typography>
                            <div>
                                <a href='https://docs.google.com/presentation/d/1ZeDIQm6fdL_iKaeQyrdqYqUYyckX4ubWSSmkKrBbH7o/edit?usp=sharing' target='_blank' rel="noreferrer" >
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }} >
                                        Presentation</Button></a>
                                        <a href='https://github.com/haotianxu2021/hackIoT' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: '10%', paddingRight: 0, marginRight: '5%', textAlign:'center' }}>
                                        Github</Button></a>
                                <a href='https://haotianxu2021-hackiot-deploy-44bik5.streamlitapp.com/' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                        Demo</Button></a>
                            </div>
                        </Card>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src={img2}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                                Emotional Recognition and Recommend System Project
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                                A system to recognize users' emotions through photo or speech, and recommend songs corresponding to different emotions
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                Machine Learning | Image Classification | Transfer Learning | Speech-to-text | Natural Language Processing | Python
                            </Typography>
                            <div>
                                <a href='https://drive.google.com/uc?export=download&id=16hR3hSgqR1R2l-1qBIooCbvhTDw4EEUJ' download>
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }} >
                                        Presentation</Button></a>
                                        <a href='https://github.com/gridsusc/mindspark-10-team-Renaissaince' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: '10%', paddingRight: 0, marginRight: '5%', textAlign:'center' }}>
                                        Github</Button></a>
                                <a href='https://drive.google.com/file/d/1Wc9z3dYu3Bzy16LoFIsR0ICuXyF7Olq3/view?usp=sharing' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                        Demo</Button></a>
                            </div>
                        </Card>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src={img3}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                                Shake Shack's Sales Prediction with New York's MTA Data
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                                A project to predict Shake Shack's sales using web-scraped MTA data.
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                Machine Learning | Web Scraping | Python
                            </Typography>
                            <div>
                                <a href='https://drive.google.com/uc?export=download&id=12jlzbxASm5pqgGUi50QI1BEPu6Bd3Tkf' download >
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }} >
                                        Presentation</Button></a>

                                <Button disabled size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                    Demo</Button>
                            </div>
                        </Card>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src={img4}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                                Marshall Data Analytics Competition
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                                Winner Group and Team Leader
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                Machine Learning | Data Analytics | Python
                            </Typography>
                            <div>
                                <a href='https://drive.google.com/uc?export=download&id=1Nz6ybTrEUMYabkb-L88ZQa0dao38ZsOF' download >
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }} >
                                        Presentation</Button></a>
                                        <a href='https://github.com/haotianxu2021/Marshall_data_competition_2021' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: '10%', paddingRight: 0, marginRight: '20%', textAlign:'center' }}>
                                        Github</Button></a>
                                <Button disabled size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                    Demo</Button>
                            </div>
                        </Card>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto' }}>
                            <CardOverflow>
                                <AspectRatio ratio="2">
                                    <img
                                        src={img5}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                                Mathematical Contest In Modeling 2020
                            </Typography>
                            <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
                                Honorable Mention
                            </Typography>
                            <Typography level="body3" sx={{ mb: 1 }}>
                                Time Series Model | SPSS | MATLAB | Latex 
                            </Typography>
                            <div>

                                <Button disabled size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, }} >
                                    Presentation</Button>

                                <Button disabled size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                    Demo</Button>
                            </div>
                        </Card>
                        <Card variant="outlined" sx={{ width: {lg:'28%', md:'40%', xs:'80%'}, ml: 'auto', mr: 'auto', visibility:'hidden' }}>
                        <Typography level="body3" sx={{ mb: 1 }}>
                                111111111111111111111111 111111111 111111111111 1111111111111 1111111111
                            </Typography>
                        </Card>
                    </Box>
                </Sheet>

            </Sheet>
        </CssVarsProvider>
    )
}

export default Project