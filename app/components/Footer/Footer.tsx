// components/Footer.tsx
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '@/app/data/constants';
import { usePathname } from 'next/navigation';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
// Styled components
const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  display: flex;
  gap:8px;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

// Footer Component
const Footer: React.FC = () => {

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
    <FooterContainer>
      <FooterWrapper>
        <Logo>Krishna Bakshi</Logo>
        <Nav>
          <NavLink className={isActive('#about') ? 'active' : ''} href="#about" onClick={() => {
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
        </Nav>
        <SocialMediaIcons>
          {Bio.linkedin && (
            <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </SocialMediaIcon>
          )}
          <SocialMediaIcon target="_blank" rel="noopener noreferrer">
            <AddIcCallIcon /> <p className=' text-sm'>{Bio.calling}</p>
          </SocialMediaIcon>
        </SocialMediaIcons>
        
        <Copyright>
          &copy; 2024 Krishna Bakshi.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
