const API_URL = 'http://localhost:5000/api';

const fetchProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  return response.json();
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

export { fetchProjects, fetchClients, createProject };
