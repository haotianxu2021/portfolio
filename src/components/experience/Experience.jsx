import React from 'react'
import Sheet from '@mui/joy/Sheet';
import { Link } from 'react-router-dom';
import Button from '@mui/joy/Button';
import { CssVarsProvider } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import './experience.css'
const Experience = () => {
  return (
    <CssVarsProvider>
      <Sheet variant='soft' color='neutral' sx={{ my: 0 }}>
        <Sheet variant="soft" sx={{
          maxWidth: { xs: '90vw', sm: '75vw', md: '55vw' },
          mx: 'auto', // margin left & right
          my: 0, // margin top & botom
          py: 1, // padding top & bottom
          px: 2, // padding left & right
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
          }} >Education and Experience</Typography>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2019 - present"
              dateClassName='rightdate'
              contentStyle={{ backgroundColor: 'Tomato' }}
              icon={<SchoolIcon />}
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">University of Southern California</h3>
              <p>
                B.S. in Electrical Engineering, Minor in Applied Analytics
              </p>
              <Link to='/resume'>
                <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0 }} >Learn More</Button></Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2021"
              dateClassName='leftdate'
              contentStyle={{ backgroundColor: 'Violet' }}
              icon={<SchoolIcon />}
              iconStyle={{ background: 'rgb(30, 233, 99)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Tsinghua University</h3>
              <p>
                Top-EE Program
              </p>
              <Link to='/resume'>
                <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0 }} >Learn More</Button></Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              icon={<WorkIcon />}
              contentStyle={{ backgroundColor: 'DodgerBlue' }}
              date="2022 Summer"
              dateClassName='rightdate'
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">StartInvest</h3>
              <h4 className="vertical-timeline-element-subtitle">Engineering Intern</h4>
              <p>
                Web Development, Data Science, Fintech
              </p>
              <Link to='/resume'>
                <Button size='sm' variant='plain' sx={{ paddingLeft: 0, marginLeft: 0 }} >Learn More</Button></Link>
            </VerticalTimelineElement>
          </VerticalTimeline>

        </Sheet>
      </Sheet>
    </CssVarsProvider>
  )
}

export default Experience