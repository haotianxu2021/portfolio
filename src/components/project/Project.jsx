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
                                        src={imgMario}
                                        alt=""
                                    />
                                </AspectRatio>

                            </CardOverflow>
                            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                            Mario Game Project
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
                                <a href='https://drive.google.com/file/d/1Wc9z3dYu3Bzy16LoFIsR0ICuXyF7Olq3/view?usp=sharing' target="_blank" rel="noreferrer">
                                    <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0, paddingRight: 0, marginRight: 0, float: 'right' }} >
                                        Demo Video</Button></a>
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