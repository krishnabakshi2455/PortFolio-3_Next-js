"use client"
import React from 'react'
import { useState } from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarstyledComponents'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Close, CloseRounded } from '@mui/icons-material';
import { Bio } from '@/app/data/constants';
import Link from 'next/link';

const Navbar = () => {

    const [isopen, setIsOpen] = React.useState(false);
    const theme = useTheme()
  return (
    <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>
                      <p className=' flex items-center text-white mb-5 cursor-pointer'>
                          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                      </p>
                  </NavLogo>
                  <MobileIcon>
                      <FaBars onClick={() => {
                          setIsOpen(!isopen)
                      }} />
                  </MobileIcon>
                  <NavItems>
                      <NavLink href="#about">About</NavLink>
                      <NavLink href='#skills'>Skills</NavLink>
                      <NavLink href='#projects'>Projects</NavLink>
                      <NavLink href='#education'>Education</NavLink>
                      <NavLink href='#contact'>Contact</NavLink>
                  </NavItems>
                  
                  <ButtonContainer>
                      {/* This way, you ensure that the href is always a valid string, avoiding the TypeScript error. If github is an empty string or array, it will fall back to "#". */}
                      <GitHubButton href={Array.isArray(Bio.github) ? Bio.github[0] || "#" : Bio.github} target="_blank">Github Profile</GitHubButton>
                  </ButtonContainer>
                  {
                      isopen &&
                      <MobileMenu isOpen={isopen}>
                          <MobileLink href="#about" onClick={() => {
                              setIsOpen(!isopen)
                          }}>About</MobileLink>
                          <MobileLink href='#skills' onClick={() => {
                              setIsOpen(!isopen)
                          }}>Skills</MobileLink>
                          <MobileLink href='#projects' onClick={() => {
                              setIsOpen(!isopen)
                          }}>Projects</MobileLink>
                          <MobileLink href='#education' onClick={() => {
                              setIsOpen(!isopen)
                          }}>Education</MobileLink>
                          <MobileLink href='#contact' onClick={() => {
                              setIsOpen(!isopen)
                          }}>Contact</MobileLink>
                              <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Array.isArray(Bio.github) ? Bio.github[0] || "#" : Bio.github} target="_blank">Github Profile</GitHubButton>
                      </MobileMenu>

                  }
              </NavbarContainer>
          </Nav>
    </>
  )
}

export default Navbar
