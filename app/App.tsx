"use client"
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from "./utils/Utils";
import HomePage from '@/app/components/HomePage/Home'
import Skills from './components/Skills/Skills';
import Navbar from './components/Header/Navbar';
import Projects from './components/Projects/Projects';
import EducationSection from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// No need to declare`Body` as a `string`, `styled.div` is already typed correctly
const Body = styled.div`
background-color:${({ theme }) => theme.bg};
width:100%;
overflow-x:hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(0, 0, 237, 0.478) 0%, rgba(201, 32, 184, 0) 50%);
  linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  color: rgba(255, 255, 255, 0.76);
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
const App = () => {
  return (
    <>
          <ThemeProvider theme={darkTheme}>
              <Navbar/>
                  <Body>
                      <HomePage/>
                      <Wrapper>
                          <Skills/>
                          <Projects/>
                          <EducationSection/>
                          <Contact/>
                          <Footer/>
                      </Wrapper>
                  </Body>
          </ThemeProvider>
    </>
  )
}

export default App
