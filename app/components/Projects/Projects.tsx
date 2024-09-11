import { projects } from '@/app/data/constants';
import React, { useState } from 'react';
import styled from 'styled-components';

// Types for Project, Member


// Styled Components
const Container = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const ToggleButton = styled.div<{ active: boolean }>`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  background: ${({ active, theme }) => (active ? theme.primary + '20' : 'transparent')};
  color: ${({ active, theme }) => (active ? theme.white : theme.primary)};
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.primary + '10'};
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

// Project Card Styles
const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
  }
`;

const Imageb = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 2px;
`;

const TitleCard = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + '80'};
// `;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + '99'};
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: auto;
  height: 25vh;
`;

// Main Component
const Projects: React.FC = () => {
    const [toggle, setToggle] = useState<string>('all');

    // Debugging: Log current toggle and filtered projects
    console.log('Current Toggle:', toggle);
    const filteredProjects = toggle === 'all'
        ? projects
        : projects.filter((project) => project.category.toLowerCase() === toggle);

    console.log('Filtered Projects:', filteredProjects);

    {/*Key Points:
Category Comparison: Ensure that category.toLowerCase() matches exactly with project.category.toLowerCase().
Console Logs: Added console.log statements to check the current toggle state and the filtered projects.
Fallback for Images: Added a fallback image for null or missing images.
Make sure you check the console for the output of console.log to diagnose the problem further. If the category names in the projects array or the toggle buttons don’t match exactly, adjust them accordingly. */}
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>Explore my projects in different areas</Desc>
                <ToggleButtonGroup>
                    {['All', 'Front-end', 'Back-end', 'Full-Stack'].map((category) => (
                        <React.Fragment key={category}>
                            <ToggleButton
                                active={toggle === category.toLowerCase()}
                                onClick={() => setToggle(category.toLowerCase())}
                            >
                                {category}
                            </ToggleButton>
                            <Divider />
                        </React.Fragment>
                    ))}
                </ToggleButtonGroup>
                <CardContainer>
                    {filteredProjects.map((project) => (
                        <Card key={project.id} >
                            <Imageb src={project.image || '/placeholder.png'} alt={project.title} />
                            <Tags>
                                {project.tags.map((tag, index) => (
                                    <Tag key={index}>{tag}</Tag>
                                ))}
                            </Tags>
                            <Details>
                                <TitleCard>{project.title}</TitleCard>
                                {/* <Date>{project.date || 'N/A'}</Date> */}
                                <Description>{project.description}</Description>
                            </Details>
                       
                        </Card>
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;
