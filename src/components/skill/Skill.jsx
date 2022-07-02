import React from 'react'
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import { CssVarsProvider } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
const Skill = () => {
    return (
        <CssVarsProvider>
            <Sheet variant='soft' color='primary' sx={{ my: 0 }}>
                <Sheet variant="soft" color='primary' sx={{
                    maxWidth: { xs: '90vw', sm: '75vw', md: '55vw' },
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
                    <Typography level="h5" variant='plain'  sx={{
                        ml: 'auto', mr: 'auto',
                    }}>Technical Skills</Typography>
                    <Box sx={{
                        display: 'flex', gap: 1, flexWrap: 'wrap',  ml: 'auto',
                        flexDirection: { xs: 'column', sm: 'row' }, mr: 'auto', alignItems: 'flex-start',
                    }}>
                        <Box sx={{
                            display: 'flex', gap: 1, flexWrap: 'wrap', ml: 'auto', alignItems: 'flex-start',
                            flexDirection: { xs: 'column', sm: 'row' }, mr: 'auto', maxWidth: '30%'
                        }}>
                            <Typography level="h6" variant='plain' sx={{
                                ml: 'auto', mr: 'auto', width: '100%', textAlign: 'center'
                            }}>Programing Languages</Typography>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Python</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>C++</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>MATLAB</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>SQL</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>HTML</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>CSS</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Javascript</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Verilog</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>C</Chip>
                        </Box>
                        <Box sx={{
                            display: 'flex', gap: 1, flexWrap: 'wrap', ml: 'auto', alignItems: 'flex-start',
                            flexDirection: { xs: 'column', sm: 'row' }, mr: 'auto', maxWidth: '30%'
                        }}>
                            <Typography level="h6" variant='plain' sx={{
                                ml: 'auto', mr: 'auto', width: '100%', textAlign: 'center'
                            }}>Web Development</Typography>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>React</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Javascript</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Material UI</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Bootstrap</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Amplify</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Amazon Web Services</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>REST Api</Chip>
                        </Box>
                        <Box sx={{
                            display: 'flex', gap: 1, flexWrap: 'wrap', ml: 'auto', alignItems: 'flex-start',
                            flexDirection: { xs: 'column', sm: 'row' }, mr: 'auto', maxWidth: '30%'
                        }}>
                            <Typography level="h6" variant='plain' sx={{
                                ml: 'auto', mr: 'auto', width: '100%', textAlign: 'center'
                            }}>Data Related</Typography>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>MySQL</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>MongoDB</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Tableau</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>AWS S3</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>JSON</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Web Scraping</Chip>
                        </Box>
                        <Box sx={{
                            display: 'flex', gap: 1, flexWrap: 'wrap', ml: 'auto', alignItems: 'flex-start',
                            flexDirection: { xs: 'column', sm: 'row' }, mr: 'auto', maxWidth: '30%'
                        }}>
                            <Typography level="h6" variant='plain' sx={{
                                ml: 'auto', mr: 'auto', width: '100%', textAlign: 'center'
                            }}>Machine Learning Related</Typography>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Pytorch</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Tensorflow</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Keras</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>scikit-learn</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>XGBoost</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>CNN</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Transfer Learning</Chip>
                        </Box>
                        <Box sx={{
                            display: 'flex', gap: 1, flexWrap: 'wrap', ml: 'auto', alignItems: 'flex-start',
                            flexDirection: { xs: 'column', sm: 'row' }, mr: 'auto', maxWidth: '30%'
                        }}>
                            <Typography level="h6" variant='plain' sx={{
                                ml: 'auto', mr: 'auto', width: '100%', textAlign: 'center'
                            }}>Electrical Engineering Related</Typography>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>FPGA</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Raspberry Pi</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Arduino</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Nexy 4</Chip>
                            <Chip variant="solid" color='neutral' sx={{ width: 'auto' }}>Digital Circuits</Chip>
                        </Box>
                    </Box>
                </Sheet>
            </Sheet>
        </CssVarsProvider>
    )
}

export default Skill