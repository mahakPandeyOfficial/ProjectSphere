import React, { useState, useEffect } from 'react';
import { FaUser, FaProjectDiagram, FaEnvelope, FaClipboardList } from 'react-icons/fa';
import axios from 'axios';

const Admin = () => {
    const [activeSection, setActiveSection] = useState('Project');

    const sections = [
        { name: 'Project', icon: <FaProjectDiagram /> },
        { name: 'Client', icon: <FaUser /> },
        { name: 'Contact Forms', icon: <FaClipboardList /> },
        { name: 'Subscribers', icon: <FaEnvelope /> },
    ];

    return (
        <div className="flex h-screen bg-gray-100 text-gray-800">
            {/* Sidebar */}
            <aside className="w-64 bg-white text-blue-600 flex flex-col">
                <div className="p-4 text-center font-bold text-lg">Admin Dashboard</div>
                <div className="flex-1">
                    {sections.map((section) => (
                        <button
                            key={section.name}
                            onClick={() => setActiveSection(section.name)}
                            className={`flex items-center px-4 py-2 text-left w-full ${
                                activeSection === section.name
                                    ? 'bg-blue-700 text-white'
                                    : 'hover:bg-blue-200'
                            }`}
                        >
                            <span className="mr-3">{section.icon}</span>
                            {section.name}
                        </button>
                    ))}
                </div>
                <div className="p-4">
                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg w-full">
                        Get Premium
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <h2 className="text-2xl font-bold mb-4">{activeSection} Management</h2>
                
                {/* Conditional rendering for each section */}
                {activeSection === 'Project' && <ProjectManagement />}
                {activeSection === 'Client' && <ClientManagement />}
                {activeSection === 'Contact Forms' && <ContactFormDetails />}
                {activeSection === 'Subscribers' && <SubscribedEmails />}
            </main>
        </div>
    );
};

// Project Management Section
const ProjectManagement = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ name: '', description: '', image: null });

    useEffect(() => {
        axios.get('http://localhost:5000/api/projects')
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setProjects(response.data);
                } else {
                    console.error('Expected an array but got:', response.data);
                }
            })
            .catch((error) => console.error("Failed to fetch projects:", error));
    }, []);

    const handleAddProject = (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('name', newProject.name);
        formData.append('description', newProject.description);
        formData.append('image', newProject.image); // Handle file upload
    
        axios.post('http://localhost:5000/api/projects', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            setProjects([...projects, response.data]);
            setNewProject({ name: '', description: '', image: null });
        })
        .catch((error) => console.error("Failed to add project:", error));
    };
    

    const handleDeleteProject = (id) => {
        axios.delete(`http://localhost:5000/api/projects/${id}`)
            .then(() => {
                setProjects(projects.filter((project) => project._id !== id));
            })
            .catch((error) => console.error("Failed to delete project:", error));
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Add New Project</h3>
            <form onSubmit={handleAddProject} className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Project Image</label>
                    <input
                        type="file"
                        className="border border-gray-300 rounded-md p-2"
                        onChange={(e) => setNewProject({ ...newProject, image: e.target.files[0] })}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Project Name</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Enter project name"
                        value={newProject.name}
                        onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Project Description</label>
                    <textarea
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Enter project description"
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Save Project</button>
            </form>

            <h3 className="text-xl font-semibold mb-4">Existing Projects</h3>
            <table className="w-full border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <tr key={project._id}>
                                <td className="border px-4 py-2">
                                    <img src={project.image} alt={project.name} className="w-16 h-16" />
                                </td>
                                <td className="border px-4 py-2">{project.name}</td>
                                <td className="border px-4 py-2">{project.description}</td>
                                <td className="border px-4 py-2">
                                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => handleDeleteProject(project._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-4">No projects available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// Client Management Section
const ClientManagement = () => {
    const [clients, setClients] = useState([]);
    const [newClient, setNewClient] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/api/clients')
            .then((response) => setClients(response.data))
            .catch((error) => console.error("Failed to fetch clients:", error));
    }, []);

    const handleAddClient = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/clients', newClient)
            .then((response) => {
                setClients([...clients, response.data]);
                setNewClient({ name: '', email: '', phone: '' });
            })
            .catch((error) => console.error("Failed to add client:", error));
    };

    const handleDeleteClient = (id) => {
        axios.delete(`http://localhost:5000/api/clients/${id}`)
            .then(() => {
                setClients(clients.filter((client) => client._id !== id));
            })
            .catch((error) => console.error("Failed to delete client:", error));
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Add New Client</h3>
            <form onSubmit={handleAddClient} className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Client Name</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Enter client name"
                        value={newClient.name}
                        onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Client Email</label>
                    <input
                        type="email"
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Enter client email"
                        value={newClient.email}
                        onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Client Phone</label>
                    <input
                        type="tel"
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Enter client phone"
                        value={newClient.phone}
                        onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Save Client</button>
            </form>

            <h3 className="text-xl font-semibold mb-4">Existing Clients</h3>
            <table className="w-full border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.length > 0 ? (
                        clients.map((client) => (
                            <tr key={client._id}>
                                <td className="border px-4 py-2">{client.name}</td>
                                <td className="border px-4 py-2">{client.email}</td>
                                <td className="border px-4 py-2">{client.phone}</td>
                                <td className="border px-4 py-2">
                                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => handleDeleteClient(client._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-4">No clients available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// Contact Form Section
const ContactFormDetails = () => {
    const [contactForms, setContactForms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/contactForms')
            .then((response) => setContactForms(response.data))
            .catch((error) => console.error("Failed to fetch contact forms:", error));
    }, []);

    const handleDeleteContactForm = (id) => {
        axios.delete(`http://localhost:5000/api/contactForms/${id}`)
            .then(() => {
                setContactForms(contactForms.filter((form) => form._id !== id));
            })
            .catch((error) => console.error("Failed to delete contact form:", error));
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Form Submissions</h3>
            <table className="w-full border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Message</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contactForms.length > 0 ? (
                        contactForms.map((form) => (
                            <tr key={form._id}>
                                <td className="border px-4 py-2">{form.name}</td>
                                <td className="border px-4 py-2">{form.email}</td>
                                <td className="border px-4 py-2">{form.message}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => handleDeleteContactForm(form._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-4">No contact form submissions</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// Subscriber Section
const SubscribedEmails = () => {
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/subscribers')
            .then((response) => setSubscribers(response.data))
            .catch((error) => console.error("Failed to fetch subscribers:", error));
    }, []);

    const handleDeleteSubscriber = (id) => {
        axios.delete(`http://localhost:5000/api/subscribers/${id}`)
            .then(() => {
                setSubscribers(subscribers.filter((subscriber) => subscriber._id !== id));
            })
            .catch((error) => console.error("Failed to delete subscriber:", error));
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Subscribers</h3>
            <table className="w-full border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribers.length > 0 ? (
                        subscribers.map((subscriber) => (
                            <tr key={subscriber._id}>
                                <td className="border px-4 py-2">{subscriber.email}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => handleDeleteSubscriber(subscriber._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center py-4">No subscribers</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;
