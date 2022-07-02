import React from 'react'
import { CssVarsProvider} from '@mui/joy/styles';
import About from '../components/About/About';
import Skill from '../components/skill/Skill';
import Experience from '../components/experience/Experience';
import Project from '../components/project/Project';
const Home = () => {
  return (
    <CssVarsProvider>
      <About />
      <Experience />
      <Skill />
      <Project />
    </CssVarsProvider>
  )
}

export default Home