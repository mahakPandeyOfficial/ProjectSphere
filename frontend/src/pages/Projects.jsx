import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchProjects } from '../services/api';  // Ensure the API is correctly implemented

// Container for the project section without scrolling effect
const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
  background-color: #f5f5f5;
`;

// Individual project card
const ProjectCard = styled.div`
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
  color: #333;
`;

const ProjectButton = styled.button`
  background-color: #FFA500;
  color: #fff;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data from the backend
    const loadProjects = async () => {
      const projectData = await fetchProjects();  // Ensure the API returns an array of projects
      setProjects(projectData);
    };

    loadProjects();
  }, []);

  return (
    <div className="bg-blue-50 min-h-[400] py-10 px-6 flex flex-col items-center">
      <h1 style={{ textAlign: 'center', fontSize: '36px', color: '#333', fontWeight: '100px' }}>
        Our Projects
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
        We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
      </p>
      <ProjectContainer>
        {projects.length === 0 ? (
          <p>No projects available at the moment.</p> // If no projects are available, show this message
        ) : (
          projects.map((project) => (
            <ProjectCard key={project._id}>
              {/* Assuming project.image is the relative file path or URL of the uploaded image */}
              <ProjectImage 
                src={`http://localhost:5000/${project.image}`}  // Ensure this URL is correct
                alt={project.name} 
              />
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectButton>See More</ProjectButton>
            </ProjectCard>
          ))
        )}
      </ProjectContainer>
    </div>
  );
};

export default ProjectSection;
