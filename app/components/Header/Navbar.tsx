"use client";

import React, { useState } from 'react';
import { Nav, NavbarContainer, Span, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarstyledComponents';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Bio } from '@/app/data/constants';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { usePathname } from 'next/navigation';

const NavLogo = styled(Button)`
  width: 80%;    
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &.active {
    border-bottom: 4px solid ${({ theme }) => theme.primary};
    background-color: rgba(0, 0, 237, 0.814);
    color: white;
  }
`;

const Navbar = () => {
    const pathname = usePathname(); // Get the current pathname
    const isActive = (href: string) => pathname === href; // Determine if the link is active
    console.log(pathname);
    

    const [isopen, setIsOpen] = useState(false);
    const theme = useTheme();
    const toggleMenu = () => setIsOpen(!isopen);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo>
                        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                    </NavLogo>
                    <MobileIcon>
                        <FaBars onClick={toggleMenu} />~
                    </MobileIcon>
                    <NavItems>
                        {/* <NavLink href="#about" className={isActive('#about') ? 'active' : ''}>About</NavLink> */}
                        <NavLink href="#about" className={`link ${pathname === '/' ? 'active' : ''}`}>About</NavLink>
                        {/* <NavLink href='#skills' className={isActive('#skills') ? 'active' : ''}>Skills</NavLink> */}
                        <NavLink href='#skills' className={`link ${pathname === '/skills' ? 'active' : ''}`}>Skills</NavLink>
                        <NavLink href='#projects' className={isActive('#projects') ? 'active' : ''}>Projects</NavLink>
                        <NavLink href='#education' className={isActive('#education') ? 'active' : ''}>Education</NavLink>
                        <NavLink href='#contact' className={isActive('#contact') ? 'active' : ''}>Contact</NavLink>
                    </NavItems>

                    <ButtonContainer>
                        {(Array.isArray(Bio.github) && Bio.github[0]) && (
                            <GitHubButton href={Bio.github[0]} target="_blank">
                                Github Profile
                            </GitHubButton>
                        )}
                    </ButtonContainer>

                    {isopen && (
                        <MobileMenu isOpen={isopen}>
                            <MobileLink href="/about" onClick={toggleMenu} className={isActive('#about') ? 'active' : ''}>About</MobileLink>
                            <MobileLink href='/skills' onClick={toggleMenu} className={isActive('#skills') ? 'active' : ''}>Skills</MobileLink>
                            <MobileLink href='/projects' onClick={toggleMenu} className={isActive('#projects') ? 'active' : ''}>Projects</MobileLink>
                            <MobileLink href='#education' onClick={toggleMenu} className={isActive('#education') ? 'active' : ''}>Education</MobileLink>
                            <MobileLink href='#contact' onClick={toggleMenu} className={isActive('#contact') ? 'active' : ''}>Contact</MobileLink>
                            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Array.isArray(Bio.github) ? Bio.github[0] || "#" : Bio.github} target="_blank">
                                Github Profile
                            </GitHubButton>
                        </MobileMenu>
                    )}
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
