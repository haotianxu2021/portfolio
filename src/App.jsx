import React from 'react'
import Home from './pages/Home';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Resume from './pages/Resume';
const App = () => {
  return (
    <CssVarsProvider>
      <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route exact path='/resume' element={<Resume />}></Route>
      </Routes>
    </Router>
  
    </CssVarsProvider>
   ) 
}

export default App