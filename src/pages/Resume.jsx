import React from 'react'
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import img from '../assets/7.png';
const Resume = () => {

    return (
        <CssVarsProvider>
            <Sheet variant='soft' color='neutral' sx={{ my: 0 }}>
                <Sheet variant="soft" sx={{
                    maxWidth: { xs: '90vw', sm: '75vw', md: '60vw' },
                    mx: 'auto', // margin left & right
                    my: 0, // margin top & botom
                    py: 10, // padding top & bottom
                    height:{md:'80vw', sm:'90vw', xs:'115vw'},
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    border: 0,
                    borderRadius: 'md',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                }}>
                    <Card component="div" sx={{ minWidth: '80%', flexGrow: 1, height: '100%', mx:'auto' }}>
                        <CardCover>
                            <img
                                src={img}
                                style={{width:'100%', height:'auto'}}
                                alt=""
                            />
                        </CardCover>
                    </Card>
                </Sheet>
            </Sheet>
        </CssVarsProvider>
    )
}

export default Resume