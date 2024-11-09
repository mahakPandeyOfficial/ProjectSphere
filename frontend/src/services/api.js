const API_URL = 'http://localhost:5000/api';
import axios from 'axios';

export const fetchProjects = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/projects');
    return response.data;  // Assuming it returns an array of project objects
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];  // Return an empty array if there is an error
  }
};

const fetchClients = async () => {
  const response = await fetch(`${API_URL}/clients`);
  return response.json();
};

const createProject = async (projectData) => {
  const response = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  return response.json();
};

export {  fetchClients, createProject };
