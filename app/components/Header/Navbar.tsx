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
  }
`;

const Navbar = () => {
    const pathname = usePathname(); // Get the current pathname
    console.log(pathname);

    const [pathset, setpathset] = useState<string>('')
    const changePath = (path: string) => {
        setpathset(path)
    }

    const isActive = (href: string) => pathset === href;

    const [isopen, setIsOpen] = useState<boolean>(false);
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
                        <NavLink className={isActive('#about') ? 'active' : ''} href="#about" scroll={true} onClick={() => {
                            changePath('#about'),
                                isActive('#about')
                        }}>
                            About</NavLink>
                        <NavLink href='#skills' className={isActive('#skills') ? 'active' : ''} onClick={() => {
                            changePath('#skills'),
                                isActive('#skills')
                        }}>Skills</NavLink>
                        <NavLink href='#projects' className={isActive('#projects') ? 'active' : ''} onClick={() => {
                            changePath('#projects'),
                                isActive('#projects')
                        }}>Projects</NavLink>
                        <NavLink href='#education' className={isActive('#education') ? 'active' : ''} onClick={() => {
                            changePath('#education'),
                                isActive('#education')
                        }}>Education</NavLink>
                        <NavLink href='#contact' className={isActive('#contact') ? 'active' : ''} onClick={() => {
                            changePath('#contact'),
                                isActive('#contact')
                        }}>Contact</NavLink>
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
                            <MobileLink href="#about" onClick={toggleMenu} className={isActive('#about') ? 'active' : ''}>About</MobileLink>
                            <MobileLink href='#skills' onClick={toggleMenu} className={isActive('#skills') ? 'active' : ''}>Skills</MobileLink>
                            <MobileLink href='#projects' onClick={toggleMenu} className={isActive('#projects') ? 'active' : ''}>Projects</MobileLink>
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
